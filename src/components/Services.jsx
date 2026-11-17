import React from 'react'
import { PHONE, TEL, services, steps } from '../data/site'

const Services = () => {
  return (
    <section id="uslugi" className="section-pad border-t border-white/10 bg-[radial-gradient(700px_280px_at_0%_0%,rgba(212,160,23,0.08),transparent_55%)]">
      <div className="wrap">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="font-display text-gold tracking-[0.18em] uppercase text-sm mb-2">Usługi</p>
            <h2 className="font-display text-[clamp(1.9rem,5vw,3.2rem)] font-bold uppercase tracking-wide">
              Zakres detailingu
            </h2>
          </div>
          <p className="text-muted max-w-md text-sm sm:text-base leading-relaxed">
            Od ręcznego mycia po korektę lakieru i zabezpieczenie. Mobilnie u Ciebie albo stacjonarnie — pełny zakres.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {services.map((item, i) => (
            <article
              key={item.title}
              className="bg-night/95 p-6 sm:p-7 flex flex-col min-h-[220px] hover:bg-[#0c0c10] transition-colors"
            >
              <div className="flex items-center mb-5">
                <span className="font-display text-gold text-sm tracking-[0.2em]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="h-px flex-1 ml-4 bg-gold/25" />
              </div>
              <h3 className="font-display text-[1.3rem] sm:text-[1.4rem] font-semibold uppercase tracking-wide leading-tight mb-2">
                {item.title}
              </h3>
              <p className="text-gold/80 text-xs uppercase tracking-[0.14em] mb-3">{item.tag}</p>
              <p className="text-muted text-sm leading-relaxed mt-auto">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 md:mt-20">
          <p className="font-display text-gold tracking-[0.18em] uppercase text-sm mb-2">Jak to działa</p>
          <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold uppercase tracking-wide mb-8 md:mb-10">
            Trzy kroki do czystego auta
          </h3>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {steps.map((s) => (
              <div key={s.n} className="border-t border-gold/35 pt-5">
                <p className="font-display text-gold text-sm tracking-[0.22em] mb-3">{s.n}</p>
                <h4 className="font-display text-2xl uppercase tracking-wide mb-2">{s.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-5 px-6 py-7 sm:px-8 border border-gold/35 bg-gradient-to-r from-gold/[0.1] to-transparent">
          <div>
            <p className="font-display text-xl sm:text-2xl uppercase tracking-wide m-0">
              Nie wiesz, jaki zakres wybrać?
            </p>
            <p className="text-muted text-sm mt-1.5">
              Zadzwoń — doradzimy mycie, wnętrze albo pełny detailing pod Twoje auto.
            </p>
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
