"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
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
      id="iletisim" 
      className="py-24 relative overflow-hidden bg-[#172030]"
    >
      {/* Soft Ambient Mouse Spotlight on Background */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.03), transparent 40%)`
        }}
      />

      {/* Decorative Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-brand-blue/10 blur-[120px] rounded-full translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[50%] h-full bg-brand-blue/10 blur-[120px] rounded-full -translate-x-1/2" />
        <div className="absolute inset-0" 
             style={{
               backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
               backgroundSize: "30px 30px",
             }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6"
          >
            Hayalinizdeki Yaşama <br className="hidden md:block" /> Bir Adım Atın
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-sans"
          >
            MİEM Yapı ayrıcalığıyla inşa edilen prestijli projelerimiz hakkında detaylı bilgi almak ve size özel tekliflerimizden yararlanmak için hemen iletişime geçin.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Button className="h-14 px-8 text-base bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full shadow-lg shadow-brand-blue/20 transition-all hover:scale-105 w-full sm:w-auto">
              Teklif İsteyin
            </Button>
            <Button variant="outline" className="h-14 px-8 text-base rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white transition-all group w-full sm:w-auto bg-transparent">
              Projeleri Keşfedin
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
