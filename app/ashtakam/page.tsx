'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AshtakamPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const canvas = document.getElementById('particles') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')!
    let W: number, H: number
    const particles: Particle[] = []

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
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = -(Math.random() * 0.6 + 0.2)
        this.alpha = 0
        this.maxAlpha = Math.random() * 0.4 + 0.1
        this.size = Math.random() * 1.5 + 0.5
        this.life = 0
        this.maxLife = Math.random() * 250 + 150
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
        ctx.fillStyle = `hsl(${38 + Math.random() * 10}, 80%, 65%)`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < 60; i++) {
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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal, .verse-card').forEach(el => observer.observe(el))

    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Crimson+Pro:ital,wght@0,300;0,400;1,300;1,400&family=Noto+Sans+Kannada:wght@300;400;500&display=swap');
        
        .ashtakam-page { background: #0d0905; color: #f8ecd8; font-family: 'Crimson Pro', serif; overflow-x: hidden; min-height: 100vh; }
        .ashtakam-page::before { content: ''; position: fixed; inset: 0; background: radial-gradient(ellipse 60% 80% at 50% 0%, rgba(201,161,74,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 20%, rgba(212,84,10,0.05) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(212,84,10,0.04) 0%, transparent 60%); pointer-events: none; z-index: 0; }
        #particles { position: fixed; inset: 0; pointer-events: none; z-index: 1; }
        .page { position: relative; z-index: 2; max-width: 1100px; margin: 0 auto; padding: 0 2rem; }
        .hero { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 6rem 2rem 4rem; position: relative; }
        .lotus-ornament { font-size: 3rem; color: #d4a94e; opacity: 0; animation: fadeDown 1s 0.2s forwards; letter-spacing: 0.3em; margin-bottom: 1.5rem; }
        .hero-title { font-family: 'Cinzel Decorative', serif; font-size: clamp(3rem, 8vw, 6rem); font-weight: 900; line-height: 1.1; opacity: 0; animation: fadeDown 1s 0.4s forwards, goldGlow 3s 1.5s ease-in-out infinite; background: linear-gradient(135deg, #f0d080 0%, #d4a94e 40%, #a07820 70%, #d4a94e 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero-subtitle { font-family: 'Cinzel Decorative', serif; font-size: clamp(1.5rem, 3.5vw, 2.2rem); color: #d4a94e; opacity: 0; animation: fadeDown 1s 0.6s forwards; margin-top: 0.5rem; letter-spacing: 0.15em; }
        .divider { width: 200px; height: 1px; background: linear-gradient(to right, transparent, #d4a94e, transparent); margin: 2rem auto; opacity: 0; animation: fadeIn 1s 0.9s forwards; }
        .divider-icon { color: #d4a94e; font-size: 1.5rem; display: block; text-align: center; margin-top: -0.85rem; opacity: 0; animation: fadeIn 1s 1s forwards; }
        .hero-kannada { font-family: 'Noto Sans Kannada', sans-serif; font-size: clamp(1.3rem, 2.5vw, 1.8rem); color: #fdf0d8; opacity: 0; animation: fadeUp 1s 1.1s forwards; font-weight: 300; letter-spacing: 0.05em; line-height: 1.8; max-width: 700px; }
        .section { padding: 5rem 0; }
        .section-label { font-family: 'Cinzel Decorative', serif; font-size: 0.9rem; letter-spacing: 0.4em; color: #d4a94e; text-transform: uppercase; margin-bottom: 1rem; opacity: 0.8; }
        .section-title { font-family: 'Cinzel Decorative', serif; font-size: clamp(2rem, 4vw, 3rem); color: #f0d080; margin-bottom: 2.5rem; font-weight: 700; }
        .ashtakam-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
        .verse-card { background: linear-gradient(145deg, rgba(26,13,3,0.8), rgba(42,21,7,0.8)); border: 1px solid rgba(201,161,74,0.2); border-radius: 4px; padding: 2rem; position: relative; transition: all 0.4s ease; opacity: 0; transform: translateY(30px); }
        .verse-card.visible { animation: slideUp 0.7s forwards; }
        .verse-card:hover { border-color: rgba(201,161,74,0.45); box-shadow: 0 8px 30px rgba(0,0,0,0.4), inset 0 0 30px rgba(201,161,74,0.03); }
        .verse-number { position: absolute; top: -1px; right: 1.5rem; font-family: 'Cinzel Decorative', serif; font-size: 0.8rem; letter-spacing: 0.2em; color: #0d0905; background: linear-gradient(135deg, #f0d080, #d4a94e); padding: 0.4rem 1rem; border-radius: 0 0 4px 4px; }
        .verse-kannada { font-family: 'Noto Sans Kannada', sans-serif; font-size: 1.1rem; line-height: 1.8; color: #fdf0d8; font-weight: 400; margin-bottom: 1.5rem; border-bottom: 1px solid rgba(201,161,74,0.15); padding-bottom: 1.5rem; }
        .verse-english { font-family: 'Roboto', sans-serif; font-size: 1.25rem; line-height: 1.6; color: rgba(240,223,192,0.8); font-style: italic; }
        .verse-card.full { grid-column: span 2; }
        .gold-rule { display: flex; align-items: center; gap: 1.5rem; margin: 3rem 0; }
        .gold-rule::before, .gold-rule::after { content: ''; flex: 1; height: 1px; background: linear-gradient(to right, transparent, #a07820, transparent); }
        .gold-rule span { color: #d4a94e; font-size: 1.2rem; opacity: 0.7; }
        .footer-strip { text-align: center; padding: 4rem 2rem 5rem; border-top: 1px solid rgba(201,161,74,0.15); }
        .footer-strip p { font-family: 'Cinzel Decorative', serif; font-size: 0.7rem; letter-spacing: 0.4em; color: rgba(201,161,74,0.4); text-transform: uppercase; }
        .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        @keyframes fadeDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes goldGlow { 0%, 100% { filter: drop-shadow(0 0 20px rgba(201,161,74,0.3)); } 50% { filter: drop-shadow(0 0 45px rgba(201,161,74,0.6)); } }
        @media (max-width: 768px) { .ashtakam-grid { grid-template-columns: 1fr; } .verse-card.full { grid-column: span 1; } }
        .back-btn { position: fixed; top: 2rem; left: 2rem; z-index: 100; background: rgba(212,169,78,0.1); border: 1px solid rgba(212,169,78,0.3); color: #d4a94e; padding: 0.75rem 1.5rem; border-radius: 4px; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s; }
        .back-btn:hover { background: rgba(212,169,78,0.2); border-color: rgba(212,169,78,0.5); }
      `}</style>

      <div className="ashtakam-page">
        <canvas id="particles"></canvas>
        
        <Header />

        <div className="page">
          <section className="hero">
            <div className="lotus-ornament">☸ ॐ ☸</div>
            <h1 className="hero-title" style={{ whiteSpace: 'nowrap' }}>Ayyappa Shabaraj<br/>Ashtakam</h1>
            <p className="hero-subtitle">ಅಯ್ಯಪ್ಪ ಶಬರಜ ಅಷ್ಟಕಂ</p>
            <div className="divider"></div>
            <span className="divider-icon">🪔</span>
            <p className="hero-kannada">
              ಶಬರಿಗಿರಿಮಧ್ಯಸ್ಥಂ ಅನುಪಮಮಹಂ<br/>
              ಶರಣಂ ಪ್ರಪದ್ಯೇ ಶರಣಾಗತವತ್ಸಲಂ
            </p>
          </section>

          <div className="gold-rule reveal"><span>✦</span></div>

          {/* Image Gallery */}
          <section className="section reveal">
            <div className="section-label">🖼 Sacred Imagery</div>
            <div className="section-title">Photo Gallery</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                '/temple/9ed58f7a343bfed80dfbc71c24a19b1c.jpg',
                '/temple/0823db7eb4d1bb76acc5286730dd4623.jpg',
                '/temple/535232267_18073452809283913_6916111533699133348_n.jpg',
                '/temple/621657513_18021223118801817_222731198205014996_n.jpg'
              ].map((img, idx) => (
                <div key={idx} className="group relative h-80 overflow-hidden rounded-lg cursor-pointer transition-all duration-500 hover:-translate-y-2" style={{ border: '1px solid rgba(201,161,74,0.2)' }}>
                  <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </section>

          <div className="gold-rule reveal"><span>✦</span></div>

          <section className="section">
            <div className="section-label">🕉 Eight Sacred Verses</div>
            <div className="section-title">The Complete Ashtakam</div>

            <div className="ashtakam-grid">
              <div className="verse-card reveal">
                <div className="verse-number">Shloka I</div>
                <div className="verse-kannada">ಯಜಮಾನುಜಸನ್ನುತ ಭಕ್ತವರದಂ ಯತಿವರ್ಯಮುನಿಸೇವಿತಪಾದಯುಗ್ಮಂ ।<br/>ಶಬರಿಗಿರಿಮಧ್ಯಸ್ಥಮನುಪಮಮಹಂ ಶರಣಂ ಪ್ರಪದ್ಯೇ ಶರಣಾಗತವತ್ಸಲಂ ॥</div>
                <div className="verse-english">Yajamanujasannuta bhaktavaradam Yativaryamunisevitapadayugmam · Shabarigirimadhyastham anupamamaham Sharanam prapadye sharanagatavatsalam</div>
              </div>

              <div className="verse-card reveal">
                <div className="verse-number">Shloka II</div>
                <div className="verse-kannada">ಶರನಾಗತಗೋಪ್ತಾರಂ ಶಾಂತಂ ಶಾರದಸೇವಿತಂ ।<br/>ಶಬರಿಗಿರಿಮಧ್ಯಸ್ಥಂ ಭಜೇ ಶಬರಿಗಿರೀಶ್ವರಂ ॥</div>
                <div className="verse-english">Sharanagatagoptaram shantam sharadasevitam · Shabarigirimadhyastham bhaje shabarigirīshwaram</div>
              </div>

              <div className="verse-card reveal">
                <div className="verse-number">Shloka III</div>
                <div className="verse-kannada">ಭಕ್ತಾಭೀಷ್ಟಪ್ರದಂ ದೇವಂ ಭವರೋಗನಿವಾರಕಂ ।<br/>ಭವರಾಜವಿನಾಶಾರ್ಥಂ ಭಜೇ ಶಬರಿಗಿರೀಶ್ವರಂ ॥</div>
                <div className="verse-english">Bhaktabhishtapradam devam bhavaroginivarakam · Bhavarajavinashartham bhaje shabarigirīshwaram</div>
              </div>

              <div className="verse-card reveal">
                <div className="verse-number">Shloka IV</div>
                <div className="verse-kannada">ಗಜರಾಜಾರೂಢಗಮನೆಯಂ ಗಜಮುಖವಿನುತಂ ಸದಾ ।<br/>ಗಜಾನನಪ್ರಿಯಸುಖದಂ ಭಜೇ ಶಬರಿಗಿರೀಶ್ವರಂ ॥</div>
                <div className="verse-english">Gajarajarudhamanayam gajamukhavinutam sada · Gajananapriyasukhadam bhaje shabarigirīshwaram</div>
              </div>

              <div className="verse-card reveal">
                <div className="verse-number">Shloka V</div>
                <div className="verse-kannada">ಅನಂತಗುಣಸಂಪನ್ನಂ ಅನಂತಾನಂದದಾಯಕಂ ।<br/>ಅನಾಥಬಂಧುವರದಂ ಭಜೇ ಶಬರಿಗಿರೀಶ್ವರಂ ॥</div>
                <div className="verse-english">Anantagunasampannam anantanandadayakam · Anathabandhuvaradam bhaje shabarigirīshwaram</div>
              </div>

              <div className="verse-card reveal">
                <div className="verse-number">Shloka VI</div>
                <div className="verse-kannada">ಶಿವಪೂತ್ರಂ ಮಹಾವೀರಂ ಶಶಿಧರಂ ಮಹಾಮತಿಂ ।<br/>ಶರಣಾಗತಪಾಲಕಂ ತಂ ಭಜೇ ಶಬರಿಗಿರೀಶ್ವರಂ ॥</div>
                <div className="verse-english">Shivaputram mahaveeram shashidharam mahamatim · Sharanagatapalakam tam bhaje shabarigirīshwaram</div>
              </div>

              <div className="verse-card reveal">
                <div className="verse-number">Shloka VII</div>
                <div className="verse-kannada">ಶಬರಿಗಿರಿಯಾಧೀಶಂ ಶರಣಾಗತಪೋಷಕಂ ।<br/>ಶಬರಿಗಿರಿಯನಾಥಂ ತಂ ಭಜೇ ಶಬರಿಗಿರೀಶ್ವರಂ ॥</div>
                <div className="verse-english">Shabarigiriyadhisham sharanagataposhakam · Shabarigiriyanatham tam bhaje shabarigirīshwaram</div>
              </div>

              <div className="verse-card reveal full">
                <div className="verse-number">Shloka VIII · Phala Shruti</div>
                <div className="verse-kannada">ಶಬರಿಗಿರಿಯಾಧೀಶಂ ಶರಣಾಗತಪೋಷಕಂ ।<br/>ಅಷ್ಟಕಮಿದಮಾಧರ್ಯ ಯಃ ಪಠೇದ್ಭಕ್ತಿಪೂರ್ವಕಂ ॥</div>
                <div className="verse-english">Shabarigiriyadhisham sharanagataposhakam · Ashtakamidamadharya yah pathed bhaktipūrvakam</div>
              </div>
            </div>
          </section>

          <div className="footer-strip">
            <div className="gold-rule"><span>✦</span></div>
            <p>🙏 Swamiye Sharanam Ayyappa 🙏</p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
