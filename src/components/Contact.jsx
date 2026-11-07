import React from 'react'
import { FB_MSG, FB_URL, PHONE, TEL } from '../data/site'

const Contact = () => {
  return (
    <section id="kontakt" className="py-16 sm:py-20 md:py-28 border-t border-white/10">
      <div className="wrap grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <p className="font-display text-gold tracking-[0.18em] uppercase text-sm mb-2">Kontakt</p>
          <h2 className="font-display text-[clamp(1.85rem,5vw,3.1rem)] font-bold uppercase tracking-wide mb-4">
            Umów termin
          </h2>
          <p className="text-muted max-w-md mb-8 text-sm sm:text-base">
            Łuków i okolice. Najszybciej zadzwoń — zdjęcie auta na Facebooku też wystarczy do wyceny.
          </p>
          <ul className="space-y-5 mb-8">
            <li className="border-b border-white/10 pb-4">
              <p className="text-xs uppercase tracking-[0.16em] text-muted mb-1">Telefon</p>
              <a href={TEL} className="font-display text-2xl sm:text-3xl text-gold hover:text-gold-light">
                {PHONE}
              </a>
            </li>
            <li className="border-b border-white/10 pb-4">
              <p className="text-xs uppercase tracking-[0.16em] text-muted mb-1">Facebook</p>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="font-display text-xl sm:text-2xl uppercase hover:text-gold">
                CzysteAuto
              </a>
            </li>
            <li className="border-b border-white/10 pb-4">
              <p className="text-xs uppercase tracking-[0.16em] text-muted mb-1">Miasto</p>
              <p className="font-display text-xl sm:text-2xl uppercase">Łuków</p>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <a href={TEL} className="btn-gold">
              Zadzwoń
            </a>
            <a href={FB_MSG} target="_blank" rel="noopener noreferrer" className="btn-line">
              Napisz na FB
            </a>
          </div>
        </div>
        <div className="border border-gold/25 min-h-[260px] sm:min-h-[360px]">
          <iframe
            title="Łuków"
            src="https://maps.google.com/maps?q=%C5%81uk%C3%B3w&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full min-h-[260px] sm:min-h-[360px] border-0 grayscale contrast-125"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
