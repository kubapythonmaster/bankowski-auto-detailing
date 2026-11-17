import React from 'react'
import { TEL, faqs } from '../data/site'

const FAQ = () => {
  return (
    <section id="faq" className="section-pad border-t border-white/10">
      <div className="wrap grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-14">
        <div>
          <p className="font-display text-gold tracking-[0.18em] uppercase text-sm mb-2">FAQ</p>
          <h2 className="font-display text-[clamp(1.9rem,5vw,3.2rem)] font-bold uppercase tracking-wide mb-4">
            Pytania o detailing
          </h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed max-w-sm">
            Cena, czas realizacji, detailing mobilny i umawianie terminu — krótkie odpowiedzi przed kontaktem.
          </p>
        </div>
        <div>
          {faqs.map((item) => (
            <details key={item.q} className="group border-t border-white/10">
              <summary className="cursor-pointer list-none font-display text-lg sm:text-xl uppercase tracking-wide py-5 flex justify-between gap-4 items-start hover:text-gold transition-colors [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span className="text-gold shrink-0 group-open:hidden" aria-hidden>
                  +
                </span>
                <span className="text-gold shrink-0 hidden group-open:inline" aria-hidden>
                  –
                </span>
              </summary>
              <p className="text-muted pb-5 max-w-xl text-sm leading-relaxed">
                {item.a.includes('722 271 194') ? (
                  <>
                    {item.a.split('722 271 194')[0]}
                    <a href={TEL} className="text-gold underline underline-offset-4">
                      722 271 194
                    </a>
                    {item.a.split('722 271 194')[1] || ''}
                  </>
                ) : (
                  item.a
                )}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
