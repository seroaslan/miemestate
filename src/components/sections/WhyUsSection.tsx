"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Leaf, Gem, Building2, ShieldCheck } from "lucide-react";

const reasons = [
  {
    title: "Sürdürülebilir Vizyon:",
    description: "Doğayla uyumlu, enerji verimli ve çevreye duyarlı yapılar tasarlayarak geleceğe değer katıyoruz.",
    icon: <Leaf className="w-7 h-7 text-white" strokeWidth={1.5} />
  },
  {
    title: "Değer Odaklı Yatırım:",
    description: "Her projemizde, bugünün kazancını geleceğin potansiyeliyle birleştirerek kalıcı değer oluşturuyoruz.",
    icon: <Gem className="w-7 h-7 text-white" strokeWidth={1.5} />
  },
  {
    title: "Estetik ve Mimaride Mükemmellik:",
    description: "Modern çizgileri zamansız bir zarafetle birleştirerek estetiği yaşam alanlarına taşıyoruz.",
    icon: <Building2 className="w-7 h-7 text-white" strokeWidth={1.5} />
  },
  {
    title: "Güven Temelli Yaklaşım:",
    description: "Her projemizde, yatırımcılarımıza uzun vadeli kazanç ve tam şeffaflık sunarak güvenin temellerini inşa ediyoruz.",
    icon: <ShieldCheck className="w-7 h-7 text-white" strokeWidth={1.5} />
  }
];

export function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-24 md:py-32 overflow-hidden bg-[#182030]"
    >
      {/* Soft Ambient Mouse Spotlight on Background */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.03), transparent 40%)`
        }}
      />

      {/* Decorative Background Elements (Simulating the atmospheric depth) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full border-[1px] border-white/5 opacity-20" />
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full border-[1px] border-white/5 opacity-20" />
        <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] rounded-full border-[1px] border-white/5 opacity-20" />
        <div className="absolute -bottom-20 -right-20 w-[800px] h-[800px] rounded-full border-[1px] border-white/5 opacity-20" />
        
        {/* Subtle Glows */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-blue rounded-full blur-[150px] opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center">
          
          {/* Left Side - Content */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8">
              NEDEN MİEM YAPI?
            </h2>
            
            <p className="text-gray-300/90 text-lg md:text-xl leading-relaxed mb-12 font-light max-w-lg">
              MİEM Yapı, yalnızca yapılar değil; güven, değer ve yaşam kültürü inşa eder. Her projemizde, estetik ile sürdürülebilirliği, kazanç ile güveni buluşturuyoruz. Çünkü biz, geleceği bugünden tasarlıyoruz.
            </p>

            <button className="group flex items-center gap-4 bg-white hover:bg-gray-50 text-[#182030] px-2 py-2 pr-6 rounded-full w-max transition-all duration-300 shadow-xl shadow-black/20">
              <span className="pl-6 font-medium tracking-wide">MİEM'i Keşfet</span>
              <div className="w-10 h-10 rounded-full border border-[#182030]/20 flex items-center justify-center group-hover:bg-[#182030] group-hover:text-white transition-colors duration-300">
                <ArrowUpRight size={18} strokeWidth={1.5} className="group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </button>
          </div>

          {/* Right Side - 2x2 Grid */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-transparent border border-white/10 rounded-2xl p-8 hover:bg-white/[0.03] transition-colors duration-500 group flex flex-col h-full"
                >
                  <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:-translate-y-1 transform">
                    {reason.icon}
                  </div>
                  <h3 className="text-[1.15rem] font-bold text-white mb-4 tracking-wide w-full text-left">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 text-[0.9rem] leading-relaxed font-light w-full text-left">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
