import React from 'react'
import { FB_MSG, faqs } from '../data/site'

const FAQ = () => {
  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 border-t border-white/10">
      <div className="wrap grid lg:grid-cols-[0.85fr_1.15fr] gap-6 lg:gap-10">
        <div>
          <p className="font-display text-gold tracking-[0.18em] uppercase text-sm mb-2">FAQ</p>
          <h2 className="font-display text-[clamp(1.85rem,5vw,3.1rem)] font-bold uppercase tracking-wide">
            Najczęstsze pytania
          </h2>
        </div>
        <div>
          {faqs.map((item) => (
            <details key={item.q} className="group border-t border-white/10">
              <summary className="cursor-pointer list-none font-display text-lg sm:text-xl uppercase tracking-wide py-4 flex justify-between gap-4 items-start [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span className="text-gold shrink-0 group-open:hidden">+</span>
                <span className="text-gold shrink-0 hidden group-open:inline">–</span>
              </summary>
              <p className="text-muted pb-4 max-w-xl text-sm">
                {item.a.includes('Facebook') ? (
                  <>
                    {item.a.split(/Facebooku?/)[0]}
                    <a href={FB_MSG} target="_blank" rel="noopener noreferrer" className="text-gold underline underline-offset-4">
                      Facebooku
                    </a>
                    {item.a.split(/Facebooku?/)[1] || ''}
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
