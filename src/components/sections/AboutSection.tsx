"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="kurumsal" className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-[3.5rem] top-[-3.25rem] select-none text-[42rem] font-black leading-[0.78] tracking-[-0.08em] text-[#f2f5f9] md:-left-[5.5rem] md:top-[-6.25rem] md:text-[58rem] lg:-left-[4.5rem] lg:top-[-7rem] lg:text-[63rem]">
        M
      </div>

      <div className="relative z-10 mx-auto grid min-h-[520px] w-full max-w-[1180px] grid-cols-1 px-5 py-24 md:min-h-[615px] md:grid-cols-[0.9fr_1.15fr] md:items-center md:gap-20 md:px-8 md:py-0 lg:grid-cols-[390px_1fr] lg:gap-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65 }}
          className="relative md:pl-8 lg:pl-0"
        >
          <h2 className="text-[2.45rem] font-serif leading-[1.1] tracking-normal text-[#1d2b42] md:text-[3.05rem]">
            Welcome to
            <br />
            MİEM YAPI
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-14 border-l border-brand-blue/70 pl-8 md:mt-0 md:pl-12 lg:pl-16"
        >
          <div className="max-w-[625px] text-[0.95rem] leading-[1.72] text-[#53677f]">
            <p>
              MİEM Yapı olarak, modern mimari anlayışımız ve yenilikçi vizyonumuzla geleceğin yaşam alanlarını inşa ediyoruz. Estetik, konfor ve güvenliği bir araya getiren projelerimizle, sadece binalar değil, kalıcı değerler yaratıyoruz.
            </p>

            <p className="mt-7">
              Her detayında mükemmelliği hedefleyen uzman kadromuzla, müşteri memnuniyetini en üst düzeyde tutuyoruz. Sürdürülebilir çevre bilinciyle hayata geçirdiğimiz projeler, standartların ötesinde bir yaşam deneyimi sunmak için tasarlandı.
            </p>

            <p className="mt-7">
              Birlikte, hayal ettiğiniz geleceği bugünden şekillendiriyoruz. MİEM Yapı kalitesiyle tanışın.
            </p>
          </div>

          <Link
            href="#kurumsal-detay"
            className="mt-8 inline-flex items-center px-4 py-2 text-sm text-[#1d436e] transition-colors [clip-path:polygon(0_0,10px_0,10px_1px,1px_1px,1px_calc(100%-1px),10px_calc(100%-1px),10px_100%,0_100%,0_0,100%_0,100%_100%,calc(100%-10px)_100%,calc(100%-10px)_calc(100%-1px),calc(100%-1px)_calc(100%-1px),calc(100%-1px)_1px,calc(100%-10px)_1px,calc(100%-10px)_0)] hover:text-brand-blue"
          >
            Daha Fazla Bilgi
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
