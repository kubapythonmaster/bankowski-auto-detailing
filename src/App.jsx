import React from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import { PHONE, TEL } from './data/site'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HomePage />
      <Footer />
      <a
        href={TEL}
        className="md:hidden fixed left-3 right-3 z-50 flex items-center justify-center h-[52px] bg-gold text-night font-display text-lg font-bold uppercase tracking-wide"
        style={{ bottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        Zadzwoń {PHONE}
      </a>
    </div>
  )
}

export default App
