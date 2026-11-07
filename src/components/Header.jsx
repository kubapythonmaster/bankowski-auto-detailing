import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { FB_MSG, PHONE, TEL } from '../data/site'

const links = [
  { name: 'O nas', href: '#onas' },
  { name: 'Usługi', href: '#uslugi' },
  { name: 'Efekty', href: '#efekty' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Kontakt', href: '#kontakt' },
]

const Header = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-night border-b border-gold/35">
      <div className="wrap h-[68px] sm:h-[76px] flex items-center gap-4">
        <a href="#start" className="flex items-center gap-2.5 sm:gap-3 min-w-0" onClick={() => setOpen(false)}>
          <img src="./logo-czysteauto.png" alt="CzysteAuto" className="h-10 w-10 sm:h-12 sm:w-12 object-cover shrink-0" />
          <span className="leading-none min-w-0">
            <span className="block font-display text-lg sm:text-2xl font-bold tracking-[0.08em] uppercase truncate">
              CzysteAuto
            </span>
            <span className="hidden sm:block text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-muted">
              Autodetailing · Łuków
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex ml-auto items-center gap-6 xl:gap-8">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="font-display text-[1.02rem] font-semibold uppercase tracking-[0.08em] text-ink/90 hover:text-gold"
            >
              {l.name}
            </a>
          ))}
          <a href={TEL} className="font-display text-lg font-bold text-gold tracking-wide whitespace-nowrap hover:text-gold-light">
            {PHONE}
          </a>
          <a href={TEL} className="btn-gold !min-h-10 text-sm">
            Zadzwoń
          </a>
        </nav>

        <button
          type="button"
          className="lg:hidden ml-auto w-11 h-11 border border-white/15 flex items-center justify-center"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-night px-5 py-4 flex flex-col">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display uppercase tracking-wider py-3.5 border-b border-white/10 text-lg"
            >
              {l.name}
            </a>
          ))}
          <a
            href={TEL}
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center min-h-12 bg-gold text-night font-semibold"
          >
            Zadzwoń {PHONE}
          </a>
          <a
            href={FB_MSG}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 mb-2 inline-flex items-center justify-center min-h-12 border border-gold/40 text-gold font-semibold"
          >
            Napisz na Facebooku
          </a>
        </div>
      )}
    </header>
  )
}

export default Header
