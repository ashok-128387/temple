'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MalaVisarjanaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <img src="/temple/kk.jpg" alt="Ayyappa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <Link href="/mantra" className="inline-flex items-center gap-2 text-orange-300 hover:text-white transition-colors mb-8 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Mantras
          </Link>
          
          <div className="text-8xl mb-8 animate-pulse">🪔</div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white">
            Mala Visarjana Mantra
          </h1>
          <p className="text-xl text-orange-200 mb-12 font-light">
            Sacred ritual for the completion of Ayyappa Deeksha
          </p>
        </div>
      </section>

      {/* Mantra Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-12 border border-orange-200 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-orange-800 mb-4">ಮಾಲಾ ವಿಸರ್ಜನ ಮಂತ್ರ</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-amber-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-md">
                <div className="text-center space-y-6">
                  <div className="text-2xl leading-relaxed text-gray-800 font-medium">
                    ಮಾಲಾಧಾರಣಂ ಕೃತ್ವಾ ಗಿರೀಂದ್ರತನಯಂ ಹರಿಂ ।<br/>
                    ಪೂರ್ಣಭಕ್ತ್ಯಾ ಸಮಾರಾಧ್ಯ ವಿಸರ್ಜಯಾಮಿ ಸಾಂಪ್ರತಂ ॥
                  </div>
                  <div className="text-orange-700 italic text-lg">
                    Having worn the sacred mala and worshipped Lord Hari, the son of the mountain king,<br/>
                    with complete devotion, I now perform the visarjana (ritual conclusion).
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-amber-200 shadow-md">
                <div className="text-center space-y-6">
                  <div className="text-2xl leading-relaxed text-gray-800 font-medium">
                    ವ್ರತಸಂಪೂರ್ಣತಾಂ ದೇವ ಪ್ರಸಾದಾತ್ ತವ ಶಾಶ್ವತಂ ।<br/>
                    ಅನಯಾ ಪೂಜಯಾ ಸ್ವಾಮಿನ್ ಸಂತುಷ್ಟೋ ಭವ ಸರ್ವದಾ ॥
                  </div>
                  <div className="text-amber-700 italic text-lg">
                    O Lord, by your eternal grace, the vrata (sacred vow) is completed.<br/>
                    O Swami, may you always be pleased with this worship.
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-md">
                <div className="text-center space-y-6">
                  <div className="text-2xl leading-relaxed text-gray-800 font-medium">
                    ಅಪರಾಧ ಸಹಸ್ರಾಣಿ ಕ್ರಿಯಂತೇ ಅಹರ್ನಿಶಂ ಮಯಾ ।<br/>
                    ದಾಸೋಹಂ ಇತಿ ಮಾಂ ಮತ್ವಾ ಕ್ಷಮಸ್ವ ಪರಮೇಶ್ವರ ॥
                  </div>
                  <div className="text-orange-700 italic text-lg">
                    Thousands of mistakes are committed by me day and night.<br/>
                    Considering me as your devotee, please forgive me, O Supreme Lord.
                  </div>
                </div>
              </div>

              <div className="text-center py-8">
                <div className="text-4xl font-bold text-orange-600 mb-4">
                  ಸ್ವಾಮಿ ಶರಣಂ ಅಯ್ಯಪ್ಪಾ ॥
                </div>
                <div className="text-amber-600 text-xl italic">
                  Swami Sharanam Ayyappa
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Prayers Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-orange-800 mb-4">Additional Prayers</h2>
            <p className="text-orange-700 text-lg">Complete your Mala Visarjana with these sacred prayers</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-orange-700 mb-6 text-center">Gratitude Prayer</h3>
              <div className="space-y-4">
                <div className="text-xl text-gray-800 leading-relaxed">
                  ವ್ರತಧಾರಣಕಾಲೇ ತ್ವಂ ರಕ್ಷಿತೋಹಂ ದಯಾನಿಧೇ ।<br/>
                  ಇದಾನೀಂ ಮಮ ಜೀವನಂ ನಯ ಸ್ವಾಮಿ ಸದ್ಗತಿಂ ॥
                </div>
                <div className="text-orange-600 italic">
                  O compassionate Lord, you protected me during the vrata period.<br/>
                  Now guide my life towards the righteous path, O Swami.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-amber-200 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-amber-700 mb-6 text-center">Prayer for Forgiveness</h3>
              <div className="space-y-4">
                <div className="text-xl text-gray-800 leading-relaxed">
                  ಅಜ್ಞಾನಾತ್ ಸ್ಮೃತಿಭ್ರಂಶಾತ್ ಕ್ರಿಯಾಹೀನಾತ್ ಕೃತಂ ಮಯಾ ।<br/>
                  ಯದ್ಭಕ್ತಿಹೀನಂ ತತ್ ಸರ್ವಂ ಕ್ಷಮಸ್ವ ಹರಿಹರಾತ್ಮಜ ॥
                </div>
                <div className="text-amber-600 italic">
                  Whatever I did out of ignorance, forgetfulness, or lack of devotion,<br/>
                  please forgive all that, O son of Hari and Hara.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-orange-700 mb-6 text-center">Protection Prayer</h3>
              <div className="space-y-4">
                <div className="text-xl text-gray-800 leading-relaxed">
                  ಭೂತಪ್ರೇತಪಿಶಾಚಾದಿ ಭಯಂ ನಾಶಯ ಮೇ ಪ್ರಭೋ ।<br/>
                  ಆರೋಗ್ಯಂ ಧನಸಂಪತ್ತಿಂ ದೇಹಿ ಮೇ ಶಬರೀಶ್ವರ ॥
                </div>
                <div className="text-orange-600 italic">
                  Destroy all my fears, O Lord.<br/>
                  Grant me health and prosperity, O Lord of Sabari.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-amber-200 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-amber-700 mb-6 text-center">Surrender Mantra</h3>
              <div className="space-y-4">
                <div className="text-xl text-gray-800 leading-relaxed">
                  ತ್ವಮೇವ ಮಾತಾ ಚ ಪಿತಾ ತ್ವಮೇವ ।<br/>
                  ತ್ವಮೇವ ಬಂಧುಶ್ಚ ಸಖಾ ತ್ವಮೇವ ।<br/>
                  ತ್ವಮೇವ ವಿದ್ಯಾ ದ್ರವಿಣಂ ತ್ವಮೇವ ।<br/>
                  ತ್ವಮೇವ ಸರ್ವಂ ಮಮ ದೇವದೇವ ॥
                </div>
                <div className="text-amber-600 italic">
                  You are my mother, father, relative, and friend.<br/>
                  You are knowledge and wealth. You are everything, O Lord of Lords.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 border border-orange-300 shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-orange-800 mb-6 text-center">Mala Removal Closing Chant</h3>
            <div className="text-center space-y-6">
              <div className="text-2xl text-gray-800 leading-relaxed font-medium">
                ಮಾಲೆ ತ್ಯಜಾಮಿ ದೇವೇಶ ಭಕ್ತ್ಯಾ ಸಮರ್ಪಿತಾಂ ಮಯಾ ।<br/>
                ಅನುಗೃಹ್ಯ ಮಮ ಸ್ವಾಮಿನ್ ಪಾಹಿ ಮಾಂ ಶರಣಾಗತಂ ॥
              </div>
              <div className="text-orange-700 italic text-lg">
                I release this mala offered with devotion, O Lord of Lords.<br/>
                Bless me, O Swami, and protect me who has surrendered to you.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-orange-800 mb-4">Sacred Videos</h2>
            <p className="text-orange-700 text-lg">Visual guide for Mala Visarjana ritual</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl overflow-hidden border border-orange-200 shadow-lg">
              <video className="w-full h-80 object-cover" controls>
                <source src="/temple/v4.mp4" type="video/mp4" />
              </video>
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-700 mb-2">Mala Visarjana Ritual</h3>
                <p className="text-gray-600">Complete guide to performing the sacred ritual</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl overflow-hidden border border-orange-200 shadow-lg">
              <video className="w-full h-80 object-cover" controls>
                <source src="/temple/v5.mp4" type="video/mp4" />
              </video>
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-700 mb-2">Mantra Chanting</h3>
                <p className="text-gray-600">Proper pronunciation and chanting method</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ritual Instructions */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-orange-800 mb-4">Ritual Instructions</h2>
            <p className="text-orange-700 text-lg">Guidelines for performing Mala Visarjana</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-lg text-center">
              <div className="text-5xl mb-6">🕐</div>
              <h3 className="text-xl font-bold text-orange-700 mb-4">Timing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Perform after completing the 41-day deeksha period, preferably during auspicious hours.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-lg text-center">
              <div className="text-5xl mb-6">🙏</div>
              <h3 className="text-xl font-bold text-orange-700 mb-4">Preparation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Take bath, wear clean clothes, and sit facing east with the sacred mala in hand.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-lg text-center">
              <div className="text-5xl mb-6">💧</div>
              <h3 className="text-xl font-bold text-orange-700 mb-4">Visarjana</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
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
