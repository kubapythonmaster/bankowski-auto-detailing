import React from 'react'
import { Phone, Facebook, MapPin } from 'lucide-react'
import { FB_MSG, FB_URL, PHONE, TEL } from '../data/site'

const Contact = () => {
  return (
    <section id="kontakt" className="section-pad border-t border-white/10">
      <div className="wrap grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
        <div>
          <p className="font-display text-gold tracking-[0.18em] uppercase text-sm mb-2">Kontakt</p>
          <h2 className="font-display text-[clamp(1.9rem,5vw,3.2rem)] font-bold uppercase tracking-wide mb-4">
            Umów auto detailing
          </h2>
          <p className="text-muted max-w-md mb-9 text-sm sm:text-base leading-relaxed">
            Chcesz mycie detailingowe, czyszczenie wnętrza albo pełną korektę lakieru? Zadzwoń —
            wycenimy zakres mobilnie albo stacjonarnie.
          </p>

          <ul className="space-y-0 mb-9">
            <li className="border-t border-white/10 py-5 flex gap-4 items-start">
              <Phone className="text-gold shrink-0 mt-1" size={20} strokeWidth={1.75} />
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted mb-1">Telefon</p>
                <a href={TEL} className="font-display text-2xl sm:text-3xl text-gold hover:text-gold-light">
                  {PHONE}
                </a>
              </div>
            </li>
            <li className="border-t border-white/10 py-5 flex gap-4 items-start">
              <Facebook className="text-gold shrink-0 mt-1" size={20} strokeWidth={1.75} />
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted mb-1">Facebook</p>
                <a
                  href={FB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xl sm:text-2xl uppercase hover:text-gold"
                >
                  Bańkowski Auto Detailing
                </a>
              </div>
            </li>
            <li className="border-t border-b border-white/10 py-5 flex gap-4 items-start">
              <MapPin className="text-gold shrink-0 mt-1" size={20} strokeWidth={1.75} />
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted mb-1">Forma usługi</p>
                <p className="font-display text-xl sm:text-2xl uppercase">Mobilny i stacjonarny</p>
                <p className="text-sm text-muted mt-1">Dojazd do klienta lub pełny zakres w studio</p>
              </div>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <a href={TEL} className="btn-gold gap-2">
              <Phone size={18} strokeWidth={2.25} />
              Zadzwoń teraz
            </a>
            <a href={FB_MSG} target="_blank" rel="noopener noreferrer" className="btn-line">
              Messenger
            </a>
          </div>
        </div>

        <div className="relative border border-white/10 overflow-hidden min-h-[300px] sm:min-h-[420px]">
          <img
            src="./realizacje/yaris-tyl.jpg"
            alt="Samochód po detailingu Bańkowski — czysty lakier i felgi"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7">
            <p className="font-display text-gold uppercase tracking-[0.14em] text-sm mb-1">
              Czystość · Pasja · Perfekcja
            </p>
            <p className="text-white/85 text-sm sm:text-base max-w-sm">
              Realne efekty na zdjęciach. Umów termin jednym telefonem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
