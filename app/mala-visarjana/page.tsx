'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'

export default function MalaVisarjanaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <a href="/mantra" className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors mb-8 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Mantras
          </a>
          
          <div className="text-8xl mb-8 animate-pulse">🪔</div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Mala Visarjana Mantra
          </h1>
          <p className="text-xl text-purple-200 mb-12 font-light">
            Sacred ritual for the completion of Ayyappa Deeksha
          </p>
        </div>
      </section>

      {/* Mantra Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-purple-200 mb-4">ಮಾಲಾ ವಿಸರ್ಜನ ಮಂತ್ರ</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded-2xl p-6 md:p-8 border border-purple-400/20">
                <div className="text-center space-y-6">
                  <div className="text-xl md:text-2xl leading-relaxed text-white font-medium">
                    ಮಾಲಾಧಾರಣಂ ಕೃತ್ವಾ ಗಿರೀಂದ್ರತನಯಂ ಹರಿಂ ।<br/>
                    ಪೂರ್ಣಭಕ್ತ್ಯಾ ಸಮಾರಾಧ್ಯ ವಿಸರ್ಜಯಾಮಿ ಸಾಂಪ್ರತಂ ॥
                  </div>
                  <div className="text-purple-200 italic text-base md:text-lg">
                    Having worn the sacred mala and worshipped Lord Hari, the son of the mountain king,<br/>
                    with complete devotion, I now perform the visarjana (ritual conclusion).
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-800/30 to-indigo-800/30 rounded-2xl p-6 md:p-8 border border-blue-400/20">
                <div className="text-center space-y-6">
                  <div className="text-xl md:text-2xl leading-relaxed text-white font-medium">
                    ವ್ರತಸಂಪೂರ್ಣತಾಂ ದೇವ ಪ್ರಸಾದಾತ್ ತವ ಶಾಶ್ವತಂ ।<br/>
                    ಅನಯಾ ಪೂಜಯಾ ಸ್ವಾಮಿನ್ ಸಂತುಷ್ಟೋ ಭವ ಸರ್ವದಾ ॥
                  </div>
                  <div className="text-blue-200 italic text-base md:text-lg">
                    O Lord, by your eternal grace, the vrata (sacred vow) is completed.<br/>
                    O Swami, may you always be pleased with this worship.
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-800/30 to-purple-800/30 rounded-2xl p-6 md:p-8 border border-indigo-400/20">
                <div className="text-center space-y-6">
                  <div className="text-xl md:text-2xl leading-relaxed text-white font-medium">
                    ಅಪರಾಧ ಸಹಸ್ರಾಣಿ ಕ್ರಿಯಂತೇ ಅಹರ್ನಿಶಂ ಮಯಾ ।<br/>
                    ದಾಸೋಹಂ ಇತಿ ಮಾಂ ಮತ್ವಾ ಕ್ಷಮಸ್ವ ಪರಮೇಶ್ವರ ॥
                  </div>
                  <div className="text-indigo-200 italic text-base md:text-lg">
                    Thousands of mistakes are committed by me day and night.<br/>
                    Considering me as your devotee, please forgive me, O Supreme Lord.
                  </div>
                </div>
              </div>

              <div className="text-center py-8">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-4">
                  ಸ್ವಾಮಿ ಶರಣಂ ಅಯ್ಯಪ್ಪಾ ॥
                </div>
                <div className="text-yellow-200 text-lg md:text-xl italic">
                  Swami Sharanam Ayyappa
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ritual Instructions */}
      <section className="py-20 bg-gradient-to-b from-purple-900/30 to-indigo-900/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-purple-200 mb-4">Ritual Instructions</h2>
            <p className="text-purple-300 text-base md:text-lg">Guidelines for performing Mala Visarjana</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <div className="text-5xl mb-6">🕐</div>
              <h3 className="text-xl font-bold text-purple-200 mb-4">Timing</h3>
              <p className="text-purple-300 text-sm leading-relaxed">
                Perform after completing the 41-day deeksha period, preferably during auspicious hours.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <div className="text-5xl mb-6">🙏</div>
              <h3 className="text-xl font-bold text-purple-200 mb-4">Preparation</h3>
              <p className="text-purple-300 text-sm leading-relaxed">
                Take bath, wear clean clothes, and sit facing east with the sacred mala in hand.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <div className="text-5xl mb-6">💧</div>
              <h3 className="text-xl font-bold text-purple-200 mb-4">Visarjana</h3>
              <p className="text-purple-300 text-sm leading-relaxed">
                After chanting, immerse the mala in flowing water or keep it in the puja room with respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
