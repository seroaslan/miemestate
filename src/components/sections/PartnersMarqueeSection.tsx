import type { LucideIcon } from "lucide-react";
import { Building2, Compass, Factory, Home, Landmark, MapPin } from "lucide-react";

type PartnerLogo = {
  eyebrow?: string;
  name: string;
  suffix?: string;
  icon: LucideIcon;
  tone?: "dark" | "blue";
};

const partners: PartnerLogo[] = [
  { name: "ESBAH", suffix: "Inovasyon Vadisi", icon: Compass },
  { name: "Sehrin", suffix: "Merkezinde", icon: MapPin },
  { name: "ESBAH", suffix: "Ipekyolu", icon: Building2 },
  { eyebrow: "tem", name: "34", suffix: "Ikitelli", icon: Landmark },
  { eyebrow: "tem", name: "34", suffix: "Tahtakale", icon: Factory, tone: "blue" },
  { eyebrow: "tem", name: "34", suffix: "Esenyurt", icon: Home },
];

function LogoMark({ partner }: { partner: PartnerLogo }) {
  const Icon = partner.icon;
  const isTemLogo = Boolean(partner.eyebrow);

  return (
    <div className="flex h-16 min-w-[190px] shrink-0 items-center justify-center gap-3 text-[#4f5459] grayscale opacity-75 transition-opacity duration-300 hover:opacity-100 md:min-w-[240px]">
      <Icon
        className={partner.tone === "blue" ? "size-9 text-brand-blue" : "size-9 text-[#6e7377]"}
        strokeWidth={1.8}
      />
      {isTemLogo ? (
        <div className="flex items-end gap-1 leading-none">
          <span
            className={
              partner.tone === "blue"
                ? "text-3xl font-black tracking-normal text-[#1170b8]"
                : "text-3xl font-black tracking-normal text-[#5d6165]"
            }
          >
            {partner.eyebrow}
          </span>
          <span
            className={
              partner.tone === "blue"
                ? "text-4xl font-black tracking-normal text-[#1170b8]"
                : "text-4xl font-black tracking-normal text-[#5d6165]"
            }
          >
            {partner.name}
          </span>
          <span className="mb-1 ml-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#777b7f]">
            {partner.suffix}
          </span>
        </div>
      ) : (
        <div className="leading-tight">
          <div className="text-2xl font-black uppercase tracking-normal text-[#4d5257]">{partner.name}</div>
          <div className="text-sm font-semibold uppercase tracking-[0.08em] text-[#6d7379]">{partner.suffix}</div>
        </div>
      )}
    </div>
  );
}

function LogoGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex min-w-max items-center gap-10 px-5 md:gap-16 md:px-8" aria-hidden={hidden}>
      {partners.map((partner, index) => (
        <LogoMark key={`${partner.name}-${partner.suffix}-${index}`} partner={partner} />
      ))}
    </div>
  );
}

export function PartnersMarqueeSection() {
  return (
    <section className="overflow-hidden bg-[#f2f2f2] py-8 md:py-10" aria-label="Calistigimiz firmalar">
      <div className="partners-marquee">
        <div className="partners-marquee-track flex w-max items-center">
          <LogoGroup />
          <LogoGroup hidden />
        </div>
      </div>
    </section>
  );
}
