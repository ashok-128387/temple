'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MantraPage() {
  return (
    <div className="min-h-screen" style={{ background: '#0A0603', color: '#FDF5E6' }}>
      <Header />

      {/* AYYAPPA MANTRA HEADER */}
      <div style={{background: 'linear-gradient(135deg, #E8720C, #D4A017)', padding: '8px 0', textAlign: 'center', marginTop: '80px'}}>
        <p style={{color: '#FDF5E6', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '0.1em', margin: '0'}}>AYYAPPA MANTRAS</p>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/temple/621657513_18021223118801817_222731198205014996_n.jpg" 
            alt="Ayyappa Temple" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center py-20">
          <div className="space-y-8">
            <div className="text-6xl mb-6 animate-pulse">ॐ</div>
            <p className="text-orange-400 font-light tracking-widest text-sm uppercase mb-6">Sacred Mantras</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 text-white">
              Ayyappa Mantras
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed mb-12">
              Divine chants and sacred invocations for spiritual awakening and divine blessings
            </p>
            
            <div className="flex justify-center gap-12 pt-12 border-t border-white/30">
              <div className="text-center">
                <p className="text-4xl font-bold text-orange-400 mb-2">108</p>
                <p className="text-sm font-light text-white">Sacred Chants</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-orange-400 mb-2">18</p>
                <p className="text-sm font-light text-white">Steps to Divinity</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-orange-400 mb-2">41</p>
                <p className="text-sm font-light text-white">Days of Deeksha</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mantra Sections */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #1A0D00, #2C1A0E)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-orange-400 mb-4">Sacred Mantras</h2>
            <p className="text-white/70 text-lg">Powerful invocations for spiritual transformation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Main Mantra */}
            <div className="bg-gradient-to-br from-orange-900/30 to-yellow-900/20 border border-orange-500/30 p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-orange-400 mb-6 text-center">Swamiye Sharanam Ayyappa</h3>
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-white mb-4">ಸ್ವಾಮಿಯೇ ಶರಣಂ ಅಯ್ಯಪ್ಪ</div>
                <div className="text-lg text-orange-300 italic">Swamiye Sharanam Ayyappa</div>
                <p className="text-white/70 text-sm mt-4">The most sacred mantra of Lord Ayyappa, chanted continuously during the 41-day deeksha period.</p>
              </div>
            </div>

            {/* Mala Mantra */}
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/20 border border-yellow-500/30 p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-yellow-400 mb-6 text-center">Mala Dharana Mantra</h3>
              <div className="text-center space-y-3">
                <div className="text-lg text-white leading-relaxed">
                  ಜ್ಞಾನಮುದ್ರಾಂ ಶಾಸ್ತ್ರಮುದ್ರಾಂ ಗುರುಮುದ್ರಾಂ ನಮಾಮ್ಯಹಮ್<br/>
                  ವನಮುದ್ರಾಂ ಶುದ್ಧಮುದ್ರಾಂ ರುದ್ರಮುದ್ರಾಂ ನಮಾಮ್ಯಹಮ್
                </div>
                <p className="text-white/70 text-sm mt-4">Chanted while wearing the sacred mala, invoking the nine divine mudras of Lord Ayyappa.</p>
              </div>
            </div>

            {/* Harivarasanam */}
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/20 border border-red-500/30 p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-red-400 mb-6 text-center">Harivarasanam</h3>
              <div className="text-center space-y-3">
                <div className="text-lg text-white leading-relaxed">
                  ಹರಿವರಾಸನಂ ವಿಶ್ವಮೋಹನಂ<br/>
                  ಹರಿದಾಧೀಶ್ವರಂ ಆರಾಧ್ಯಪಾದುಕಂ
                </div>
                <p className="text-white/70 text-sm mt-4">The evening prayer sung at Sabarimala temple, invoking Lord Ayyappa's divine presence.</p>
              </div>
            </div>

            {/* Sarana Mantram */}
            <div className="bg-gradient-to-br from-green-900/30 to-yellow-900/20 border border-green-500/30 p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold text-green-400 mb-6 text-center">Sarana Mantram</h3>
              <div className="text-center space-y-3">
                <div className="text-lg text-white leading-relaxed">
                  ಶರಣಂ ಅಯ್ಯಪ್ಪ ಸ್ವಾಮಿ ಶರಣಂ ಅಯ್ಯಪ್ಪ<br/>
                  ಶರಣಂ ಅಯ್ಯಪ್ಪ ಸ್ವಾಮಿ ಶರಣಂ ಅಯ್ಯಪ್ಪ
                </div>
                <p className="text-white/70 text-sm mt-4">The surrender mantra, expressing complete devotion and seeking refuge in Lord Ayyappa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-orange-400 mb-4">Sacred Chants</h2>
            <p className="text-white/70 text-lg">Listen to divine mantras and devotional songs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.youtube.com/embed/EfeRyc4xBQ0?autoplay=1&mute=1&loop=1&playlist=EfeRyc4xBQ0" 
                className="w-full h-64" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              ></iframe>
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-400 mb-2">Harivarasanam</h3>
                <p className="text-white/70">Sacred evening prayer at Sabarimala</p>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.youtube.com/embed/mP1OUFS7E1I?autoplay=1&mute=1&loop=1&playlist=mP1OUFS7E1I" 
                className="w-full h-64" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              ></iframe>
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-400 mb-2">Swami Saranam</h3>
                <p className="text-white/70">Divine chants from Sannidhanam</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}