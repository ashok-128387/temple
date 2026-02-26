'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDeekshaOpen, setIsDeekshaOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Healthcare', href: '/healthcare' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Enquiry', href: '/message' },
    { label: 'Contact', href: '/contact' },
  ]

  const deekshaSubmenu = [
    { label: 'Ayyappa Deeksha', href: '/deeksha' },
    { label: 'Ashtakam', href: '/ashtakam' },
    { label: 'Mala Visarjana', href: '/mala-visarjana' },
    { label: 'Mantra', href: '/mantra' },
  ]

  return (
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
            <Link
              href="/"
              className={`text-sm font-light tracking-wider hover:text-primary transition-colors duration-300 relative group ${
                scrolled ? 'text-primary' : ''
              }`}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/#about"
              className={`text-sm font-light tracking-wider hover:text-primary transition-colors duration-300 relative group ${
                scrolled ? 'text-primary' : ''
              }`}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* Ayyappa Deeksha Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDeekshaOpen(!isDeekshaOpen)}
                className={`text-sm font-light tracking-wider hover:text-primary transition-colors duration-300 flex items-center gap-1 ${
                  scrolled ? 'text-primary' : ''
                }`}
              >
                Ayyappa Deeksha
                <ChevronDown size={16} className={`transition-transform duration-300 ${isDeekshaOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDeekshaOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white backdrop-blur-md border border-border rounded-lg shadow-lg transition-all duration-300">
                  {deekshaSubmenu.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-3 text-sm font-light tracking-wider text-black hover:text-primary hover:bg-secondary/50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => setIsDeekshaOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-light tracking-wider hover:text-primary transition-colors duration-300 relative group ${
                  scrolled ? 'text-primary' : ''
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/puja-sponsor" suppressHydrationWarning className="hidden sm:block px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-light tracking-wider hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
              Sponsor
            </Link>

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
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg animate-fadeInDown">
            <div className="flex flex-col gap-4 px-4 py-6">
              <Link
                href="/"
                className="text-sm font-light tracking-wider text-black hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-sm font-light tracking-wider text-black hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Ayyappa Deeksha Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setIsDeekshaOpen(!isDeekshaOpen)}
                  className="text-sm font-light tracking-wider text-black hover:text-primary transition-colors flex items-center gap-1 w-full"
                >
                  Ayyappa Deeksha
                  <ChevronDown size={16} className={`transition-transform duration-300 ${isDeekshaOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDeekshaOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {deekshaSubmenu.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="text-sm font-light tracking-wider text-black hover:text-primary transition-colors"
                        onClick={() => {
                          setIsMenuOpen(false)
                          setIsDeekshaOpen(false)
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-light tracking-wider text-black hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
