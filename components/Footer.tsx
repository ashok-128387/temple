import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border" style={{ backgroundColor: 'rgb(255, 252, 232)', fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img src="/temple/download.png" alt="Logo" className="w-32 h-auto mb-4" />
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold">ॐ</div>
                <span className="text-xl font-serif font-bold text-primary">Ayyappa</span>
              </div>
            </div>
            <p className="font-light leading-relaxed" style={{ color: '#000000', fontSize: '15px' }}>
              Dedicated to spreading divine wisdom and serving Lord Ayyappa through sacred traditions and compassionate community service.
            </p>
          </div>
          <div>
            <h4 className="font-serif font-bold mb-6 uppercase tracking-widest" style={{ color: '#000000', fontSize: '15px' }}>About</h4>
            <ul className="space-y-3">
              {['Our Story', 'Mission & Vision', 'Leadership', 'Heritage'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-light hover:text-primary transition-colors" style={{ color: '#000000', fontSize: '15px' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-bold mb-6 uppercase tracking-widest" style={{ color: '#000000', fontSize: '15px' }}>Services</h4>
            <ul className="space-y-3">
              {['Daily Puja', 'Ceremonies', 'Guidance', 'Events'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-light hover:text-primary transition-colors" style={{ color: '#000000', fontSize: '15px' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-bold mb-6 uppercase tracking-widest" style={{ color: '#000000', fontSize: '15px' }}>Community</h4>
            <ul className="space-y-3">
              {['Events', 'Gallery', 'Blog', 'Newsletter'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-light hover:text-primary transition-colors" style={{ color: '#000000', fontSize: '15px' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-bold mb-6 uppercase tracking-widest" style={{ color: '#000000', fontSize: '15px' }}>Connect</h4>
            <ul className="space-y-3">
              {['Instagram', 'Facebook', 'YouTube', 'Twitter'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-light hover:text-primary transition-colors" style={{ color: '#000000', fontSize: '15px' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-light" style={{ color: '#000000', fontSize: '15px' }}>
              © 2024 Vishwa Hindu Ayyappa Seva Trust. All rights reserved. Dedicated to Lord Ayyappa with devotion and grace.
            </p>
            <div className="flex gap-8">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
                <a key={item} href="#" className="font-light hover:text-primary transition-colors" style={{ color: '#000000', fontSize: '15px' }}>
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-border">
            <p style={{ color: '#000000', fontSize: '14px', fontWeight: '500' }}>
              Designed &amp; Developed By <a href="https://peakinfosolution.com" target="_blank" rel="noopener noreferrer" style={{ color: '#d4af37', textDecoration: 'underline', fontWeight: '600' }}>Peakinfosolution.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
