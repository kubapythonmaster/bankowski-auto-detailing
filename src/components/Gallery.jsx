import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { FB_PHOTOS, works } from '../data/site'

const Gallery = () => {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % works.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % works.length)
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + works.length) % works.length)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox])

  const prev = () => setIndex((i) => (i - 1 + works.length) % works.length)
  const next = () => setIndex((i) => (i + 1) % works.length)

  return (
    <section id="efekty" className="section-pad border-t border-white/10 overflow-hidden">
      <div className="wrap">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
          <div>
            <p className="font-display text-gold tracking-[0.18em] uppercase text-sm mb-2">Realizacje</p>
            <h2 className="font-display text-[clamp(1.9rem,5vw,3.2rem)] font-bold uppercase tracking-wide">
              Efekty przed i po
            </h2>
          </div>
          <p className="text-muted md:max-w-sm text-sm sm:text-base leading-relaxed">
            Prawdziwe auta klientów po myciu detailingowym, czyszczeniu wnętrza i pielęgnacji lakieru.
          </p>
        </div>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={prev}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center border border-gold/40 bg-black/70 text-gold hover:bg-gold hover:text-night transition-colors"
          aria-label="Poprzednie zdjęcie"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center border border-gold/40 bg-black/70 text-gold hover:bg-gold hover:text-night transition-colors"
          aria-label="Następne zdjęcie"
        >
          <ChevronRight size={22} />
        </button>

        <div className="overflow-hidden px-2">
          <div
            className="flex gap-4 transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(calc(50% - ${index} * (min(820px, 82vw) + 1rem) - min(410px, 41vw)))`,
            }}
          >
            {works.map((item, i) => (
              <figure
                key={item.title}
                onClick={() => setLightbox(i)}
                className={`relative shrink-0 w-[min(820px,82vw)] aspect-[16/10] border overflow-hidden cursor-zoom-in transition-all duration-500 ${
                  i === index
                    ? 'opacity-100 scale-100 border-gold/50 shadow-[0_20px_50px_rgba(0,0,0,.45)]'
                    : 'opacity-40 scale-95 border-white/10'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading={i < 2 ? 'eager' : 'lazy'}
                />
                <figcaption
                  className={`absolute inset-x-0 bottom-0 px-4 py-4 sm:px-5 sm:py-5 bg-gradient-to-t from-black/95 via-black/55 to-transparent ${
                    i === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <p className="font-display text-lg sm:text-xl uppercase tracking-wide text-gold">{item.title}</p>
                  <p className="text-sm text-white/75 mt-1 max-w-xl">{item.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 mt-7">
          <div className="flex flex-wrap justify-center gap-1.5 max-w-xs">
            {works.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1.5 transition-all ${i === index ? 'w-7 bg-gold' : 'w-2.5 bg-white/30'}`}
                aria-label={`Zdjęcie ${i + 1}`}
              />
            ))}
          </div>
          <p className="font-display text-sm tracking-wider text-muted">
            {index + 1} / {works.length}
          </p>
          <p className="text-sm text-muted">
            Więcej realizacji na{' '}
            <a
              href={FB_PHOTOS}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline underline-offset-4 hover:text-gold-light"
            >
              Facebooku
            </a>
          </p>
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[80] bg-black/94 flex flex-col items-center justify-center p-3 sm:p-8"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={works[lightbox].title}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center text-gold border border-gold/40"
            aria-label="Zamknij"
          >
            <X size={22} />
          </button>
          <img
            src={works[lightbox].src}
            alt={works[lightbox].title}
            className="max-w-5xl w-full max-h-[75vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="mt-4 font-display text-gold uppercase tracking-wide text-center px-4">
            {works[lightbox].title}
          </p>
        </div>
      )}
    </section>
  )
}

export default Gallery
