import React from 'react'
import { PHONE, TEL, services, steps } from '../data/site'

const Services = () => {
  return (
    <section id="uslugi" className="py-16 sm:py-20 md:py-28 border-t border-white/10">
      <div className="wrap">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="font-display text-gold tracking-[0.18em] uppercase text-sm mb-2">Zakres</p>
            <h2 className="font-display text-[clamp(1.85rem,5vw,3.1rem)] font-bold uppercase tracking-wide">
              Co robimy
            </h2>
          </div>
          <p className="text-muted max-w-sm text-sm sm:text-base">
            Od mycia ręcznego po korektę lakieru i lampy. Zakres dobieramy do auta, nie do cennika z internetu.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {services.map((item, i) => (
            <article
              key={item.title}
              className="bg-night p-6 sm:p-7 flex flex-col min-h-[220px] sm:min-h-[250px] hover:bg-[#0c0c10] transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-gold text-sm tracking-[0.2em]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="h-px flex-1 mx-4 bg-gold/25" />
              </div>
              <h3 className="font-display text-[1.35rem] sm:text-[1.5rem] font-semibold uppercase tracking-wide leading-tight mb-2">
                {item.title}
              </h3>
              <p className="text-gold/80 text-xs uppercase tracking-[0.14em] mb-3">{item.tag}</p>
              <p className="text-muted text-sm leading-relaxed mt-auto">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-0 border border-white/10">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`p-6 sm:p-8 ${i < steps.length - 1 ? 'md:border-r border-b md:border-b-0 border-white/10' : ''}`}
            >
              <p className="font-display text-gold text-sm tracking-[0.2em] mb-3">Krok {s.n}</p>
              <h3 className="font-display text-2xl uppercase tracking-wide mb-2">{s.title}</h3>
              <p className="text-muted text-sm">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5 px-6 py-6 sm:px-8 border border-gold/35 bg-gold/[0.06]">
          <div>
            <p className="font-display text-xl sm:text-2xl uppercase tracking-wide m-0">
              Nie wiesz, od czego zacząć?
            </p>
            <p className="text-muted text-sm mt-1">Zadzwoń — powiemy, co ma sens przy Twoim aucie.</p>
          </div>
          <a href={TEL} className="btn-gold shrink-0 w-full sm:w-auto">
            Zadzwoń {PHONE}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
