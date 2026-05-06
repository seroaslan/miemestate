import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#f8f9fa] border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-black tracking-tighter text-brand-dark">
                MİEM
              </span>
              <span className="text-3xl font-black tracking-tighter text-brand-blue">
                YAPI
              </span>
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Modern mimari anlayışı ve yenilikçi projelerle geleceğin yaşam alanlarını inşa ediyoruz. Kalite ve güvenin adresi.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="group w-10 h-10 rounded-full bg-white flex items-center justify-center hover:shadow-md transition-all border border-gray-100">
                <img src="/linkedin.svg" alt="LinkedIn" className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="#" className="group w-10 h-10 rounded-full bg-white flex items-center justify-center hover:shadow-md transition-all border border-gray-100">
                <img src="/instagram.svg" alt="Instagram" className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="#" className="group w-10 h-10 rounded-full bg-white flex items-center justify-center hover:shadow-md transition-all border border-gray-100">
                <img src="/facebook.svg" alt="Facebook" className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-brand-dark mb-6">Hızlı Bağlantılar</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-600 hover:text-brand-blue transition-colors">Ana Sayfa</Link>
              </li>
              <li>
                <Link href="#kurumsal" className="text-gray-600 hover:text-brand-blue transition-colors">Hakkımızda</Link>
              </li>
              <li>
                <Link href="#projeler" className="text-gray-600 hover:text-brand-blue transition-colors">Projelerimiz</Link>
              </li>
              <li>
                <Link href="#faaliyet" className="text-gray-600 hover:text-brand-blue transition-colors">Faaliyet Alanları</Link>
              </li>
              <li>
                <Link href="#blog" className="text-gray-600 hover:text-brand-blue transition-colors">Blog & Haberler</Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-lg font-bold text-brand-dark mb-6">Projelerimiz</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-600 hover:text-brand-blue transition-colors">MİEM Premium</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-brand-blue transition-colors">MİEM Vadi</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-brand-blue transition-colors">MİEM Life</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-brand-blue transition-colors">Tamamlanan Projeler</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-brand-blue transition-colors">Devam Eden Projeler</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-brand-dark mb-6">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-blue shrink-0 mt-1" size={20} />
                <span className="text-gray-600">Örnek Mahallesi, Yapı Caddesi No:1, Şişli / İstanbul</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-blue shrink-0" size={20} />
                <span className="text-gray-600">+90 (212) 555 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-blue shrink-0" size={20} />
                <span className="text-gray-600">info@miemyapi.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} MİEM Yapı. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="text-gray-500 hover:text-brand-blue transition-colors">Gizlilik Politikası</Link>
            <Link href="#" className="text-gray-500 hover:text-brand-blue transition-colors">Kullanım Koşulları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
