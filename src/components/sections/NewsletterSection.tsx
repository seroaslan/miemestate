import { ArrowUpRight } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="w-full bg-white">
      <div className="flex w-full flex-col overflow-hidden lg:h-[380px] lg:flex-row">
        {/* Left Side: Image */}
        <div className="relative h-[220px] w-full lg:h-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="MİEM Yapı Lüks Yaşam"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Side: Content Area */}
        <div className="flex w-full flex-col lg:w-1/2">
          {/* Newsletter Form */}
          <div className="flex flex-col justify-center bg-[#f8f9fa] px-6 py-8 md:px-12 lg:flex-1 lg:px-14 lg:py-10">
            <div className="mb-5">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#182030] tracking-tight mb-2">
                Geleceğin yaşamını birlikte şekillendirelim
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-[15px] leading-relaxed">
                Yeni projeler, fırsatlar ve MİEM Yapı'nın yaşamı değerli kılan yaklaşımını yakından takip etmek isterseniz e-bültenimize kaydolabilirsiniz. Unutmayın ki sizinle sadece gerçekten önemli olan gelişmeleri paylaşacağız. Fazlasını değil, ihtiyacınız olanı.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Input Group */}
              <div className="relative flex items-center w-full">
                <input
                  type="email"
                  placeholder="E-posta Adresiniz"
                  className="w-full h-12 md:h-14 rounded-full border border-gray-300 bg-transparent px-6 pr-[110px] md:pr-32 text-gray-700 focus:outline-none focus:border-[#182030] transition-colors font-light text-sm"
                />
                <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#182030] hover:bg-brand-blue text-white rounded-full px-4 md:px-6 flex items-center gap-2 transition-colors duration-300">
                  <span className="font-medium text-sm">Gönder</span>
                  <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center">
                    <ArrowUpRight size={12} />
                  </div>
                </button>
              </div>

              {/* Checkboxes */}
              <div className="flex flex-col xl:flex-row gap-3 xl:gap-6 text-[11px] text-gray-500 font-light mt-1">
                <label className="flex items-start gap-2.5 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-[1px]">
                    <input type="checkbox" className="peer appearance-none w-3.5 h-3.5 border border-gray-300 rounded-sm checked:bg-[#182030] checked:border-[#182030] transition-colors" />
                    <div className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
                      <svg width="8" height="6" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <span className="group-hover:text-gray-700 transition-colors leading-relaxed">
                    <span className="underline decoration-gray-300 underline-offset-2">Gizlilik Politikası</span> ve <span className="underline decoration-gray-300 underline-offset-2">KVKK metnini</span> okudum, onaylıyorum.
                  </span>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-[1px]">
                    <input type="checkbox" className="peer appearance-none w-3.5 h-3.5 border border-gray-300 rounded-sm checked:bg-[#182030] checked:border-[#182030] transition-colors" />
                    <div className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
                      <svg width="8" height="6" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <span className="group-hover:text-gray-700 transition-colors leading-relaxed">
                    Grup şirketlerince <span className="underline decoration-gray-300 underline-offset-2">Ticari ileti</span> gönderilmesine onay veriyorum.
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
