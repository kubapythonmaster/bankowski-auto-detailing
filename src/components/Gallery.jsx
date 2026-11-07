import React, { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { FB_PHOTOS, works } from '../data/site'

const Gallery = () => {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active === null) return

    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % works.length)
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + works.length) % works.length)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  const prev = (e) => {
    e.stopPropagation()
    setActive((i) => (i - 1 + works.length) % works.length)
  }

  const next = (e) => {
    e.stopPropagation()
    setActive((i) => (i + 1) % works.length)
  }

  return (
    <section id="efekty" className="py-16 sm:py-20 md:py-28 border-t border-white/10">
      <div className="wrap">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
          <div>
            <p className="font-display text-gold tracking-[0.18em] uppercase text-sm mb-2">Realizacje</p>
            <h2 className="font-display text-[clamp(1.85rem,5vw,3.1rem)] font-bold uppercase tracking-wide">
              Przed i po
            </h2>
          </div>
          <p className="text-muted md:max-w-xs text-sm sm:text-base">
            Kliknij zdjęcie, żeby powiększyć. Prawdziwe auta z Łukowa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {works.map((item, i) => (
            <figure key={item.title} className="border border-white/10 bg-black/40">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="block w-full text-left group"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </button>
              <figcaption className="p-4 sm:p-5">
                <h3 className="font-display text-lg sm:text-xl uppercase tracking-wide">{item.title}</h3>
                <p className="text-sm text-muted mt-1">{item.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted">
          Więcej na{' '}
          <a href={FB_PHOTOS} target="_blank" rel="noopener noreferrer" className="text-gold underline underline-offset-4">
            Facebooku CzysteAuto
          </a>
        </p>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[80] bg-black/90 flex items-center justify-center p-3 sm:p-8"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Powiększone zdjęcie"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center text-gold border border-gold/40 hover:bg-gold hover:text-night"
            aria-label="Zamknij"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={prev}
            className="absolute left-2 sm:left-6 w-11 h-11 flex items-center justify-center text-gold border border-gold/40 hover:bg-gold hover:text-night"
            aria-label="Poprzednie"
          >
            <ChevronLeft size={24} />
          </button>

          <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={works[active].src}
              alt={works[active].title}
              className="w-full max-h-[78vh] object-contain mx-auto"
            />
            <figcaption className="mt-4 text-center">
              <p className="font-display text-xl uppercase tracking-wide text-gold">{works[active].title}</p>
              <p className="text-sm text-muted mt-1">{works[active].text}</p>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={next}
            className="absolute right-2 sm:right-6 w-11 h-11 flex items-center justify-center text-gold border border-gold/40 hover:bg-gold hover:text-night"
            aria-label="Następne"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery
