"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  compact?: boolean;
  duration?: number;
}

function Counter({ value, prefix = "", suffix = "", compact = false, duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    duration: duration * 1000
  });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      const current = Math.floor(latest);
      setDisplayValue(compact && current >= 1000 ? `${Math.floor(current / 1000)}K` : current.toLocaleString("tr-TR"));
    });
  }, [compact, springValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

const stats = [
  { id: 1, value: 20, suffix: "+", label: "Yıllık Sektör Deneyimi" },
  { id: 2, value: 50, suffix: "+", label: "Tamamlanan Proje" },
  { id: 3, value: 100000, suffix: "+", label: "m² Uygulama Alanı", compact: true },
  { id: 4, value: 15, suffix: "+", label: "Yaşam Alanı" }
];

export function StatsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } }
  };

  return (
    <section className="relative bg-[#183452] text-white">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-10 md:px-8 md:py-12">
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-x-8 gap-y-8 text-center md:grid-cols-4 md:gap-x-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="flex min-h-[72px] flex-col items-center justify-center"
            >
              <div className="text-[2.35rem] font-serif leading-none tracking-normal md:text-[3rem]">
                <Counter value={stat.value} suffix={stat.suffix} compact={stat.compact} />
              </div>
              <p className="mt-3 text-[0.68rem] font-semibold leading-tight text-white/90 md:text-[0.72rem]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
