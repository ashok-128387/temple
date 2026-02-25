'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Heart, Send } from 'lucide-react'

export default function PujaSponsorPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#281708' }}>
        <div className="absolute inset-0 opacity-10">
          <img src="/temple/565090714_18080753051283913_5599229946113706496_n.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
            <Heart className="text-primary" size={20} />
            <span className="text-primary font-medium text-sm">Sacred Sponsorship</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#d4af37' }}>Puja Sponsors</h1>
          <p className="text-xl mb-8" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Support sacred rituals and receive divine blessings</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Image */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="/temple/622618768_18031737740778300_265630755777714974_n.jpg" alt="Puja" className="w-full h-full object-cover" />
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl border-2 border-primary/20">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37' }}>Why Sponsor a Puja?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Receive divine blessings for you and your family</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Support sacred temple rituals and ceremonies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Contribute to spiritual community welfare</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Earn spiritual merit through sacred giving</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white p-10 rounded-2xl shadow-2xl border border-border">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Sponsorship Form</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="Enter Name" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" 
                    required 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Address *</label>
                  <input 
                    type="text" 
                    placeholder="Enter Address" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" 
                    required 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">City *</label>
                  <input 
                    type="text" 
                    placeholder="Enter City" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" 
                    required 
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Mobile No *</label>
                    <input 
                      type="tel" 
                      placeholder="Mobile No" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">E-Mail ID *</label>
                    <input 
                      type="email" 
                      placeholder="E-Mail Address" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" 
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Puja Sponsor Amount *</label>
                  <input 
                    type="number" 
                    placeholder="Enter Amount" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" 
                    required 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Message (Requirements)</label>
                  <textarea 
                    rows={5} 
                    placeholder="If, Any Message...." 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full px-8 py-4 bg-primary text-white font-medium tracking-wider hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 rounded-lg flex items-center justify-center gap-3"
                >
                  <Send size={20} />
                  Submit Sponsorship
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(255, 252, 232)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Sponsorship Benefits</h2>
            <p className="text-lg text-muted-foreground">Your contribution supports sacred rituals and temple activities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🙏', title: 'Divine Blessings', desc: 'Receive special prayers and blessings from the priests' },
              { icon: '🪔', title: 'Sacred Rituals', desc: 'Your name will be included in the puja ceremonies' },
              { icon: '❤️', title: 'Community Support', desc: 'Help maintain temple services and community programs' }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="text-6xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
