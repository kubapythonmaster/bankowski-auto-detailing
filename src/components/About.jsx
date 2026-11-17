import React from 'react'
import { FB_MSG, PHONE, TEL, modes, slogan } from '../data/site'

const About = () => {
  return (
    <section id="onas" className="section-pad border-t border-white/10">
      <div className="wrap grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden border border-white/10">
            <img
              src="./realizacje/volvo-front.png"
              alt="Volvo XC90 przed i po auto detailingu Bańkowski"
              className="w-full aspect-[4/5] sm:aspect-[16/11] object-cover object-top"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            <p className="absolute bottom-3 left-3 right-3 font-display text-xs sm:text-sm uppercase tracking-[0.16em] text-gold">
              Przed / po · Volvo XC90
            </p>
          </div>
          <div className="mt-2 sm:mt-3 grid grid-cols-2 gap-2 sm:gap-3">
            <img
              src="./realizacje/lakier.jpg"
              alt="Połysk lakieru po korekcie i detailingu"
              className="w-full aspect-[16/10] object-cover border border-white/10"
              loading="lazy"
            />
            <img
              src="./realizacje/felga.jpg"
              alt="Felga samochodowa po czyszczeniu detailingowym"
              className="w-full aspect-[16/10] object-cover border border-white/10"
              loading="lazy"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="font-display text-gold tracking-[0.18em] uppercase text-sm mb-2">O nas</p>
          <h2 className="font-display text-[clamp(1.9rem,5vw,3.2rem)] font-bold uppercase tracking-wide leading-[1.05] mb-3">
            Auto detailing,
            <span className="block text-gold">który widać</span>
          </h2>
          <p className="text-gold/90 text-sm uppercase tracking-[0.16em] mb-5">{slogan}</p>
          <p className="text-muted mb-4 max-w-lg leading-relaxed">
            Bańkowski Auto Detailing to profesjonalna pielęgnacja samochodów — mycie detailingowe,
            czyszczenie wnętrza, felgi i lakier. Działamy mobilnie u klienta oraz stacjonarnie.
          </p>
          <p className="text-muted mb-8 max-w-lg leading-relaxed">
            Nie opieramy się na pustych hasłach. Pokazujemy realne efekty przed i po: Volvo, Focus,
            Yaris Cross i inne auta klientów.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-9">
            {modes.map((m) => (
              <div key={m.title} className="border-t border-gold/40 pt-4">
                <p className="font-display text-xl uppercase tracking-wide text-gold mb-2">{m.title}</p>
                <p className="text-sm text-muted leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={TEL} className="btn-gold">
              Zadzwoń {PHONE}
            </a>
            <a href={FB_MSG} target="_blank" rel="noopener noreferrer" className="btn-line">
              Napisz na FB
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
