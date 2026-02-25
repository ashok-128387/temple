'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Heart, Shield, Clock, Users, CheckCircle, FileText, CreditCard } from 'lucide-react'

export default function HealthCarePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const canvas = document.getElementById('particles') as HTMLCanvasElement
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let W: number, H: number
    const particles: any[] = []

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      x: number = 0
      y: number = 0
      vx: number = 0
      vy: number = 0
      alpha: number = 0
      maxAlpha: number = 0
      size: number = 0
      life: number = 0
      maxLife: number = 0

      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * W
        this.y = H + 20
        this.vx = (Math.random() - 0.5) * 0.6
        this.vy = -(Math.random() * 1.2 + 0.4)
        this.alpha = 0
        this.maxAlpha = 1
        this.size = Math.random() * 5 + 2.5
        this.life = 0
        this.maxLife = Math.random() * 350 + 250
      }
      update() {
        this.life++
        this.x += this.vx
        this.y += this.vy
        const t = this.life / this.maxLife
        this.alpha = t < 0.3 ? (t / 0.3) * this.maxAlpha : this.maxAlpha * (1 - (t - 0.3) / 0.7)
        if (this.life >= this.maxLife) this.reset()
      }
      draw() {
        ctx.globalAlpha = this.alpha
        const hue = 30 + Math.random() * 10
        ctx.fillStyle = `hsl(${hue}, 100%, 75%)`
        ctx.shadowBlur = 50
        ctx.shadowColor = `hsl(${hue}, 100%, 65%)`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    for (let i = 0; i < 100; i++) {
      const p = new Particle()
      p.life = Math.random() * p.maxLife
      particles.push(p)
    }

    function animate() {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => { p.update(); p.draw() })
      ctx.globalAlpha = 1
      requestAnimationFrame(animate)
    }
    animate()

    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <div className="min-h-screen bg-background relative">
      <canvas id="particles" className="fixed inset-0 pointer-events-none z-0"></canvas>
      
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/temple/565090714_18080753051283913_5599229946113706496_n.jpg" 
            alt="Ayyappa Temple" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          <div className="inline-flex items-center gap-2 bg-primary/90 px-4 py-2 rounded-full mb-6">
            <Heart className="text-white" size={20} />
            <span className="text-white font-medium text-sm">Healthcare Initiative</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Dhanvantari HealthCare Card</h1>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">Affordable healthcare for all devotees and community members</p>
          <button onClick={() => setShowForm(true)} className="px-8 py-4 bg-primary text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105">
            Apply for Card
          </button>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#281708' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#d4af37' }}>Why Choose Dhanvantari Card?</h2>
            <p className="text-lg text-white">Comprehensive healthcare benefits for you and your family</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🕉️', title: 'Wide Coverage', desc: 'Access to multiple listed hospitals across the region' },
              { icon: '🪔', title: 'Valid 1 Year', desc: 'Full year coverage with easy renewal process' },
              { icon: '🙏', title: 'Family Benefits', desc: 'Extend healthcare benefits to your entire family' },
              { icon: '❤️', title: 'Affordable Care', desc: 'Subsidized healthcare costs for all members' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary/20">
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-black">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-foreground">Card Benefits & Features</h2>
              <div className="space-y-6">
                {[
                  'Access to quality healthcare at listed hospitals',
                  'Valid for one full year from date of issue',
                  'Easy renewal process through our website',
                  'Subsidized treatment costs for cardholders',
                  'Must carry physical card to avail benefits',
                  'Coverage may vary based on treatment type',
                  'Priority assistance at partner hospitals',
                  'Regular health check-up benefits'
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border-2 border-primary/20">
              <div className="bg-white p-8 rounded-xl shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <CreditCard className="text-primary" size={40} />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Sample Card</h3>
                    <p className="text-sm text-muted-foreground">Dhanvantari HealthCare</p>
                  </div>
                </div>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p><strong>Card Holder:</strong> [Your Name]</p>
                  <p><strong>Card Number:</strong> DHVC-XXXX-XXXX</p>
                  <p><strong>Valid Until:</strong> [Date]</p>
                  <p><strong>Member Since:</strong> [Date]</p>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground italic">This is a sample card design. Actual card may vary.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#281708' }}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow-xl border-l-4 border-primary">
            <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
              <FileText className="text-primary" size={32} />
              Important Information
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold">1.</span>
                <span>This Health Card will help you in availing benefits in listed hospitals</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold">2.</span>
                <span>This Card is valid for one year from the date of issue</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold">3.</span>
                <span>To renew or apply for a new health card visit <a href="#" onClick={(e) => { e.preventDefault(); setShowForm(true); }} className="text-primary underline">www.vishwahinduuayyappasevatrust.in</a></span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold">4.</span>
                <span>The card may not cover the full cost of treatment. Additional charges may apply</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold">5.</span>
                <span>Make sure you carry this Card physically to avail benefits at hospitals</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Gallery & Resources</h2>
            <p className="text-lg text-muted-foreground">Learn more about our healthcare initiative</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src="/temple/587293628_18086143820283913_294918588811629587_n.jpg" 
                alt="Healthcare Card" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src="/temple/9ed58f7a343bfed80dfbc71c24a19b1c.jpg" 
                alt="Temple" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Get Your Card?</h2>
          <p className="text-xl text-muted-foreground mb-8">Join thousands of members enjoying affordable healthcare benefits</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setShowForm(true)} className="px-8 py-4 bg-primary text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105">
              Apply Now
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary/5 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Apply for Healthcare Card</h2>
              <button onClick={() => setShowForm(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <form className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <input type="text" placeholder="Enter full name" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Date of Birth *</label>
                  <input type="date" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <input type="email" placeholder="Enter email" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                  <input type="tel" placeholder="Enter phone number" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Address *</label>
                <textarea rows={3} placeholder="Enter complete address" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none" required></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">City *</label>
                  <input type="text" placeholder="Enter city" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Pincode *</label>
                  <input type="text" placeholder="Enter pincode" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Aadhar Number *</label>
                <input type="text" placeholder="Enter Aadhar number" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" required />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="terms" className="mt-1" required />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree to the terms and conditions and understand that the card is valid for one year and must be carried physically to avail benefits.
                </label>
              </div>

              <div className="flex gap-4">
                <button type="submit" className="flex-1 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:shadow-lg transition-all">
                  Submit Application
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-gray-50 transition-all">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
