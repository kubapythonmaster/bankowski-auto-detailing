import React from 'react'
import { FB_MSG, FB_URL, PHONE, TEL } from '../data/site'

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
        <div className="wrap py-7 sm:py-9 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] mb-1.5 text-night/60">Zadzwoń · Łuków</p>
            <a href={TEL} className="font-display text-[clamp(2.1rem,5.5vw,3.5rem)] font-bold leading-none tracking-wide hover:opacity-80">
              {PHONE}
            </a>
          </div>
          <div className="flex flex-col xs:flex-row sm:flex-row gap-2.5">
            <a href={TEL} className="inline-flex items-center justify-center min-h-12 px-7 bg-night text-gold font-semibold">
              Zadzwoń
            </a>
            <a
              href={FB_MSG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-12 px-7 border border-night/20 font-semibold hover:bg-night hover:text-gold"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#0a0a0e]">
        <div className="wrap py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <a href="#start" className="flex items-center gap-3">
            <img src="./logo-czysteauto.png" alt="CzysteAuto" className="h-14 w-14 object-cover" />
            <span>
              <span className="block font-display text-xl uppercase tracking-[0.14em]">CzysteAuto</span>
              <span className="block text-[11px] uppercase tracking-[0.16em] text-muted">Autodetailing · Łuków</span>
            </span>
          </a>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
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

          <a
            href={FB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-gold"
          >
            Facebook
          </a>
        </div>

        <div className="border-t border-white/[0.07]">
          <div className="wrap py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <p className="text-xs text-muted">© {new Date().getFullYear()} CzysteAuto. Wszelkie prawa zastrzeżone.</p>
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
