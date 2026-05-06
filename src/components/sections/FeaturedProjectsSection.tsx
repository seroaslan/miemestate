"use client";

import { useRef, useState, type MouseEvent, type PointerEvent, type TouchEvent } from "react";
import { ArrowLeft, ArrowRight, MapPin, Anchor, Car, Navigation } from "lucide-react";
import Link from "next/link";

const featuredProjects = [
  {
    id: 1,
    title: "MİEM Vadi Premium",
    logoText: "VADİ",
    description: "MİEM Vadi, şehrin kalbinde doğayla iç içe bir yaşam sunuyor. Şehrin dinamizmini modern mimari ve sıcak bir yaşam kurgusuyla buluşturan proje; doğru metrekare, akılcı planlama ve ulaşım kolaylığını bir araya getiriyor.",
    location: "Sarıyer, İstanbul",
    status: "SATIŞTA",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    distances: [
      { label: "Vadi İstanbul AVM", time: "5 dakika", icon: <Anchor className="w-4 h-4" /> },
      { label: "Belgrad Ormanı", time: "10 dakika", icon: <MapPin className="w-4 h-4" /> },
      { label: "E-5 Karayolu", time: "15 dakika", icon: <Car className="w-4 h-4" /> }
    ]
  },
  {
    id: 2,
    title: "MİEM Life Center",
    logoText: "LİFE",
    description: "MİEM Life Center sadece bugünün değil, yarının da yaşamını tasarlıyor. Stratejik konumu, güçlü ulaşım ağlarıyla çevrelenmiş yapısı sayesinde uzun vadede hem yaşam kalitesi hem de yüksek yatırım değeri sunan bir deneyim.",
    location: "Ataşehir, İstanbul",
    status: "YAKINDA",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
    distances: [
      { label: "Finans Merkezi", time: "3 dakika", icon: <Navigation className="w-4 h-4" /> },
      { label: "Metro İstasyonu", time: "5 dakika", icon: <Car className="w-4 h-4" /> }
    ]
  },
  {
    id: 3,
    title: "MİEM Yalı Ege",
    logoText: "YALI",
    description: "Ege'nin incisi Bodrum'da, denize sıfır konumuyla dört mevsim tatil tadında bir yaşam. Lüks, konfor ve minimalizmin eşsiz uyumu.",
    location: "Bodrum, Muğla",
    status: "SON DAİRELER",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    distances: [
      { label: "Milas Havalimanı", time: "30 dakika", icon: <Navigation className="w-4 h-4" /> },
      { label: "Yalıkavak Marina", time: "15 dakika", icon: <Anchor className="w-4 h-4" /> }
    ]
  }
];

const swipeThreshold = 50;

