"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const news = [
  {
    id: 1,
    date: "Kasım 2025",
    title: "MİEM Vadi Premium Projesi Lansmana Özel Fiyatlarla Satışa Çıktı",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    date: "Aralık 2025",
    title: "Sürdürülebilir Mimari ve Akıllı Ev Sistemleri Seminerimiz Gerçekleşti",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    date: "Ocak 2026",
    title: "MİEM Life Center, 2026 Yılının En İyi Karma Yaşam Projesi Seçildi",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    date: "Mart 2026",
    title: "Yalı Ege Projesi İle Bodrum'da Yeni Bir Lüks Anlayışı Doğuyor",
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    date: "Mayıs 2026",
    title: "Geleceğin Şehirleri: Kentsel Dönüşümde MİEM İmzası ve Teknolojileri",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  }
];

export function BlogSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth * 0.5, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth * 0.5, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      
      if (maxScroll <= 0) {
        setScrollProgress(0);
        return;
      }
      
      const progress = scrollLeft / maxScroll;
      setScrollProgress(progress);
    }
  };

  // Ensure progress is correct on mount
  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <section id="medya" className="py-24 bg-[#f4f5f7]">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Header Section */}
        <div className="mb-10 max-w-2xl">
          <span className="text-brand-blue font-medium tracking-wide text-sm mb-2 block">
            Basında Biz
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a2a2a] mb-3 tracking-tight">
            MİEM Haberler
          </h2>
          <p className="text-[#666] text-sm md:text-[0.95rem] leading-relaxed">
            MİEM Yapı olarak nerelerdeyiz, neler yapıyoruz ve gelecekte neler yapacağız?
          </p>
        </div>

        {/* Carousel Grid (Native Scroll) */}
        <div className="relative mb-8">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 lg:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {news.map((item) => (
              <Link 
                href={`#haber-${item.id}`} 
                key={item.id} 
                className="group relative h-[380px] w-[85%] md:w-[45%] lg:w-[calc(25%-1.125rem)] shrink-0 snap-start overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col"
              >
                {/* Top Border */}
                <div className="absolute top-0 inset-x-0 h-[4px] bg-brand-blue z-20 opacity-90" />

                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
                  />
                </div>
                
                {/* Soft Gradient for general text contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content Box (Bottom Aligned, Glassy Look) */}
                <div className="relative z-20 mt-auto p-5 md:p-6 flex flex-col">
                  <div className="absolute inset-0 bg-[#2a343c]/60 backdrop-blur-[2px] group-hover:bg-[#1a252d]/80 transition-colors duration-500" />
                  
                  <div className="relative z-30">
                    <span className="text-white/80 text-[0.7rem] mb-2 block font-medium">
                      {item.date}
                    </span>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-white font-bold text-[0.95rem] leading-snug tracking-wide group-hover:text-brand-blue transition-colors duration-300 min-h-[40px]">
                        {item.title}
                      </h3>
                      {/* Small decorative line on the right of text */}
                      <div className="self-end w-8 h-[2px] bg-brand-blue shrink-0 opacity-80 group-hover:w-12 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Navigation & Link */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-2 gap-8">
          
          {/* Arrows & Progress (From FeaturedProjects) */}
          <div className="flex items-center gap-6 md:gap-12 flex-1 w-full">
            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button 
                onClick={scrollLeft}
                className="p-2 text-gray-400 hover:text-brand-blue transition-colors group"
              >
                <ArrowLeft size={32} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={scrollRight}
                className="p-2 text-gray-400 hover:text-brand-blue transition-colors group"
              >
                <ArrowRight size={32} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex-1 h-[2px] bg-gray-200 relative overflow-hidden hidden md:block max-w-xl">
              <div 
                className="absolute top-0 left-0 h-full bg-brand-dark transition-all duration-300 ease-out"
                style={{ width: `${Math.max(20, scrollProgress * 100)}%` }}
              />
            </div>
          </div>

          {/* Tüm Haberler Link (Bottom Right) */}
          <Link 
            href="/haberler" 
            className="text-[#666] hover:text-brand-dark transition-colors font-medium text-sm tracking-wide shrink-0 border-b border-transparent hover:border-brand-dark pb-1"
          >
            TÜM HABERLER
          </Link>

        </div>

      </div>
    </section>
  );
}
