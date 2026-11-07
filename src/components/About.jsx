import React from 'react'
import { FB_MSG, PHONE, TEL } from '../data/site'

const facts = [
  { n: 'Ręcznie', t: 'Bez automatycznej myjni. Felgi, progi i detale robimy sami.' },
  { n: 'Łuków', t: 'Lokalne studio. Auta z miasta i okolic — Siedlce, Radzyń, Międzyrzec.' },
  { n: 'Przed / po', t: 'Efekt widać na zdjęciach. Kanapa, bagażnik, lampy — bez retuszu.' },
]

const About = () => {
  return (
    <section id="onas" className="py-16 sm:py-20 md:py-28 border-t border-white/10">
      <div className="wrap grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative border border-gold/25 p-2 sm:p-3">
            <img
              src="./realizacje/kanapa.jpg"
              alt="Wnętrze przed i po"
              className="w-full aspect-[16/10] object-cover"
            />
            <img
              src="./logo-czysteauto.png"
              alt="CzysteAuto"
              className="absolute bottom-4 left-4 h-16 w-16 sm:h-20 sm:w-20 object-cover border border-gold/40"
            />
          </div>
          <img
            src="./realizacje/lampy.jpg"
            alt="Lampy przed i po"
            className="mt-2 sm:mt-3 w-full aspect-[16/7] object-cover border border-white/10"
          />
          <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted">CzysteAuto · autodetailing Łuków</p>
        </div>

        <div className="order-1 lg:order-2">
          <p className="font-display text-gold tracking-[0.18em] uppercase text-sm mb-2">O nas</p>
          <h2 className="font-display text-[clamp(1.85rem,5vw,3.1rem)] font-bold uppercase tracking-wide leading-[1.05] mb-5">
            Studio, nie myjnia
          </h2>
          <p className="text-muted mb-4 max-w-lg">
            CzysteAuto to detailing w Łukowie. Wnętrze, lakier, lampy i felgi — robota ręczna, chemia dobrana do auta, efekt widać od razu.
          </p>
          <p className="text-muted mb-8 max-w-lg">
            Nie sprzedajemy „pakietów premium”. Pokazujemy przed i po. Jak chcesz wycenę — zadzwoń albo napisz na Facebooku.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 mb-8">
            {facts.map((f) => (
              <div key={f.n} className="border-t border-gold/40 pt-3">
                <p className="font-display text-lg uppercase tracking-wide text-gold mb-1">{f.n}</p>
                <p className="text-sm text-muted">{f.t}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={TEL} className="btn-gold">
              Zadzwoń {PHONE}
            </a>
            <a href={FB_MSG} target="_blank" rel="noopener noreferrer" className="btn-line">
              Napisz na Facebooku
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
