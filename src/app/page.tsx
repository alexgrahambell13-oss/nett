import { Utensils, Moon, Bell, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      {/* Header */}
      <header className="text-center mb-20 pt-5 animate-down">
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-4 font-serif bg-gradient-to-b from-white via-gray-200 to-kurapika-red/30 bg-clip-text text-transparent">
          Kurapika
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-normal tracking-wide">
          Premium Digital Goods, Tools & Services
        </p>
      </header>

      {/* About Section */}
      <section className="bg-[#0a0a0a] border border-[#222] hover:border-[#555] rounded-2xl p-8 md:p-10 mb-20 flex flex-col gap-5 transition-all duration-400 relative overflow-hidden group animate-up-1 hover:-translate-y-1 hover:shadow-2xl">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-kurapika-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-kurapika-red rounded-full shadow-[0_0_10px_rgba(211,47,47,0.8)]" />
          About Kurapika
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I'm a 17-year-old passionate about coding, creating high-quality tools, and pushing boundaries. I love eating, sleeping, and architecting seamless digital experiences. With over 5 years of experience in development, I strive to provide the best digital products on the market.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 border-t border-[#222] pt-8">
          {[
            { value: "5+", label: "Years Exp" },
            { value: "200+", label: "Vouches" },
            { value: "60+", label: "Products Sold" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center transition-transform duration-300 hover:scale-105">
              <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center tracking-tight animate-up-2">
        Our Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-up-3">
        {/* Product 1 */}
        <div className="bg-[#0a0a0a] border border-[#222] hover:border-kurapika-red/50 hover:bg-[#111] rounded-2xl p-8 flex flex-col transition-all duration-400 relative cursor-pointer group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(211,47,47,0.15)]">
          <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center mb-6 border border-[#333] transition-all duration-300 group-hover:bg-kurapika-red group-hover:border-kurapika-red group-hover:scale-110 group-hover:rotate-[5deg]">
             <Utensils className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">Eating Course</h3>
          <p className="text-gray-400 text-sm flex-grow mb-6 leading-relaxed">
            A comprehensive, step-by-step guide to mastering the art of eating. Perfect your technique, optimize nutrition, and enjoy meals like never before.
          </p>
          <div className="flex justify-between items-center mt-auto border-t border-[#222] pt-5">
            <div className="bg-[#111] px-3 py-1.5 rounded-lg border border-[#333] font-mono text-base font-bold text-gray-200">
              TBD
            </div>
            <button className="bg-white text-black border-none px-5 py-2.5 rounded-lg font-bold text-sm cursor-pointer transition-all duration-200 hover:bg-gray-200 hover:scale-105 group-hover:shadow-[0_0_0_0_rgba(211,47,47,0.4)] group-hover:animate-[pulse-red_1.5s_infinite]">
              Purchase
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-[#0a0a0a] border border-[#222] hover:border-kurapika-red/50 hover:bg-[#111] rounded-2xl p-8 flex flex-col transition-all duration-400 relative cursor-pointer group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(211,47,47,0.15)]">
          <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center mb-6 border border-[#333] transition-all duration-300 group-hover:bg-kurapika-red group-hover:border-kurapika-red group-hover:scale-110 group-hover:rotate-[5deg]">
             <Moon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">Sleeping Course</h3>
          <p className="text-gray-400 text-sm flex-grow mb-6 leading-relaxed">
            Unlock the secrets to deep, restful sleep. Learn scientifically proven methods to maximize your recovery and wake up feeling refreshed.
          </p>
          <div className="flex justify-between items-center mt-auto border-t border-[#222] pt-5">
            <div className="bg-[#111] px-3 py-1.5 rounded-lg border border-[#333] font-mono text-base font-bold text-gray-200">
              TBD
            </div>
            <button className="bg-white text-black border-none px-5 py-2.5 rounded-lg font-bold text-sm cursor-pointer transition-all duration-200 hover:bg-gray-200 hover:scale-105 group-hover:shadow-[0_0_0_0_rgba(211,47,47,0.4)] group-hover:animate-[pulse-red_1.5s_infinite]">
              Purchase
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-[#0a0a0a] border border-[#222] hover:border-kurapika-red/50 hover:bg-[#111] rounded-2xl p-8 flex flex-col transition-all duration-400 relative cursor-pointer group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(211,47,47,0.15)]">
          <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center mb-6 border border-[#333] transition-all duration-300 group-hover:bg-kurapika-red group-hover:border-kurapika-red group-hover:scale-110 group-hover:rotate-[5deg]">
             <Bell className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">Hydration Alerts</h3>
          <p className="text-gray-400 text-sm flex-grow mb-6 leading-relaxed">
            Join our exclusive Telegram GC subsection. Get timely, automated, and personalized alerts to remind you to drink water and stay hydrated.
          </p>
          <div className="flex justify-between items-center mt-auto border-t border-[#222] pt-5">
            <div className="bg-[#111] px-3 py-1.5 rounded-lg border border-[#333] font-mono text-base font-bold text-gray-200">
              $6.00
            </div>
            <button className="bg-white text-black border-none px-5 py-2.5 rounded-lg font-bold text-sm cursor-pointer transition-all duration-200 hover:bg-gray-200 hover:scale-105 group-hover:shadow-[0_0_0_0_rgba(211,47,47,0.4)] group-hover:animate-[pulse-red_1.5s_infinite]">
              Purchase
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-[#0a0a0a] border border-[#222] hover:border-kurapika-red/50 hover:bg-[#111] rounded-2xl p-8 flex flex-col transition-all duration-400 relative cursor-pointer group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(211,47,47,0.15)]">
          <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center mb-6 border border-[#333] transition-all duration-300 group-hover:bg-kurapika-red group-hover:border-kurapika-red group-hover:scale-110 group-hover:rotate-[5deg]">
             <Globe className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">Custom Domain</h3>
          <p className="text-gray-400 text-sm flex-grow mb-6 leading-relaxed">
            Get your very own custom domain perfectly configured, fully secured, and ready to go in minutes. Billed on a convenient yearly basis.
          </p>
          <div className="flex justify-between items-center mt-auto border-t border-[#222] pt-5">
            <div className="bg-[#111] px-3 py-1.5 rounded-lg border border-[#333] font-mono text-base font-bold text-gray-200">
              $5.00 / yr
            </div>
            <button className="bg-white text-black border-none px-5 py-2.5 rounded-lg font-bold text-sm cursor-pointer transition-all duration-200 hover:bg-gray-200 hover:scale-105 group-hover:shadow-[0_0_0_0_rgba(211,47,47,0.4)] group-hover:animate-[pulse-red_1.5s_infinite]">
              Purchase
            </button>
          </div>
        </div>

      </div>

      <footer className="mt-24 text-center text-gray-500 text-sm border-t border-[#222] pt-8 pb-6 animate-up-3">
        &copy; {new Date().getFullYear()} Kurapika. All rights reserved. Built with passion.
      </footer>
    </div>
  );
}