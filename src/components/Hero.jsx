import React from 'react'
import { FB_MSG, PHONE, TEL } from '../data/site'

const Hero = () => {
  return (
    <section id="start" className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden">
      <img
        src="./realizacje/lampy.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[center_40%] sm:object-center scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-night via-night/90 to-night/55" />

      <div className="relative wrap pt-28 pb-16 sm:py-32">
        <p className="font-display text-gold tracking-[0.18em] uppercase text-xs sm:text-sm mb-3 sm:mb-4">
          Łuków · autodetailing
        </p>
        <h1 className="font-display font-bold uppercase tracking-[0.04em] text-[clamp(2.15rem,9vw,5.1rem)] leading-[0.95] max-w-[11ch] mb-4 sm:mb-5">
          Czyste auto.
          <br />
          <span className="text-gold">Widoczny efekt.</span>
        </h1>
        <p className="max-w-md text-ink/80 text-[0.95rem] sm:text-base mb-7 sm:mb-8">
          Mycie, wnętrze, lakier i lampy. Na zdjęciach widać przed i po — nie opisujemy się jak wszyscy.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 max-w-sm sm:max-w-none pb-14">
          <a href={TEL} className="btn-gold">
            Zadzwoń: {PHONE}
          </a>
          <a href={FB_MSG} target="_blank" rel="noopener noreferrer" className="btn-line">
            Napisz na Facebooku
          </a>
        </div>
      </div>

      <a href="#onas" className="hero-scroll" aria-label="Przewiń niżej">
        <span />
      </a>
    </section>
  )
}

export default Hero
