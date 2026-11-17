import React, { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { PHONE, TEL, heroSlides, slogan } from '../data/site'

const Hero = () => {
  const [active, setActive] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(t)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % heroSlides.length)
    }, 5500)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="start" className="relative min-h-[100svh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        {heroSlides.map((s, i) => (
          <div
            key={s.src}
            className={`hero-slide ${i === active ? 'is-active' : ''}`}
            aria-hidden={i !== active}
          >
            <picture>
              {s.webp && <source srcSet={s.webp} type="image/webp" />}
              <img
                src={s.src}
                alt={i === active ? s.label : ''}
                className="hero-slide-img"
                style={{ objectPosition: s.pos }}
                decoding="async"
                fetchPriority={i === 0 ? 'high' : 'low'}
              />
            </picture>
          </div>
        ))}
        <div className="absolute inset-0 hero-veil" />
      </div>

      <div
        className={`relative wrap min-h-[100svh] flex flex-col justify-end pb-16 pt-28 sm:pb-20 sm:pt-32 lg:justify-center lg:pb-28 hero-copy ${
          ready ? 'is-in' : ''
        }`}
      >
        <p className="hero-line font-display text-gold tracking-[0.28em] uppercase text-[11px] sm:text-xs mb-6">
          {slogan}
        </p>

        <h1 className="font-display font-bold uppercase tracking-[0.02em] text-[clamp(2.85rem,11vw,6.25rem)] leading-[0.9] max-w-[12ch]">
          Bańkowski
          <span className="block text-gold mt-1 sm:mt-2">Auto Detailing</span>
        </h1>

        <div className="mt-6 mb-8 h-px w-16 bg-gold/80 hero-rule" />

        <p className="max-w-md text-white/88 text-[0.95rem] sm:text-lg leading-relaxed mb-9">
          Profesjonalny auto detailing: mycie detailingowe, wnętrze, lakier i felgi. Mobilnie u Ciebie
          albo stacjonarnie — efekt widać od razu.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <a href={TEL} className="btn-gold gap-2.5">
            <Phone size={18} strokeWidth={2.25} />
            Zadzwoń {PHONE}
          </a>
          <a href="#efekty" className="btn-line">
            Zobacz efekty
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 right-5 sm:bottom-8 sm:right-8 z-[2] flex gap-1.5" aria-hidden>
        {heroSlides.map((_, i) => (
          <span
            key={i}
            className={`h-0.5 transition-all duration-500 ${
              i === active ? 'w-8 bg-gold' : 'w-3 bg-white/35'
            }`}
          />
        ))}
      </div>

      <a href="#onas" className="hero-scroll" aria-label="Przewiń niżej">
        <span />
      </a>
    </section>
  )
}

export default Hero
