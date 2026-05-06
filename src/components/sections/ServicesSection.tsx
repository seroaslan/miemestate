"use client";

import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Projelendirme",
    description: "Mimari ve mühendislik projelerini ihtiyaçlarınıza, zemin koşullarına ve uygulama detaylarına uygun şekilde hazırlarız.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Özel İnşaat",
    description: "Villa, fabrika, üretim alanı, depo, hangar ve kişiye özel yapı projelerinde anahtar teslim çözümler sunarız.",
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Konut",
    description: "İnsan ve doğa odaklı, çağdaş mimariye sahip, güvenli ve yatırım değeri yüksek konut projeleri geliştiririz.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Taahhüt İşleri",
    description: "Alt yapı, üst yapı, dekorasyon, restorasyon, mekanik, elektrik ve bina otomasyonu dahil kapsamlı taahhüt hizmetleri veririz.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Güçlendirme",
    description: "Mevcut yapıların analiz, inceleme ve mühendislik hesapları doğrultusunda güvenli şekilde güçlendirilmesini sağlarız.",
    image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1200&auto=format&fit=crop"
  }
];

export function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState<number | null>(null);

  return (
    <section id="faaliyet" className="w-full bg-[#fcfcfc] pb-20 pt-12">
      {/* Title Section */}
      <div className="container mx-auto mb-10 px-4 md:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-3 block">
            Uzmanlık Alanlarımız
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1e293b] leading-tight">
            Hizmet Alanları
          </h2>
        </div>
      </div>

      {/* Expanding services accordion */}
      <div
        className="flex h-[320px] w-full overflow-x-auto overflow-y-hidden md:h-[360px] md:overflow-hidden lg:h-[380px]"
        onMouseLeave={() => setActiveServiceId(null)}
      >
        {services.map((service) => {
          const isActive = activeServiceId === service.id;

          return (
          <div
            key={service.id}
            onMouseEnter={() => setActiveServiceId(service.id)}
            onFocus={() => setActiveServiceId(service.id)}
            onClick={() => setActiveServiceId(isActive ? null : service.id)}
            className={[
              "group relative min-w-[76vw] cursor-pointer overflow-hidden border-r border-white/15 outline-none transition-[flex,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:min-w-0",
              isActive ? "md:flex-[2.35]" : "md:flex-1",
            ].join(" ")}
            role="button"
            tabIndex={0}
            aria-expanded={isActive}
          >
            <img 
              src={service.image}
              alt={service.title}
              className={[
                "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out",
                isActive ? "scale-105" : "scale-100",
              ].join(" ")}
            />

            <div
              className={[
                "pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#101820]/90 via-[#101820]/25 to-transparent transition-opacity duration-500",
                isActive ? "opacity-80" : "opacity-100",
              ].join(" ")}
            />
            <div
              className={[
                "pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#06111d]/85 via-[#06111d]/35 to-transparent transition-opacity duration-500",
                isActive ? "opacity-100" : "opacity-0",
              ].join(" ")}
            />

            <div
              className={[
                "pointer-events-none absolute inset-0 z-20 flex flex-col justify-end p-5 transition-opacity duration-300 md:p-7",
                isActive ? "opacity-0 md:opacity-0" : "opacity-100",
              ].join(" ")}
            >
              <h3 className="text-center text-sm font-bold uppercase tracking-[0.12em] text-white drop-shadow-md md:text-base">
                {service.title}
              </h3>
            </div>

            <div className="absolute right-5 top-5 z-30 flex size-11 items-center justify-center text-white/90">
              <span
                className={[
                  "absolute h-px w-11 bg-white transition-transform duration-500",
                  isActive ? "rotate-0" : "rotate-0",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute h-11 w-px bg-white transition-transform duration-500",
                  isActive ? "rotate-90" : "rotate-0",
                ].join(" ")}
              />
            </div>

            <div
              className={[
                "absolute inset-0 z-30 flex flex-col justify-end p-6 text-white transition-all duration-500 md:p-8 lg:p-10",
                isActive ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
              ].join(" ")}
            >
              <div className="max-w-md">
                <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-white/80">
                  <Plus size={14} strokeWidth={2.5} />
                  Hizmet Alanı
                </div>
                <h3 className="text-2xl font-black uppercase tracking-normal text-white drop-shadow-md md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/90 md:max-w-sm">
                  {service.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                  İncele
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}
