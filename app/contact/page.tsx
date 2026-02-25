'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(255, 252, 232)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-light tracking-widest text-sm uppercase mb-4" style={{ color: '#d4af37' }}>Connect With Us</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Get In Touch with Us!</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">We would love to hear from you. Reach out for inquiries, blessings, or spiritual guidance.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-border">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" required />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                  <textarea rows={6} placeholder="Message" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none" required></textarea>
                </div>

                <button type="submit" className="w-full px-8 py-4 bg-primary text-white font-medium tracking-wider hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 rounded-lg">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-border hover:border-primary transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Phone Number</h3>
                      <p className="text-muted-foreground">+91 79960 51545</p>
                      <p className="text-muted-foreground">+91 9113676485</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-border hover:border-primary transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Email</h3>
                      <p className="text-muted-foreground">contact@ayyappaseva.org</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-border hover:border-primary transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Address</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        No. 1, 2nd Floor, Canara Bank Colony Bus Stop,<br/>
                        Opp. Shanthisagar Hotel, Uttarahalli Main Road,<br/>
                        Bangalore – 560061
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-white p-4 rounded-xl shadow-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0!2d77.5!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="350"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
