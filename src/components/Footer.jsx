import React from 'react'
import { FB_MSG, FB_URL, LOGO, PHONE, TEL, slogan } from '../data/site'

const links = [
  { name: 'O nas', href: '#onas' },
  { name: 'Usługi', href: '#uslugi' },
  { name: 'Efekty', href: '#efekty' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Kontakt', href: '#kontakt' },
]

const Footer = () => {
  return (
    <footer className="pb-[5.5rem] md:pb-0">
      <div className="bg-gold text-night">
        <div className="wrap py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] mb-1.5 text-night/60">
              Zadzwoń i umów detailing
            </p>
            <a
              href={TEL}
              className="font-display text-[clamp(2rem,5vw,3.2rem)] font-bold leading-none tracking-wide"
            >
              {PHONE}
            </a>
            <p className="text-sm mt-2 text-night/70">{slogan}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5">
            <a
              href={TEL}
              className="inline-flex items-center justify-center min-h-12 px-7 bg-night text-gold font-display uppercase tracking-[0.08em] font-semibold"
            >
              Zadzwoń
            </a>
            <a
              href={FB_MSG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-12 px-7 border border-night/25 font-display uppercase tracking-[0.08em] font-semibold hover:bg-night hover:text-gold transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#08080b]">
        <div className="wrap py-9 flex flex-col lg:flex-row lg:items-start justify-between gap-10">
          <a href="#start" className="flex items-center gap-3 max-w-sm">
            <img
              src={LOGO}
              alt="Logo Bańkowski Auto Detailing"
              className="h-14 w-14 object-cover rounded-full border border-gold/40 shrink-0"
            />
            <span>
              <span className="block font-display text-xl uppercase tracking-[0.1em]">Bańkowski</span>
              <span className="block text-[11px] uppercase tracking-[0.14em] text-muted mt-0.5">
                Auto Detailing · Mobilny i stacjonarny
              </span>
              <span className="block text-xs text-muted mt-2 leading-relaxed">
                Mycie detailingowe, wnętrze, lakier i felgi.
              </span>
            </span>
          </a>

          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Nawigacja stopki">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="font-display text-sm uppercase tracking-[0.12em] text-muted hover:text-gold"
              >
                {l.name}
              </a>
            ))}
          </nav>

          <div className="text-sm text-muted space-y-2">
            <a href={TEL} className="block hover:text-gold font-display text-lg tracking-wide text-gold">
              {PHONE}
            </a>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="block hover:text-gold">
              Facebook
            </a>
          </div>
        </div>

        <div className="border-t border-white/[0.07]">
          <div className="wrap py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} Bańkowski Auto Detailing. Wszelkie prawa zastrzeżone.
            </p>
            <p className="text-xs text-muted">
              Strona stworzona przez <span className="text-gold font-medium">Noctura</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