export function FeaturedProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStateRef = useRef({
    hasMoved: false,
    pointerId: null as number | null,
    startX: 0,
  });
  const dragOffsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  const suppressClickRef = useRef(false);
  const activeTransform = `translate3d(${-currentIndex * 100}%, 0, 0) translate3d(${dragOffset}px, 0, 0)`;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
  };

  const startDrag = (clientX: number, pointerId: number | null = null) => {
    dragStateRef.current = {
      hasMoved: false,
      pointerId,
      startX: clientX,
    };
    dragOffsetRef.current = 0;
    isDraggingRef.current = true;
    setDragOffset(0);
    setIsDragging(true);
  };

  const moveDrag = (clientX: number) => {
    const nextOffset = clientX - dragStateRef.current.startX;

    if (Math.abs(nextOffset) > 6) {
      dragStateRef.current.hasMoved = true;
    }

    dragOffsetRef.current = nextOffset;
    setDragOffset(nextOffset);
  };

  const commitDrag = (shouldCommit: boolean) => {
    const moved = dragStateRef.current.hasMoved;
    const offset = dragOffsetRef.current;

    if (shouldCommit && Math.abs(offset) >= swipeThreshold) {
      if (offset < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    if (moved) {
      suppressClickRef.current = true;
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 0);
    }

    dragStateRef.current.pointerId = null;
    dragOffsetRef.current = 0;
    isDraggingRef.current = false;
    setDragOffset(0);
    setIsDragging(false);
  };

  const handleDragStart = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") {
      return;
    }

    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    startDrag(event.clientX, event.pointerId);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleDragMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStateRef.current.pointerId !== event.pointerId) {
      return;
    }

    moveDrag(event.clientX);
  };

  const finishDrag = (event: PointerEvent<HTMLDivElement>, shouldCommit: boolean) => {
    if (dragStateRef.current.pointerId !== event.pointerId) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    commitDrag(shouldCommit);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (event.touches.length !== 1) {
      return;
    }

    startDrag(event.touches[0].clientX);
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || event.touches.length !== 1) {
      return;
    }

    moveDrag(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDraggingRef.current) {
      return;
    }

    commitDrag(true);
  };

  const handleClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (!suppressClickRef.current) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    suppressClickRef.current = false;
  };

  return (
    <section id="projeler" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-blue">
            Öne Çıkan Projeler
          </h2>
          <Link 
            href="/projeler" 
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors text-sm font-medium w-max"
          >
            <ArrowRight size={16} />
            Tüm Projeler
          </Link>
        </div>

        {/* Carousel Viewport */}
        <div 
          className={`w-full overflow-hidden mb-8 touch-pan-y select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onClickCapture={handleClickCapture}
          onPointerCancel={(event) => finishDrag(event, false)}
          onPointerDown={handleDragStart}
          onPointerMove={handleDragMove}
          onPointerUp={(event) => finishDrag(event, true)}
          onTouchCancel={() => commitDrag(false)}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
        >
          <div 
            className={`flex ${isDragging ? "" : "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"}`}
            style={{ 
              transform: activeTransform
            }}
          >
            {featuredProjects.map((project) => (
              <div 
                key={project.id} 
                className="w-full flex-none"
              >
                <div className="flex flex-col shadow-sm border border-gray-100 lg:min-h-[500px] lg:flex-row">
                  
                  {/* Left Info Panel */}
                  <div className="w-full lg:w-[45%] flex flex-col">
                    {/* Dark Logo Section with Glassmorphism */}
                    <div className="relative min-h-[145px] p-8 flex flex-col justify-center items-center text-center overflow-hidden bg-brand-dark md:flex-1 md:p-10">
                      {/* Decorative Background Elements */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/40 to-transparent z-0" />
                      <div className="absolute -top-20 -right-20 w-48 h-48 bg-brand-blue rounded-full blur-[80px] z-0 opacity-60" />
                      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-brand-blue rounded-full blur-[80px] z-0 opacity-40" />
                      
                      {/* Glass Layer */}
                      <div className="absolute inset-0 backdrop-blur-2xl bg-white/5 border-b border-white/10 z-10" />
                      
                      {/* Content */}
                      <div className="relative z-20 flex flex-col items-center">
                        <span className="text-white/60 text-xs tracking-[0.3em] mb-2 uppercase font-medium">MİEM YAPI</span>
                        <div className="flex flex-col items-center">
                          <span className="text-white text-4xl font-serif drop-shadow-md">{project.logoText}</span>
                          <span className="text-white/90 font-light tracking-[0.4em] text-sm mt-2 uppercase">Projesi</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description Section */}
                    <div className="hidden md:flex bg-[#f8f9fa] p-10 flex-1 items-center">
                      <p className="text-gray-500 text-[0.95rem] leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Bottom Footer Section */}
                    <div className="bg-[#f1f5f9] p-5 flex flex-col justify-between gap-4 md:p-6">
                      <div className="flex items-center justify-between text-gray-500 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{project.location}</span>
                        </div>
                        <button className="hover:text-brand-blue transition-colors text-xs uppercase tracking-wider font-medium">
                          Haritada Gör
                        </button>
                      </div>
                      <Link href={`#proje-${project.id}`} className="flex items-center gap-4 text-brand-dark hover:text-brand-blue transition-colors font-medium text-sm tracking-widest uppercase mt-4">
                        PROJE DETAYLARI <ArrowRight size={18} strokeWidth={1.5} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Image Panel */}
                  <div className="w-full lg:w-[55%] relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      draggable={false}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-6 right-6 z-10">
                      <span className="px-4 py-1.5 bg-[#10b981] text-white text-xs font-bold rounded-full shadow-lg tracking-wider">
                        {project.status}
                      </span>
                    </div>

                    {/* Distances Overlay */}
                    <div 
                      className="absolute bottom-3 left-1/2 z-10 grid w-[calc(100%-2rem)] max-w-[360px] -translate-x-1/2 divide-x divide-gray-100 bg-white/95 shadow-2xl backdrop-blur-md lg:bottom-6 lg:left-auto lg:right-6 lg:block lg:w-auto lg:min-w-[200px] lg:max-w-none lg:translate-x-0 lg:divide-x-0 lg:divide-y"
                      style={{ gridTemplateColumns: `repeat(${project.distances.length}, minmax(0, 1fr))` }}
                    >
                      {project.distances.map((dist, idx) => (
                        <div key={idx} className="flex min-w-0 items-center justify-center gap-2 p-3 transition-colors hover:bg-gray-50 cursor-default lg:justify-start lg:gap-4 lg:pr-8">
                          <div className="shrink-0 text-gray-400">
                            {dist.icon}
                          </div>
                          <div className="flex min-w-0 flex-col">
                            <span className="truncate text-gray-500 text-[0.6rem] tracking-wider uppercase lg:text-[0.65rem]">{dist.label}</span>
                            <span className="text-brand-dark text-[0.8rem] font-bold">{dist.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation (Arrows & Progress) */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mt-4">
          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              className="p-2 text-gray-400 hover:text-brand-blue transition-colors group"
            >
              <ArrowLeft size={32} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 text-gray-400 hover:text-brand-blue transition-colors group"
            >
              <ArrowRight size={32} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex-1 w-full h-[2px] bg-gray-200 relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-brand-dark transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ width: `${((currentIndex + 1) / featuredProjects.length) * 100}%` }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
