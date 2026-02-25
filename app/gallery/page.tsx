'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Play } from 'lucide-react'

export default function GalleryPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null)

  const images = [
    '/temple/0823db7eb4d1bb76acc5286730dd4623.jpg',
    '/temple/481674730_18056819558283913_7899007055587882870_n.jpg',
    '/temple/483682382_18058292642283913_5275937817666155122_n.jpg',
    '/temple/488419543_18060178166283913_8759834649713714741_n.jpg',
    '/temple/535232267_18073452809283913_6916111533699133348_n.jpg',
    '/temple/565090714_18080753051283913_5599229946113706496_n.jpg',
    '/temple/587293628_18086143820283913_294918588811629587_n.jpg',
    '/temple/620514936_18090043265283913_3611307807981175971_n.jpg',
    '/temple/621657513_18021223118801817_222731198205014996_n.jpg',
    '/temple/622618768_18031737740778300_265630755777714974_n.jpg',
    '/temple/626889911_18096886048926975_1304849014059391532_n.jpg',
    '/temple/9ed58f7a343bfed80dfbc71c24a19b1c.jpg',
    '/temple/Ayyappa 🙏🏻📌Follow @sabarimala_ayyappa #sabarimalatemple #sabarimala_ayyapan #sabarimalasannid.jpg',
    '/temple/Ayyappa-Mala-Dharana-at-Sai-Datta-Peetham.jpg',
    '/temple/images.jpg',
    '/temple/Padhinettam Thirupadi🙏🏻♥️SWAMIYE SARANAM AYYAPPA 🙏🏻➡️ FOLLOW @sabarimala_ayyappa #sabarimal.webp',
    '/temple/Padhinettam Thirupadi🙏🏻♥️SWAMIYE SARANAM AYYAPPA 🙏🏻➡️ FOLLOW @sabarimala_ayyappa #sabarimala.jpg',
    '/temple/screencapture-vishwahinduuayyappasevatrust-in-2026-02-24-21_37_41.png',
  ]

  const videos = [
    '/temple/v1.mp4',
    '/temple/v2.mp4',
    '/temple/v3.mp4',
    '/temple/v4.mp4',
    '/temple/v5.mp4',
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(255, 252, 232)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-light tracking-widest text-sm uppercase mb-4" style={{ color: '#d4af37' }}>Sacred Moments</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Photo & Video Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Glimpses of our spiritual celebrations and divine moments</p>
        </div>
      </section>

      {/* Images Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-foreground">Photo Gallery</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img, idx) => (
              <div key={idx} className="group relative h-80 overflow-hidden rounded-lg cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl" onClick={() => setSelectedMedia(img)}>
                <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(255, 252, 232)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-foreground">Video Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, idx) => (
              <div key={idx} className="group relative h-64 overflow-hidden rounded-lg cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl bg-black" onClick={() => setSelectedMedia(video)}>
                <video src={video} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={28} className="text-white ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedMedia(null)}>
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedMedia(null)} className="absolute -top-12 right-0 text-white hover:text-primary transition-colors">
              <X size={32} />
            </button>
            {selectedMedia.endsWith('.mp4') ? (
              <video src={selectedMedia} controls autoPlay className="w-full rounded-lg" />
            ) : (
              <img src={selectedMedia} alt="Selected" className="w-full rounded-lg" />
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
