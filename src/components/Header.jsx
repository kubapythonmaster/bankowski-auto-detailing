import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { FB_MSG, LOGO, PHONE, TEL, brand } from '../data/site'

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
    <header className="fixed inset-x-0 top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gold/30">
      <div className="wrap h-[72px] sm:h-[80px] flex items-center gap-4">
        <a href="#start" className="flex items-center gap-3 min-w-0" onClick={() => setOpen(false)}>
          <img
            src={LOGO}
            alt={`${brand} Auto Detailing`}
            className="h-11 w-11 sm:h-14 sm:w-14 object-cover rounded-full border border-gold/50 shrink-0"
          />
          <span className="leading-none min-w-0">
            <span className="block font-display text-lg sm:text-2xl font-bold tracking-[0.06em] uppercase truncate">
              Bańkowski
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.16em] text-muted">
              Auto Detailing · Mobilny i stacjonarny
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex ml-auto items-center gap-5 xl:gap-7">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="font-display text-[1.02rem] font-semibold uppercase tracking-[0.08em] text-ink/90 hover:text-gold"
            >
              {l.name}
            </a>
          ))}
          <a href={TEL} className="font-display text-lg font-bold text-gold tracking-wide whitespace-nowrap">
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
        <div className="lg:hidden border-t border-white/10 bg-black px-5 py-4 flex flex-col">
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
          <a href={TEL} onClick={() => setOpen(false)} className="mt-4 btn-gold">
            Zadzwoń {PHONE}
          </a>
          <a
            href={FB_MSG}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 mb-2 btn-line"
          >
            Facebook
          </a>
        </div>
      )}
    </header>
  )
}

export default Header
