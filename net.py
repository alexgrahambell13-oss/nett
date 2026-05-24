import json
import requests

def parse_netscape(cookie_text):
    cookies = {}
    for line in cookie_text.splitlines():
        if not line or line.startswith('#'):
            continue
        parts = line.split('\t')
        if len(parts) >= 7:
            name = parts[5]
            value = parts[6]
            cookies[name] = value
    return cookies

def parse_json(cookie_text):
    cookies = {}
    try:
        data = json.loads(cookie_text)
        if isinstance(data, list):
            for c in data:
                if 'name' in c and 'value' in c:
                    cookies[c['name']] = c['value']
        elif isinstance(data, dict):
            # sometimes exported as {"cookie_name": "cookie_value"} directly?
            # standard export is usually list. but handle dict just in case
            if 'name' in data and 'value' in data:
                 cookies[data['name']] = data['value']
            else:
                 cookies = data
    except Exception:
        pass
    return cookies

def parse_cookies(cookie_text):
    cookie_text = cookie_text.strip()
    if cookie_text.startswith('[') or cookie_text.startswith('{'):
        return parse_json(cookie_text)
    else:
        return parse_netscape(cookie_text)

def check_netflix(cookies_dict):
    if not cookies_dict:
         return False, "Invalid/Empty Cookies"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
    }
    try:
        # Check Netflix profile/browse page
        response = requests.get("https://www.netflix.com/browse", cookies=cookies_dict, headers=headers, allow_redirects=False, timeout=10)
        # Netflix redirects to /login or / if not logged in.
        # If logged in, it usually gives 200 or 30x to a different page, but not login
        if response.status_code == 200:
            return True, "Valid"
        elif response.status_code in [301, 302, 303, 307, 308]:
            location = response.headers.get("Location", "")
            if "login" not in location.lower() and "clearcookies" not in location.lower():
                 return True, f"Valid (Redirect: {location})"
            else:
                 return False, "Invalid (Redirected to Login)"
        else:
            return False, f"Unknown status: {response.status_code}"
    except Exception as e:
        return False, f"Error: {str(e)}"

import customtkinter as ctk
import threading
from tkinter import filedialog, messagebox

class KuroCookiesApp(ctk.CTk):
    def __init__(self):
        super().__init__()

        self.title("kuroCookies")
        self.geometry("600x500")
        self.minsize(500, 400)
        
        # Configure grid
        self.grid_columnconfigure(0, weight=1)
        self.grid_rowconfigure(1, weight=1)

        # Header
        self.header_label = ctk.CTkLabel(self, text="Netflix Cookie Checker", font=ctk.CTkFont(size=24, weight="bold"))
        self.header_label.grid(row=0, column=0, padx=20, pady=(20, 10))

        # Text area for cookies
        self.textbox = ctk.CTkTextbox(self, width=500, height=250)
        self.textbox.grid(row=1, column=0, padx=20, pady=(0, 10), sticky="nsew")
        self.textbox.insert("0.0", "Paste your JSON or Netscape cookies here...\n")

        # Buttons Frame
        self.buttons_frame = ctk.CTkFrame(self, fg_color="transparent")
        self.buttons_frame.grid(row=2, column=0, padx=20, pady=10)

        self.load_btn = ctk.CTkButton(self.buttons_frame, text="Load File", command=self.load_file)
        self.load_btn.pack(side="left", padx=10)

        self.clear_btn = ctk.CTkButton(self.buttons_frame, text="Clear", command=self.clear_text)
        self.clear_btn.pack(side="left", padx=10)

        self.check_btn = ctk.CTkButton(self.buttons_frame, text="Check Cookie", command=self.start_check, fg_color="#E50914", hover_color="#B81D24")
        self.check_btn.pack(side="left", padx=10)

        # Status
        self.status_label = ctk.CTkLabel(self, text="Status: Waiting for input...", font=ctk.CTkFont(size=14))
        self.status_label.grid(row=3, column=0, padx=20, pady=(0, 20))

    def load_file(self):
        file_path = filedialog.askopenfilename(
            title="Select Cookie File",
            filetypes=[("Text files", "*.txt"), ("JSON files", "*.json"), ("All files", "*.*")]
        )
        if file_path:
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                self.textbox.delete("0.0", "end")
                self.textbox.insert("0.0", content)
                self.status_label.configure(text=f"Status: Loaded {file_path}", text_color="white")
            except Exception as e:
                messagebox.showerror("Error", f"Failed to read file:\n{e}")

    def clear_text(self):
        self.textbox.delete("0.0", "end")
        self.status_label.configure(text="Status: Cleared", text_color="white")

    def start_check(self):
        cookie_text = self.textbox.get("0.0", "end").strip()
        if not cookie_text or cookie_text == "Paste your JSON or Netscape cookies here...":
            self.status_label.configure(text="Status: Please input cookies first.", text_color="orange")
            return

        self.status_label.configure(text="Status: Checking...", text_color="yellow")
        self.check_btn.configure(state="disabled")

        # Run checking in background thread
        threading.Thread(target=self.do_check, args=(cookie_text,), daemon=True).start()

    def do_check(self, cookie_text):
        parsed = parse_cookies(cookie_text)
        if not parsed:
            self.update_status("Invalid or Empty Cookie Format", "red")
            return
            
        is_valid, msg = check_netflix(parsed)
        if is_valid:
            self.update_status(f"Valid Cookie! ({msg})", "green")
        else:
            self.update_status(f"Invalid Cookie. ({msg})", "red")

    def update_status(self, text, color):
        # Update UI in main thread
        self.after(0, lambda: self._update_status_ui(text, color))

    def _update_status_ui(self, text, color):
        self.status_label.configure(text=f"Status: {text}", text_color=color)
        self.check_btn.configure(state="normal")

if __name__ == "__main__":
    ctk.set_appearance_mode("Dark")  # Modes: "System" (standard), "Dark", "Light"
    ctk.set_default_color_theme("blue")  # Themes: "blue" (standard), "green", "dark-blue"
    app = KuroCookiesApp()
    app.mainloop()
