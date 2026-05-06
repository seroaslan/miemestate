"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, type PanInfo, useAnimationControls } from "framer-motion";
import { flushSync } from "react-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SlideDirection = -1 | 1;

const heroProjects = [
  {
    id: 1,
    subtitle: "Topkapı 29'da Lüksü Yakalayın!",
    title: "ÇAM SAKURA ŞEHİR HASTANESİ",
    location: "İSTANBUL",
    shortName: "Çam Sakura",
    image: "https://www.ilajak.com/uploads/hospitals/8918bb0c40c8212f44b7fbf87c552124B4G_241Liz.jpg"
  },

  {
    id: 2,
    subtitle: "Topkapı 29'da Lüksü Yakalayın!",
    title: "TOPKAPI29",
    location: "İSTANBUL",
    shortName: "TOPKAPI29",
    image: "https://www.akzirve.com/upload/projects/gallery/gallery_1721395412.jpg"
  },

  {
    id: 3,
    subtitle: "Çeşme'yi Şimdi 4 Mevsim Yaşayın!",
    title: "MİEM TERRA",
    location: "ÇEŞME",
    shortName: "TERRA ÇEŞME",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 4,
    subtitle: "Şehrin Merkezinde Lüks Yaşam!",
    title: "MİEM MONA",
    location: "İSTANBUL",
    shortName: "MONA İSTANBUL",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 5,
    subtitle: "Doğayla İç İçe Yenilikçi Mimari",
    title: "MİEM NEFES",
    location: "BODRUM",
    shortName: "NEFES BODRUM",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  }
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const isDraggingCarouselRef = useRef(false);
  const trackControls = useAnimationControls();

  const centerTrackX = "-20%";
  const prevTrackX = "0%";
  const nextTrackX = "-40%";

  const getWrappedIndex = (index: number) => {
    return (index + heroProjects.length) % heroProjects.length;
  };

  const slideTransition = {
    type: "spring" as const,
    stiffness: 118,
    damping: 24,
    mass: 1.02
  };

  const runSlide = async (direction: SlideDirection) => {
    if (isSliding) {
      return;
    }

    setIsSliding(true);

    await trackControls.start({
      x: direction === 1 ? nextTrackX : prevTrackX,
      transition: slideTransition
    });

    flushSync(() => {
      setCurrentIndex((prev) => getWrappedIndex(prev + direction));
    });

    trackControls.set({ x: centerTrackX });
    setIsSliding(false);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      void runSlide(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [isSliding]);

  useEffect(() => {
    trackControls.set({ x: centerTrackX });
  }, [trackControls]);

  const handlePrev = () => {
    void runSlide(-1);
  };

  const handleNext = () => {
    void runSlide(1);
  };

  const currentProject = heroProjects[currentIndex];
  const trackProjects = [-2, -1, 0, 1, 2].map((offset) => {
    const index = getWrappedIndex(currentIndex + offset);
    return {
      index,
      project: heroProjects[index]
    };
  });
  const centerSlotIndex = 2;

  const handleProjectSelect = (index: number, slotIndex: number) => {
    if (isDraggingCarouselRef.current || isSliding) {
      return;
    }

    if (slotIndex < centerSlotIndex) {
      handlePrev();
      return;
    }

    if (slotIndex > centerSlotIndex) {
      handleNext();
      return;
    }

    setCurrentIndex(index);
  };

  const handleCarouselDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeOffset = info.offset.x;
    const swipeVelocity = info.velocity.x;
    const swipeThreshold = 50;
    const velocityThreshold = 500;

    if (swipeOffset > swipeThreshold || swipeVelocity > velocityThreshold) {
      void runSlide(-1);
    } else if (swipeOffset < -swipeThreshold || swipeVelocity < -velocityThreshold) {
      void runSlide(1);
    } else {
      void trackControls.start({
        x: centerTrackX,
        transition: {
          type: "spring",
          stiffness: 210,
          damping: 26,
          mass: 0.8
        }
      });
    }

    requestAnimationFrame(() => {
      isDraggingCarouselRef.current = false;
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Images with AnimatePresence */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10" />
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Main Content container */}
      <div className="relative z-20 h-full container mx-auto px-4 md:px-6 flex flex-col justify-center">
        <div className="max-w-3xl mt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-white/90 text-xl md:text-2xl font-medium mb-4 drop-shadow-md">
                {currentProject.subtitle}
              </h3>

              <div className="mb-8 drop-shadow-xl">
                <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
                  {currentProject.title}
                </h1>
                <h2 className="text-5xl md:text-7xl font-bold text-white/90 leading-none">
                  {currentProject.location}
                </h2>
              </div>

              {/* Discover Project Link */}
              <a href="#detay" className="group inline-flex flex-col gap-2">
                <span className="text-white text-lg font-medium tracking-wide uppercase">Projeyi Keşfet</span>
                <span className="h-1 w-full bg-brand-blue/30 relative overflow-hidden rounded-full">
                  <motion.span
                    className="absolute top-0 left-0 h-full w-full bg-brand-blue"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Controls Bar */}
      <div className="absolute bottom-0 left-0 w-full z-30 flex items-end">

        {/* Scroll Mouse Icon */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-12 flex-col items-center gap-2">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-white rounded-full"
              animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          <div className="w-[1px] h-12 bg-white/30" />
        </div>

        {/* Project Switcher */}
        <div className="ml-auto w-full lg:w-auto bg-[#1a1f24]/90 backdrop-blur-xl border-t border-l border-white/10 flex flex-col sm:flex-row items-stretch">

          {/* Arrows */}
          <div className="flex border-b border-white/10 sm:border-b-0 sm:border-r">
            <button
              onClick={handlePrev}
              aria-label="Önceki proje"
              className="flex-1 p-4 text-white/50 hover:text-white hover:bg-white/5 transition-all sm:flex-none sm:p-5"
            >
              <ChevronLeft size={24} className="mx-auto" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Sonraki proje"
              className="flex-1 p-4 text-white/50 hover:text-white hover:bg-white/5 transition-all border-l border-white/10 sm:flex-none sm:p-5"
            >
              <ChevronRight size={24} className="mx-auto" />
            </button>
          </div>

          {/* Project List */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.14}
            dragMomentum={false}
            dragListener={!isSliding}
            onDragStart={() => {
              isDraggingCarouselRef.current = true;
            }}
            onDragEnd={handleCarouselDragEnd}
            whileDrag={{ cursor: "grabbing", scale: 0.995 }}
            className="relative min-h-[76px] w-full cursor-grab overflow-hidden touch-pan-y active:cursor-grabbing sm:min-w-[660px]"
          >
            <div className="pointer-events-none absolute inset-y-0 left-1/3 z-20 w-px -translate-x-1/2 bg-white/10" />
            <div className="pointer-events-none absolute inset-y-0 left-2/3 z-20 w-px -translate-x-1/2 bg-white/10" />
            <div className="pointer-events-none absolute inset-y-0 left-1/3 z-10 w-1/3 bg-white/[0.035] ring-1 ring-inset ring-white/10" />
            <div className="pointer-events-none absolute top-0 left-1/3 z-20 h-[2px] w-1/3 bg-brand-blue" />

            <motion.div
              initial={false}
              animate={trackControls}
              className="absolute inset-y-0 left-0 grid min-h-[76px] w-[166.6667%] grid-cols-5 will-change-transform"
            >
              {trackProjects.map(({ index, project }, slotIndex) => {
                const isVisuallyActive = slotIndex === centerSlotIndex;

                return (
                  <button
                    key={`${slotIndex}-${index}`}
                    onClick={() => handleProjectSelect(index, slotIndex)}
                    className={`relative flex min-h-[76px] flex-col items-center justify-center px-3 py-2 text-center transition-colors duration-300 sm:px-4 sm:py-3 ${
                      isVisuallyActive ? "text-white" : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center gap-0.5 px-2 sm:px-3">
                      <span
                        className={`block max-w-[12ch] text-center text-[9px] font-medium uppercase tracking-[0.18em] leading-tight sm:text-[10px] ${
                          isVisuallyActive ? "text-white/88" : "text-white/52"
                        }`}
                      >
                        {project.location}
                      </span>
                      <span
                        className={`block max-w-[12ch] text-center text-[13px] font-semibold leading-none tracking-tight sm:text-[1.05rem] ${
                          isVisuallyActive
                            ? "text-white"
                            : "text-white/66"
                        }`}
                      >
                        {project.shortName}
                      </span>
                    </div>
                  </button>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
