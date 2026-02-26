'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { ChevronDown, Menu, X, Star, Play, Pause, Volume2, VolumeX } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [openDropdown, setOpenDropdown] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)

  const heroImages = [
    '/temple/565090714_18080753051283913_5599229946113706496_n.jpg',
    '/temple/626889911_18096886048926975_1304849014059391532_n.jpg',
    '/temple/483682382_18058292642283913_5275937817666155122_n.jpg',
    '/temple/620514936_18090043265283913_3611307807981175971_n.jpg'
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Ayyappa Deeksha', href: '/deeksha' },
    { label: 'Ashtakam', href: '/ashtakam' },
    { label: 'Projects', href: '/projects' },
    { label: 'Healthcare', href: '/healthcare' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Enquiry', href: '/message' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-card/95 backdrop-blur-md shadow-lg border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src="/temple/565090714_18080753051283913_5599229946113706496_n.jpg" 
                alt="Ayyappa Seva Logo" 
                className="w-12 h-12 rounded-full object-cover transform group-hover:scale-110 transition-transform duration-300 border-2 border-primary"
              />
              <span className="text-xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Ayyappa Seva
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#home" className="text-sm font-light tracking-wider hover:text-primary transition-colors duration-300 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#about" className="text-sm font-light tracking-wider hover:text-primary transition-colors duration-300 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* Ayyappa Deeksha Dropdown */}
              <div className="relative" onMouseEnter={() => setOpenDropdown(true)} onMouseLeave={() => setOpenDropdown(false)}>
                <button className="text-sm font-light tracking-wider hover:text-primary transition-colors duration-300 flex items-center gap-1">
                  Ayyappa Deeksha
                  <ChevronDown size={16} className={`transition-transform duration-300 ${openDropdown ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-gray-100 rounded-2xl shadow-xl border border-gray-200 min-w-[200px] py-3 animate-fadeInDown">
                    <Link href="/deeksha" className="block px-6 py-3 text-sm font-serif text-gray-800 hover:text-primary hover:bg-white/50 transition-colors">
                      Ayyappa Deeksha
                    </Link>
                    <Link href="/ashtakam" className="block px-6 py-3 text-sm font-serif text-gray-800 hover:text-primary hover:bg-white/50 transition-colors">
                      Ashtakam
                    </Link>
                    <Link href="/mala-visarjana" className="block px-6 py-3 text-sm font-serif text-gray-800 hover:text-primary hover:bg-white/50 transition-colors">
                      Mala Visarjana
                    </Link>
                    <Link href="/mantra" className="block px-6 py-3 text-sm font-serif text-gray-800 hover:text-primary hover:bg-white/50 transition-colors">
                      Mantra
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/projects" className="text-sm font-light tracking-wider hover:text-primary transition-colors duration-300 relative group">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/healthcare" className="text-sm font-light tracking-wider hover:text-primary transition-colors duration-300 relative group">
                Healthcare
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/gallery" className="text-sm font-light tracking-wider hover:text-primary transition-colors duration-300 relative group">
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/message" className="text-sm font-light tracking-wider hover:text-primary transition-colors duration-300 relative group">
                Enquiry
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/contact" className="text-sm font-light tracking-wider hover:text-primary transition-colors duration-300 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <button suppressHydrationWarning className="hidden sm:block px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-light tracking-wider hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
                Donate
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0 bg-white backdrop-blur-md border-b border-border animate-fadeInDown shadow-lg">
              <div className="flex flex-col gap-4 px-4 py-6">
                <Link href="#home" className="text-sm font-light tracking-wider text-black hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link href="#about" className="text-sm font-light tracking-wider text-black hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
                
                {/* Mobile Dropdown */}
                <div>
                  <button onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)} className="text-sm font-light tracking-wider text-black hover:text-primary transition-colors flex items-center gap-1 w-full">
                    Ayyappa Deeksha
                    <ChevronDown size={16} className={`transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileDropdownOpen && (
                    <div className="mt-2 ml-4 bg-gray-100 rounded-2xl p-3 space-y-2">
                      <Link href="/deeksha" className="block px-4 py-2 text-sm font-serif text-gray-800 hover:text-primary transition-colors" onClick={() => { setIsMenuOpen(false); setMobileDropdownOpen(false); }}>Ayyappa Deeksha</Link>
                      <Link href="/ashtakam" className="block px-4 py-2 text-sm font-serif text-gray-800 hover:text-primary transition-colors" onClick={() => { setIsMenuOpen(false); setMobileDropdownOpen(false); }}>Ashtakam</Link>
                      <Link href="/mala-visarjana" className="block px-4 py-2 text-sm font-serif text-gray-800 hover:text-primary transition-colors" onClick={() => { setIsMenuOpen(false); setMobileDropdownOpen(false); }}>Mala Visarjana</Link>
                      <Link href="/mantra" className="block px-4 py-2 text-sm font-serif text-gray-800 hover:text-primary transition-colors" onClick={() => { setIsMenuOpen(false); setMobileDropdownOpen(false); }}>Mantra</Link>
                    </div>
                  )}
                </div>
                
                <Link href="/projects" className="text-sm font-light tracking-wider text-black hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                <Link href="/healthcare" className="text-sm font-light tracking-wider text-black hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Healthcare</Link>
                <Link href="/gallery" className="text-sm font-light tracking-wider text-black hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                <Link href="/message" className="text-sm font-light tracking-wider text-black hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Enquiry</Link>
                <Link href="/contact" className="text-sm font-light tracking-wider text-black hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={image}
                alt={`Temple ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          
          {/* Image Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Video Modal Overlay */}
        {isVideoPlaying && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm">
            <div className="relative w-full max-w-6xl mx-4">
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute -top-16 right-0 text-white hover:text-primary transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm"
              >
                <X size={24} />
              </button>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <video
                  className="w-full h-full"
                  controls
                  autoPlay
                  muted={isMuted}
                >
                  <source src="/temple/v3.mp4" type="video/mp4" />
                </video>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute bottom-6 right-6 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-colors backdrop-blur-sm"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </div>
              <div className="mt-4 text-center">
                <p className="text-white text-lg font-semibold">Sacred Ayyappa Devotional</p>
                <p className="text-white/70 text-sm">Experience divine blessings through sacred chants</p>
              </div>
            </div>
          </div>
        )}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="space-y-8 animate-slideUp">
            <p className="text-white font-light tracking-widest text-sm uppercase mb-6">Welcome to Sacred Traditions</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-tight mb-6 text-balance text-white">
              Vishwa Hindu Ayyappa Seva Trust
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white font-light max-w-3xl mx-auto leading-relaxed mb-12">
              Preserving divine wisdom, celebrating spiritual heritage, and serving humanity through sacred traditions, compassionate service, and spiritual enlightenment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => setIsVideoPlaying(true)}
                className="group px-10 py-4 bg-primary text-black font-medium tracking-widest hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 text-sm uppercase rounded-full flex items-center justify-center gap-3"
              >
                <Play size={18} className="group-hover:scale-110 transition-transform" />
                Watch Sacred Videos
              </button>
              <button suppressHydrationWarning className="px-10 py-4 border-2 border-white text-white font-medium tracking-widest hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase rounded-full">
                Learn More
              </button>
            </div>

            <div className="flex justify-center gap-6 md:gap-12 pt-12 border-t border-white/30 flex-wrap">
              <div className="text-center group">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">40+</p>
                <p className="text-xs md:text-sm font-light text-white">Years Heritage</p>
              </div>
              <div className="text-center group">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">10K+</p>
                <p className="text-xs md:text-sm font-light text-white">Devotees</p>
              </div>
              <div className="text-center group">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">500+</p>
                <p className="text-xs md:text-sm font-light text-white">Annual Events</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
            <ChevronDown size={24} className="text-white" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 border-y border-border" style={{ backgroundColor: 'rgb(255, 252, 232)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center mb-20">
            <div className="animate-slideInLeft">
              <div className="relative h-[700px] overflow-hidden rounded-2xl shadow-2xl group">
                <img 
                  src="/temple/565090714_18080753051283913_5599229946113706496_n.jpg" 
                  alt="Temple" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-lg font-semibold">Sacred Temple</p>
                  <p className="text-sm opacity-80">Divine Architecture</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-slideInRight text-justify">
              <div>
                <p className="text-primary font-light tracking-widest text-sm md:text-lg uppercase mb-4" style={{ color: '#d4af37' }}>Our Story</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8" style={{ color: '#d4af37' }}>A Legacy of Faith & Service</h2>
              </div>
              
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Founded with a vision to preserve and promote the rich spiritual heritage of Hinduism, Vishwa Hindu Ayyappa Seva Trust has been serving devotees and communities for over four decades. Our sacred mission centers on spreading the divine message of Lord Ayyappa.
              </p>

              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                We are dedicated to creating a sanctuary where spirituality thrives, where ancient wisdom meets modern compassion, and where every individual finds peace, purpose, and divine connection through sacred practices and sincere service to humanity.
              </p>

              <div className="pt-8 border-t border-border space-y-6">
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground font-light">Serve humanity through acts of compassion, spiritual guidance, and preservation of Hindu cultural values.</p>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground font-light">To create a world where spiritual wisdom enlightens every heart and divine grace flows through all actions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '40+', label: 'Years of Heritage' },
              { number: '10K+', label: 'Active Devotees' },
              { number: '500+', label: 'Annual Events' },
              { number: '100%', label: 'Community Trust' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-background p-8 border border-border text-center hover:border-primary transition-all duration-300 animate-scaleIn" style={{ animationDelay: `${idx * 0.1}s` }}>
                <p className="text-4xl font-bold text-primary mb-3">{stat.number}</p>
                <p className="text-sm font-light text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <p className="text-primary font-light tracking-widest text-sm md:text-lg uppercase mb-4" style={{ color: '#d4af37' }}>Sacred Offerings</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8" style={{ color: '#d4af37' }}>Our Spiritual Services</h2>
            <p className="text-base md:text-lg text-muted-foreground font-light max-w-3xl mx-auto">Experience our comprehensive spiritual offerings designed to nurture your soul and strengthen your connection with the divine.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { title: 'Daily Puja', desc: 'Sacred daily rituals performed with utmost devotion and authenticity by experienced priests', img: '/temple/483682382_18058292642283913_5275937817666155122_n.jpg' },
              { title: 'Abhisheka Ceremony', desc: 'Holy anointing rituals for spiritual purification and divine blessings', img: '/temple/622618768_18031737740778300_265630755777714974_n.jpg' },
              { title: 'Pilgrimage Support', desc: 'Comprehensive guidance and assistance for sacred journeys to holy shrines', img: '/temple/0823db7eb4d1bb76acc5286730dd4623.jpg' },
              { title: 'Spiritual Counseling', desc: 'One-on-one guidance from experienced spiritual masters and mentors', img: '/temple/626889911_18096886048926975_1304849014059391532_n.jpg' },
              { title: 'Wedding Blessings', desc: 'Traditional Hindu marriage ceremonies infused with sacred rituals', img: '/temple/620514936_18090043265283913_3611307807981175971_n.jpg' },
              { title: 'Educational Programs', desc: 'Workshops and seminars on Vedic knowledge and spiritual wisdom', img: '/temple/9ed58f7a343bfed80dfbc71c24a19b1c.jpg' }
            ].map((service, idx) => (
              <div key={idx} className="bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scaleIn group overflow-hidden border border-transparent hover:border-primary/20" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="h-80 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Sacred Service
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-4">{service.desc}</p>
                  <div className="flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 p-12 text-center rounded-sm">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Special Services Available</h3>
            <p className="text-muted-foreground font-light mb-6 max-w-2xl mx-auto">We also provide customized prayer services, ritual consultations, and spiritual guidance for life events and personal celebrations.</p>
            <button suppressHydrationWarning className="px-8 py-3 bg-primary text-white font-light tracking-wider hover:shadow-lg transition-all duration-300">
              Schedule a Service
            </button>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <p className="text-primary font-light tracking-widest text-sm md:text-lg uppercase mb-4" style={{ color: '#d4af37' }}>Sacred Videos</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8" style={{ color: '#d4af37' }}>Divine Moments</h2>
            <p className="text-base md:text-lg text-muted-foreground font-light">Experience the divine through our collection of sacred videos</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: '/temple/v1.mp4' },
              { src: '/temple/v2.mp4' },
              { src: '/temple/v3.mp4' },
              { src: '/temple/v4.mp4' },
              { src: '/temple/v5.mp4' }
            ].map((video, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scaleIn" style={{ animationDelay: `${idx * 0.1}s` }}>
                <video 
                  className="w-full h-48 md:h-64 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-32 border-y border-border" style={{ backgroundColor: 'rgb(255, 252, 232)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <p className="text-primary font-light tracking-widest text-sm md:text-lg uppercase mb-4" style={{ color: '#d4af37' }}>Upcoming Celebrations</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8" style={{ color: '#d4af37' }}>Festival & Events Calendar</h2>
            <p className="text-base md:text-lg text-muted-foreground font-light">Join us for sacred celebrations and spiritual gatherings throughout the year</p>
          </div>

          <div className="space-y-6 mb-20">
            {[
              { name: 'Mandala Pooja', date: 'March 15, 2024', time: '5:00 AM - 9:00 PM', desc: 'Grand annual celebration with special rituals and community participation' },
              { name: 'Ayyappa Jayanthi', date: 'March 22, 2024', time: 'All Day', desc: 'Birthday celebration of Lord Ayyappa with special pujas and festivities' },
              { name: 'Monthly Archana', date: 'Every Full Moon', time: '5:00 AM - 8:00 PM', desc: 'Monthly prayer ceremony for spiritual renewal and blessings' },
              { name: 'Pilgrimage Season', date: 'November - January', time: 'Extended Period', desc: 'Peak pilgrimage season to sacred Sabarimala temple' }
            ].map((event, idx) => (
              <div key={idx} className="bg-background p-8 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg animate-slideUp" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{event.name}</h3>
                    <p className="text-muted-foreground font-light mb-2">{event.date} • {event.time}</p>
                    <p className="text-muted-foreground font-light text-sm">{event.desc}</p>
                  </div>
                  <button suppressHydrationWarning className="px-6 py-2 text-primary border border-primary hover:bg-primary/5 transition-all font-light whitespace-nowrap">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 p-12 text-center rounded-sm">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground font-light mb-6">Subscribe to our newsletter for event updates and spiritual teachings</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input suppressHydrationWarning type="email" placeholder="Enter your email" className="flex-1 px-6 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary font-light" />
              <button suppressHydrationWarning className="px-8 py-3 bg-primary text-white font-light hover:shadow-lg transition-all">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Priests Section */}
      <section id="priests" className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <p className="text-primary font-light tracking-widest text-sm md:text-lg uppercase mb-4" style={{ color: '#d4af37' }}>Spiritual Leaders</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8" style={{ color: '#d4af37' }}>Meet Our Priests & Guides</h2>
            <p className="text-base md:text-lg text-muted-foreground font-light">Dedicated spiritual masters with decades of knowledge and sacred practice</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Sri Swamy Ayyappadas', role: 'Head Priest', exp: '35 years' },
              { name: 'Sri Maha Samadhi', role: 'Spiritual Advisor', exp: '28 years' },
              { name: 'Brahmin Sharma', role: 'Ritual Master', exp: '32 years' },
              { name: 'Sri Vedic Scholar', role: 'Philosophy Mentor', exp: '25 years' }
            ].map((priest, idx) => (
              <div key={idx} className="bg-card p-8 border border-border text-center hover:shadow-lg transition-all duration-300 hover:border-primary animate-scaleIn group" style={{ animationDelay: `${idx * 0.12}s` }}>
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                  <span className="text-5xl">🧑‍💼</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">{priest.name}</h3>
                <p className="text-sm font-light text-muted-foreground tracking-widest uppercase mb-3">{priest.role}</p>
                <p className="text-xs font-light text-primary bg-primary/10 py-2 px-4 rounded-full inline-block">{priest.exp} Experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 border-y border-border" style={{ backgroundColor: 'rgb(255, 252, 232)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <p className="text-primary font-light tracking-widest text-sm md:text-lg uppercase mb-4" style={{ color: '#d4af37' }}>Photo Gallery</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8" style={{ color: '#d4af37' }}>Sacred Moments & Celebrations</h2>
            <p className="text-base md:text-lg text-muted-foreground font-light">Glimpses of our spiritual celebrations and community service throughout the years</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: '/temple/481674730_18056819558283913_7899007055587882870_n.jpg', title: 'Sacred Rituals' },
              { img: '/temple/483682382_18058292642283913_5275937817666155122_n.jpg', title: 'Divine Ceremonies' },
              { img: '/temple/565090714_18080753051283913_5599229946113706496_n.jpg', title: 'Temple Architecture' },
              { img: '/temple/587293628_18086143820283913_294918588811629587_n.jpg', title: 'Spiritual Gatherings' },
              { img: '/temple/620514936_18090043265283913_3611307807981175971_n.jpg', title: 'Festival Celebrations' },
              { img: '/temple/621657513_18021223118801817_222731198205014996_n.jpg', title: 'Community Service' }
            ].map((item, idx) => (
              <div key={idx} className="group relative h-96 overflow-hidden rounded-2xl cursor-pointer hover:shadow-2xl animate-scaleIn transform hover:-translate-y-2 transition-all duration-500" style={{ animationDelay: `${idx * 0.1}s` }}>
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-80">Sacred Moments</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <p className="text-primary font-light tracking-widest text-sm md:text-lg uppercase mb-4" style={{ color: '#d4af37' }}>Community Voice</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8" style={{ color: '#d4af37' }}>Devotee Testimonials</h2>
            <p className="text-base md:text-lg text-muted-foreground font-light">Hear from our community members and their spiritual journeys</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: 'The spiritual guidance received here has transformed my life completely. The dedication and authenticity of the priests is truly commendable and inspiring.', author: 'Ramakrishnan K.', role: 'Devotee', avatar: '🙏' },
              { text: 'A true sanctuary of peace and divine grace. Every visit fills my heart with immense joy, spiritual awakening, and renewed purpose in life.', author: 'Priya Sharma', role: 'Community Member', avatar: '🕉️' },
              { text: 'The temple practices uphold authentic traditions while serving the modern community with genuine compassion and unwavering spiritual dedication.', author: 'Arun Nair', role: 'Long-time Devotee', avatar: '🪔' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slideUp border border-transparent hover:border-primary/20" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground font-light leading-relaxed mb-6 italic text-lg">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-serif font-bold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-32 border-y border-border" style={{ backgroundColor: 'rgb(255, 252, 232)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <p className="text-primary font-light tracking-widest text-sm md:text-lg uppercase mb-4" style={{ color: '#d4af37' }}>Knowledge Hub</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8" style={{ color: '#d4af37' }}>Spiritual Wisdom</h2>
            <p className="text-base md:text-lg text-muted-foreground font-light">Insights from ancient teachings for modern spiritual living</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'The Path of Ayyappa', excerpt: 'Discover the spiritual significance and profound teachings of Lord Ayyappa...' },
              { title: 'Vedic Wisdom for Today', excerpt: 'How ancient Vedic principles apply to contemporary challenges and life...' },
              { title: 'Meditation Practices', excerpt: 'Transform your inner self through guided spiritual meditation practices...' }
            ].map((post, idx) => (
              <div key={idx} className="bg-background p-8 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer group animate-scaleIn" style={{ animationDelay: `${idx * 0.12}s` }}>
                <h3 className="text-xl font-serif font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground font-light mb-6 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center text-primary font-light text-sm">
                  Read More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <p className="text-primary font-light tracking-widest text-sm md:text-lg uppercase mb-4" style={{ color: '#d4af37' }}>Get In Touch</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8" style={{ color: '#d4af37' }}>Connect With Us</h2>
            <p className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto">We would love to hear from you. Connect with us for inquiries, blessings, or spiritual guidance.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center animate-slideUp">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="font-serif font-bold text-foreground mb-2">Location</h3>
              <p className="font-light text-muted-foreground">123 Spiritual Lane<br/>Divine City, ST 12345</p>
            </div>
            <div className="text-center animate-slideUp" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-serif font-bold text-foreground mb-2">Contact</h3>
              <p className="font-light text-muted-foreground">(555) 123-4567<br/>contact@ayyappa.org</p>
            </div>
            <div className="text-center animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="font-serif font-bold text-foreground mb-2">Hours</h3>
              <p className="font-light text-muted-foreground">Mon - Sun: 5:00 AM - 10:00 PM</p>
            </div>
          </div>

          <form className="max-w-3xl mx-auto bg-card p-12 border border-border animate-scaleIn" suppressHydrationWarning>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-light text-muted-foreground mb-3">Full Name</label>
                <input
                  suppressHydrationWarning
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-background border border-border focus:outline-none focus:border-primary transition-all text-foreground placeholder-muted-foreground font-light"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-muted-foreground mb-3">Email Address</label>
                <input
                  suppressHydrationWarning
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-background border border-border focus:outline-none focus:border-primary transition-all text-foreground placeholder-muted-foreground font-light"
                />
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-light text-muted-foreground mb-3">Subject</label>
              <input
                suppressHydrationWarning
                type="text"
                placeholder="What is this about?"
                className="w-full px-6 py-4 bg-background border border-border focus:outline-none focus:border-primary transition-all text-foreground placeholder-muted-foreground font-light"
              />
            </div>
            <div className="mb-8">
              <label className="block text-sm font-light text-muted-foreground mb-3">Message</label>
              <textarea
                suppressHydrationWarning
                placeholder="Your Message"
                rows={6}
                className="w-full px-6 py-4 bg-background border border-border focus:outline-none focus:border-primary transition-all text-foreground placeholder-muted-foreground font-light resize-none"
              />
            </div>
            <button suppressHydrationWarning className="w-full px-8 py-4 bg-primary text-white font-light tracking-widest hover:shadow-2xl transition-all duration-300 transform hover:scale-105 uppercase text-sm">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
