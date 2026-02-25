'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Heart, Users, MapPin, Calendar } from 'lucide-react'

export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(255, 252, 232)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-light tracking-widest text-sm uppercase mb-4" style={{ color: '#d4af37' }}>Community Service</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">ONGOING PROJECTS</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Serving humanity through compassion and dedication</p>
        </div>
      </section>

      {/* Bhavabhojan Project */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#281708' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#d4af37' }}>Bhavabhojan Project</h2>
            <p className="text-2xl text-white mb-8">A sacred initiative of Vishwa Hinduu Ayyappa Seva Trust</p>
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="font-medium">Status: Ongoing</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span>Bangalore</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-primary" />
                <span>Started: 2024</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <img src="/temple/621657513_18021223118801817_222731198205014996_n.jpg" alt="Bhavabhojan" className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#d4af37' }}>ಭವಭೋಜನ್ – ಸೇವೆಯ ಮೂಲಕ ಭಕ್ತಿ</h3>
              {[
                'ಭವಭೋಜನ್ ನಮ್ಮ ವಿಶ್ವ ಹಿಂದೂ ಅಯ್ಯಪ್ಪ ಸೇವಾ ಟ್ರಸ್ಟ್ನ ಪ್ರಮುಖ ಸೇವಾ ಯೋಜನೆಯಾಗಿದೆ.',
                'ಈ ಯೋಜನೆಯ ಮುಖ್ಯ ಉದ್ದೇಶ, ಅನ್ನದ ಮೂಲಕ ಸೇವಾಭಾವವನ್ನು ಸಮಾಜಕ್ಕೆ ತಲುಪಿಸುವುದಾಗಿದೆ.',
                'ಅಯ್ಯಪ್ಪ ಸ್ವಾಮಿಯ ಕೃಪೆಯಿಂದ, ಅನ್ನಸಂತರ್ಪಣೆಯ ಮೂಲಕ ಅಗತ್ಯವಿರುವವರಿಗೆ ಆಹಾರವನ್ನು ಒದಗಿಸಲಾಗುತ್ತಿದೆ.',
                'ಭಕ್ತರ ಸಹಕಾರದಿಂದ, ಶುದ್ಧತೆ, ಶಿಸ್ತು ಮತ್ತು ಭಕ್ತಿಭಾವದೊಂದಿಗೆ ಭೋಜನ ವ್ಯವಸ್ಥೆ ನಡೆಸಲಾಗುತ್ತದೆ.',
                'ಈ ಸೇವೆಯಲ್ಲಿ ಯಾವುದೇ ಭೇದಭಾವವಿಲ್ಲದೆ ಎಲ್ಲರಿಗೂ ಅನ್ನ ನೀಡಲಾಗುತ್ತದೆ.'
              ].map((text, idx) => (
                <p key={idx} className="text-lg text-white leading-relaxed animate-slideUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                'ಭವಭೋಜನ್ ಕೇವಲ ಊಟವಲ್ಲ, ಅದು ಮಾನವೀಯತೆಯ ಸಂದೇಶವಾಗಿದೆ.',
                'ಈ ಯೋಜನೆಯ ಮೂಲಕ ಸಹಭಾವನೆ, ಸಹಾನುಭೂತಿ ಮತ್ತು ಸಮಾಜಸೇವೆ ವೃದ್ಧಿಯಾಗುತ್ತಿದೆ.',
                'ಅನ್ನದಾನವೇ ಮಹಾದಾನ ಎಂಬ ಸಂದೇಶವನ್ನು ಕಾರ್ಯರೂಪಕ್ಕೆ ತರುವ ಪ್ರಯತ್ನವೇ ಭವಭೋಜನಂ.',
                'ಈ ಸೇವೆಯಿಂದ ಅನೇಕ ಜನರಿಗೆ ತೃಪ್ತಿ, ನೆಮ್ಮದಿ ಮತ್ತು ಆಶಾಕಿರಣ ದೊರಕಿದೆ.',
                'ಭವಿಷ್ಯದಲ್ಲೂ ಈ ಸೇವೆಯನ್ನು ಇನ್ನಷ್ಟು ವ್ಯಾಪಕವಾಗಿ ನಡೆಸುವ ಸಂಕಲ್ಪ ನಮ್ಮದು.'
              ].map((text, idx) => (
                <p key={idx} className="text-lg text-white leading-relaxed animate-slideUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                  {text}
                </p>
              ))}
            </div>
            <div>
              <img src="/temple/Ayyappa-Mala-Dharana-at-Sai-Datta-Peetham.jpg" alt="Service" className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(255, 252, 232)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '10,000+', label: 'Meals Served', icon: '🍽️' },
              { number: '500+', label: 'Families Helped', icon: '👨‍👩‍👧‍👦' },
              { number: '50+', label: 'Volunteers', icon: '🙏' },
              { number: '365', label: 'Days Active', icon: '📅' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scaleIn" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-5xl mb-4">{stat.icon}</div>
                <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pranadhara Project */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#281708' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#d4af37' }}>Pranadhara Project</h2>
            <p className="text-2xl text-white mb-8">A Spiritual way of serving people</p>
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="font-medium">Status: Ongoing</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span>Bangalore</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-primary" />
                <span>Started: 2024</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/temple/565090714_18080753051283913_5599229946113706496_n.jpg" alt="Pranadhara" className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="space-y-6">
              {[
                'The Pranadhara project initiated by Vishwa Hinduu Ayyappa Seva Trust is highly commendable.',
                'Through the project, the trust provides food assistance to the poor and underprivileged, particularly those who are in need.',
                'Under this Pranadhara Project, the trust will contribute food kits to eligible individuals, helping them to meet their basic needs.',
                'This project aims to eliminate the scarcity of food in society and help by providing food security to the needy.',
                'Every food kit distributed brings hope and sustenance to families facing hardship.',
                'The project operates with complete transparency and devotion to serve humanity.'
              ].map((text, idx) => (
                <p key={idx} className="text-lg text-white leading-relaxed animate-slideUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Contribute */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(255, 252, 232)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">How You Can Help</h2>
            <p className="text-xl text-muted-foreground">Join us in making a difference</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Donate', desc: 'Support our projects with financial contributions', icon: '💰' },
              { title: 'Volunteer', desc: 'Join our team and serve the community', icon: '🤝' },
              { title: 'Spread Awareness', desc: 'Share our mission with others', icon: '📢' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.desc}</p>
                <button className="px-6 py-3 bg-primary text-white rounded-full hover:shadow-lg transition-all">
                  Get Involved
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-out; }
        .animate-slideUp { animation: slideUp 0.8s ease-out forwards; opacity: 0; }
        .animate-scaleIn { animation: scaleIn 0.6s ease-out forwards; opacity: 0; }
      `}</style>
    </div>
  )
}
