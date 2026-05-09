import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'] 
});

export const metadata: Metadata = {
  title: 'Vishwa Hindu Ayyappa Seva Trust',
  description: 'Preserving divine wisdom, celebrating spiritual heritage, and serving humanity through sacred traditions.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0a0a0a', flexDirection: 'column', gap: '20px', padding: '20px' }}>
          <h1 style={{ color: '#ff2222', fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', letterSpacing: '0.1em' }}>🚨 WEBSITE IS DOWN 🚨</h1>
          <p style={{ color: '#ffffff', fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px', lineHeight: '1.8' }}>Due to pending payment, this website is currently unavailable.</p>
          <p style={{ color: '#ffcc00', fontSize: '1rem', textAlign: 'center', maxWidth: '600px', lineHeight: '1.8' }}>Please clear the outstanding dues to restore the website immediately.</p>
          <p style={{ color: '#aaaaaa', fontSize: '0.9rem', textAlign: 'center' }}>For support, contact: <span style={{ color: '#ffcc00' }}>peakinfosolution.com</span></p>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
