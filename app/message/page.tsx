'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Send } from 'lucide-react'

export default function MessagePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Image */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(255, 252, 232)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-light tracking-widest text-sm uppercase mb-4" style={{ color: '#d4af37' }}>Get In Touch</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Send Message to Us</h1>
              <p className="text-xl text-muted-foreground mb-8">We're here to help and answer any questions you might have. We look forward to hearing from you.</p>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Send className="text-primary" size={24} />
                <span>Fill out the form and we'll get back to you shortly</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="/temple/626889911_18096886048926975_1304849014059391532_n.jpg" alt="Temple" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow-2xl border border-border">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Contact Form</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <input type="text" placeholder="Enter Name" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Mobile No *</label>
                  <input type="tel" placeholder="Mobile No" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">E-Mail ID *</label>
                  <input type="email" placeholder="E-Mail Address" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">City *</label>
                  <input type="text" placeholder="Enter City" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Address *</label>
                <input type="text" placeholder="Enter Address" className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Enquiry for *</label>
                <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" required>
                  <option value="">--- Select Enquiry for ---</option>
                  <option value="general">General Inquiry</option>
                  <option value="puja">Puja Services</option>
                  <option value="donation">Donation</option>
                  <option value="events">Events</option>
                  <option value="healthcare">Healthcare Card</option>
                  <option value="projects">Projects</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your Message (Requirements) *</label>
                <textarea rows={6} placeholder="If, Any Message...." className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none" required></textarea>
              </div>

              <button type="submit" className="w-full px-8 py-4 bg-primary text-white font-medium tracking-wider hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 rounded-lg flex items-center justify-center gap-3">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
