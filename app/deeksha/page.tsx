'use client'

import { useEffect, useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DeekshaPage() {
  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const playVideo = (video: HTMLVideoElement | null) => {
      if (video) {
        video.muted = true
        video.play().catch(() => {
          setTimeout(() => video.play().catch(() => {}), 1000)
        })
      }
    }
    
    playVideo(video1Ref.current)
    playVideo(video2Ref.current)
  }, [])
  return (
    <div className="min-h-screen" style={{ background: '#0D0A06', color: '#FDF5E6', fontFamily: 'Cormorant Garamond, serif', overflowX: 'hidden' }}>
      <Header />
      <style jsx>{`
        :root {
          --saffron: #E8720C;
          --deep-saffron: #C4530A;
          --gold: #D4A017;
          --gold-light: #F5C842;
          --crimson: #8B1A1A;
          --cream: #FDF5E6;
          --dark-brown: #2C1A0E;
          --black-bg: #0D0A06;
          --muted-gold: #B8860B;
        }

        .hero {
          position: relative;
          min-height: calc(100vh - 40px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          padding: 60px 20px;
          background-image: url('/temple/622618768_18031737740778300_265630755777714974_n.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/temple/622618768_18031737740778300_265630755777714974_n.jpg');
          background-size: cover;
          background-position: center;
          z-index: 0;
        }
        .hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 30%, rgba(61,31,0,0.8) 0%, rgba(26,13,0,0.9) 40%, rgba(13,10,6,0.95) 100%);
        }

        .mandala-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 700px;
          border-radius: 50%;
          border: 1px solid rgba(212,160,23,0.15);
          animation: spin 60s linear infinite;
          z-index: 0;
        }
        .mandala-ring::before {
          content: '';
          position: absolute;
          inset: 30px;
          border-radius: 50%;
          border: 1px solid rgba(232,114,12,0.12);
        }
        .mandala-ring::after {
          content: '';
          position: absolute;
          inset: 60px;
          border-radius: 50%;
          border: 1px solid rgba(212,160,23,0.1);
        }

        .diya {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold-light);
          box-shadow: 0 0 12px 4px rgba(245,200,66,0.6);
          animation: flicker 3s ease-in-out infinite;
        }
        .diya:nth-child(1) { top: 15%; left: 8%; animation-delay: 0s; }
        .diya:nth-child(2) { top: 25%; right: 10%; animation-delay: 0.7s; }
        .diya:nth-child(3) { top: 70%; left: 5%; animation-delay: 1.4s; }
        .diya:nth-child(4) { top: 80%; right: 7%; animation-delay: 2s; }
        .diya:nth-child(5) { top: 45%; left: 2%; animation-delay: 0.3s; }
        .diya:nth-child(6) { top: 55%; right: 3%; animation-delay: 1.1s; }

        @keyframes flicker {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
        @keyframes spin { to { transform: translate(-50%,-50%) rotate(360deg); } }

        .hero-content { position: relative; z-index: 2; max-width: 800px; }

        .om-symbol {
          font-size: 4rem;
          color: var(--gold);
          text-shadow: 0 0 30px rgba(212,160,23,0.8);
          display: block;
          margin-bottom: 16px;
          animation: glow-pulse 3s ease-in-out infinite;
        }
        @keyframes glow-pulse {
          0%,100% { text-shadow: 0 0 30px rgba(212,160,23,0.8); }
          50% { text-shadow: 0 0 60px rgba(245,200,66,1), 0 0 100px rgba(232,114,12,0.5); }
        }

        .hero-title {
          font-family: 'Cinzel Decorative', serif;
          font-size: clamp(2rem, 5vw, 3.8rem);
          font-weight: 700;
          color: var(--gold-light);
          line-height: 1.2;
          letter-spacing: 0.04em;
          text-shadow: 0 2px 20px rgba(212,160,23,0.4);
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--saffron);
          letter-spacing: 0.3em;
          text-transform: uppercase;
          margin: 12px 0 24px;
          font-weight: 300;
        }

        .hero-mantra {
          font-style: italic;
          font-size: 1.4rem;
          color: rgba(253,245,230,0.7);
          margin-bottom: 8px;
        }

        .hero-days-badge {
          display: inline-block;
          border: 1px solid var(--gold);
          color: var(--gold);
          padding: 8px 28px;
          font-family: 'Cinzel Decorative', serif;
          font-size: 0.9rem;
          letter-spacing: 0.2em;
          margin-top: 20px;
        }

        .media-section {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          max-height: 600px;
          overflow: hidden;
        }

        .media-image {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #1A0D00 0%, #3D1F00 50%, #1A0D00 100%);
          min-height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .media-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.85;
          filter: sepia(30%) saturate(1.4);
        }

        .img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(13,10,6,0.3) 0%, transparent 50%, rgba(13,10,6,0.7) 100%);
        }

        .video-container {
          position: relative;
          background: #000;
          min-height: 480px;
          overflow: hidden;
        }

        .video-container video {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          border: none;
        }

        .ornament-divider {
          text-align: center;
          padding: 28px 20px 0;
          position: relative;
        }
        .ornament-divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(to right, transparent, var(--gold), var(--saffron), var(--gold), transparent);
        }
        .ornament-divider span {
          position: relative;
          background: var(--black-bg);
          padding: 0 16px;
          color: var(--gold);
          font-size: 1.5rem;
        }

        .content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 20px 24px 60px;
        }

        .section-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          margin-top: 36px;
        }

        .section-card {
          background: linear-gradient(145deg, rgba(44,26,14,0.6), rgba(26,13,0,0.8));
          border: 1px solid rgba(212,160,23,0.2);
          border-top: 3px solid var(--saffron);
          padding: 28px;
          position: relative;
          transition: border-color 0.3s;
        }
        .section-card:hover {
          border-color: rgba(212,160,23,0.5);
        }

        .section-card.full-width {
          grid-column: 1 / -1;
        }

        .section-number {
          position: absolute;
          top: -18px;
          left: 24px;
          background: var(--saffron);
          color: var(--black-bg);
          font-family: 'Cinzel Decorative', serif;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 14px;
          letter-spacing: 0.15em;
        }

        .section-title {
          font-family: 'Cinzel Decorative', serif;
          font-size: 1rem;
          color: var(--gold-light);
          letter-spacing: 0.08em;
          margin-bottom: 18px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(212,160,23,0.2);
        }

        .section-body {
          font-size: 0.95rem;
          line-height: 1.85;
          color: rgba(253,245,230,0.82);
        }

        .section-body ul {
          list-style: none;
          padding: 0;
        }

        .section-body ul li {
          padding: 4px 0 4px 18px;
          position: relative;
        }
        .section-body ul li::before {
          content: '॰';
          position: absolute;
          left: 0;
          color: var(--saffron);
          font-size: 1.1rem;
        }

        .mantra-box {
          background: linear-gradient(135deg, rgba(61,31,0,0.7), rgba(44,26,14,0.9));
          border: 1px solid rgba(212,160,23,0.4);
          border-left: 4px solid var(--gold);
          padding: 20px 24px;
          margin: 14px 0;
          text-align: center;
        }

        .mantra-kannada {
          font-size: 1.15rem;
          color: var(--gold-light);
          line-height: 2;
          margin-bottom: 6px;
        }

        .mantra-transliteration {
          font-style: italic;
          color: rgba(253,245,230,0.7);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .mantra-main {
          font-family: 'Cinzel Decorative', serif;
          font-size: 1.4rem;
          color: var(--gold);
          letter-spacing: 0.1em;
          text-shadow: 0 0 20px rgba(212,160,23,0.5);
          display: block;
          text-align: center;
          padding: 16px 0 8px;
        }

        .swami-badge {
          display: inline-block;
          background: linear-gradient(135deg, var(--saffron), var(--deep-saffron));
          color: var(--cream);
          font-family: 'Cinzel Decorative', serif;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          padding: 4px 14px;
          margin: 4px 0;
        }

        .footer-banner {
          text-align: center;
          padding: 40px 20px;
          background: linear-gradient(to bottom, var(--black-bg), #1A0D00);
          border-top: 1px solid rgba(212,160,23,0.2);
        }
        .footer-mantra {
          font-size: clamp(1.6rem, 4vw, 2.8rem);
          font-family: 'Cinzel Decorative', serif;
          color: var(--gold);
          letter-spacing: 0.12em;
          text-shadow: 0 0 40px rgba(212,160,23,0.6);
        }
        .footer-kannada {
          font-size: 1.5rem;
          color: var(--saffron);
          margin-top: 8px;
          display: block;
        }

        @media (max-width: 768px) {
          .media-section { grid-template-columns: 1fr; max-height: none; }
          .section-grid { grid-template-columns: 1fr; }
          .section-card.full-width { grid-column: 1; }
          .hero { min-height: calc(100vh - 40px); }
        }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Devanagari+MT&display=swap" rel="stylesheet" />

      {/* AYYAPPA DEEKSHA HEADER */}
      <div style={{background: 'linear-gradient(135deg, #E8720C, #D4A017)', padding: '8px 0', textAlign: 'center', marginTop: '80px'}}>
        <p style={{color: '#FDF5E6', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '0.1em', margin: '0'}}>AYYAPPA DEEKSHA MENU</p>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="mandala-ring"></div>
        <div className="diya"></div>
        <div className="diya"></div>
        <div className="diya"></div>
        <div className="diya"></div>
        <div className="diya"></div>
        <div className="diya"></div>

        <div className="hero-content">
          <span className="om-symbol">ॐ</span>
          <div className="hero-subtitle">Sacred Practice</div>
          <h1 className="hero-title">Ayyappa<br/>Mālādhāraṇa Ritual</h1>
          <p className="hero-mantra">ಸ್ವಾಮಿಯೇ ಶರಣಂ ಅಯ್ಯಪ್ಪ</p>
          <div className="hero-days-badge">41-Day Pilgrimage Observance</div>
        </div>
      </section>

      {/* MEDIA SECTION */}
      <div className="media-section">
        <div className="media-image">
          <img src="/temple/565090714_18080753051283913_5599229946113706496_n.jpg" alt="Lord Ayyappa" />
          <div className="img-overlay"></div>
        </div>
        <div className="video-container">
          <img src="/temple/481674730_18056819558283913_7899007055587882870_n.jpg" alt="Ayyappa Temple" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
      </div>

      {/* ORNAMENT DIVIDER */}
      <div className="ornament-divider">
        <span>🪔</span>
      </div>

      {/* DEVOTIONAL VIDEOS SECTION */}
      <div className="content">
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
          <h2 style={{fontFamily: 'Cinzel Decorative, serif', fontSize: '2rem', color: 'var(--gold-light)', marginBottom: '10px'}}>Sacred Devotional Videos</h2>
          <p style={{color: 'rgba(253,245,230,0.7)'}}>Experience divine chants and prayers</p>
        </div>
        
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '60px'}}>
          <div style={{background: 'linear-gradient(145deg, rgba(44,26,14,0.6), rgba(26,13,0,0.8))', border: '1px solid rgba(212,160,23,0.2)', padding: '20px', borderRadius: '10px'}}>
            <iframe src="https://www.youtube.com/embed/EfeRyc4xBQ0?autoplay=1&mute=1&loop=1&playlist=EfeRyc4xBQ0" style={{width: '100%', height: '300px', borderRadius: '8px', marginBottom: '15px', border: 'none'}} allow="autoplay; encrypted-media"></iframe>
            <h3 style={{color: 'var(--gold)', fontSize: '1.2rem', marginBottom: '8px'}}>Harivarasanam</h3>
            <p style={{color: 'rgba(253,245,230,0.7)', fontSize: '0.9rem'}}>Sacred evening prayer at Sabarimala</p>
          </div>
          
          <div style={{background: 'linear-gradient(145deg, rgba(44,26,14,0.6), rgba(26,13,0,0.8))', border: '1px solid rgba(212,160,23,0.2)', padding: '20px', borderRadius: '10px'}}>
            <iframe src="https://www.youtube.com/embed/mP1OUFS7E1I?autoplay=1&mute=1&loop=1&playlist=mP1OUFS7E1I" style={{width: '100%', height: '300px', borderRadius: '8px', marginBottom: '15px', border: 'none'}} allow="autoplay; encrypted-media"></iframe>
            <h3 style={{color: 'var(--gold)', fontSize: '1.2rem', marginBottom: '8px'}}>Swami Saranam</h3>
            <p style={{color: 'rgba(253,245,230,0.7)', fontSize: '0.9rem'}}>Divine chants from Sannidhanam</p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="content">
        <div className="section-grid">
          {/* 1. Preparation */}
          <div className="section-card">
            <div className="section-number">01</div>
            <h2 className="section-title">Preparation before Māla Dhāraṇa</h2>
            <div className="section-body">
              <ul>
                <li>Take a <em>vrata</em> (vow) to observe 41 days of Ayyappa Deeksha before visiting Sabarimala.</li>
                <li>Maintain purity in body, mind and speech.</li>
                <li>Bathe twice daily; wear simple black/blue clothes; avoid luxury; live as a brahmachari.</li>
                <li>Avoid alcohol, non-veg, smoking, and worldly pleasures.</li>
              </ul>
            </div>
          </div>

          {/* 2. Day of Mālādhāraṇa */}
          <div className="section-card">
            <div className="section-number">02</div>
            <h2 className="section-title">Day of Mālādhāraṇa</h2>
            <div className="section-body">
              <ul>
                <li>Visit a temple of Lord Ayyappa (or Shiva/Vishnu) on an auspicious day — Saturday, Sunday or Mandala Puja day.</li>
                <li>Tulasi or Rudraksha mala is purified and placed before the deity.</li>
                <li>Perform Ganapati Puja → Ayyappa Puja → Guru Puja before wearing the mala.</li>
                <li>A <em>Guru Swami</em> (senior devotee) ties the mala around the devotee's neck.</li>
              </ul>
            </div>
          </div>

          {/* 3. Mantras */}
          <div className="section-card full-width">
            <div className="section-number">03</div>
            <h2 className="section-title">Mantras during Mālādhāraṇa</h2>
            <div className="section-body">
              <span className="mantra-main">ಸ್ವಾಮಿ ಶರಣಂ ಅಯ್ಯಪ್ಪ</span>
              <p style={{textAlign: 'center', color: 'var(--saffron)', letterSpacing: '0.1em', marginBottom: '20px'}}>Swami Sharanam Ayyappa</p>
              <div className="mantra-box">
                <div className="mantra-kannada">
                  ಮಣಿಕಂಠ ಮಾಮ ಪಾಹಿ ಶಬರಿಮಲ ವಾಸಿನಂ ।<br/>
                  ಶರಣಾಗತ ದೀನಾರ್ತ ಪರಿತ್ರಾಣ ಪರಾಯಣಂ ॥
                </div>
                <div className="mantra-transliteration">
                  Manikantha maam paahi Shabarimala vaasinam |<br/>
                  Sharanaagata deenaartha paritraana paraayanam ||
                </div>
              </div>
            </div>
          </div>

          {/* 4. After wearing the Mala */}
          <div className="section-card">
            <div className="section-number">04</div>
            <h2 className="section-title">After Wearing the Mala</h2>
            <div className="section-body">
              <p style={{marginBottom: '12px'}}>From this moment, the devotee is called a <span className="swami-badge">SWAMI</span></p>
              <ul>
                <li>Address and be addressed by all as "Swami".</li>
                <li>Sleep on the floor — not on a bed.</li>
                <li>Wake at Brahma Muhurta, bathe, do puja daily.</li>
                <li>Chant <em>Swamiye Sharanam Ayyappa</em> continuously.</li>
                <li>Visit temple every day if possible.</li>
                <li>Practice humility, patience, truthfulness, and self-control.</li>
              </ul>
            </div>
          </div>

          {/* 5. Visarjana */}
          <div className="section-card">
            <div className="section-number">05</div>
            <h2 className="section-title">Visarjana — Removal of Mala</h2>
            <div className="section-body">
              <ul>
                <li>After the pilgrimage, the mala is removed by chanting the Visarjana Mantra.</li>
                <li>The mala must never be discarded — keep it respectfully near a deity or immerse it in holy water.</li>
              </ul>
              <div className="mantra-box" style={{marginTop: '16px'}}>
                <div className="mantra-kannada">ಸ್ವಾಮಿಯೇ ಶರಣಂ ಅಯ್ಯಪ್ಪ</div>
                <div className="mantra-transliteration">Swamiye Sharanam Ayyappa</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BANNER */}
      <div className="footer-banner">
        <p className="footer-kannada">ಸ್ವಾಮಿಯೇ ಶರಣಂ ಅಯ್ಯಪ್ಪ</p>
        <p className="footer-mantra">Swamiye Sharanam Ayyappa</p>
      </div>

      <Footer />
    </div>
  )
}