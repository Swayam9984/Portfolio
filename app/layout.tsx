import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Senior Full-Stack & AI/ML Developer Portfolio',
  description: 'Premium portfolio showcasing full-stack development, AI/ML expertise, and cutting-edge frontend animations',
  keywords: 'Full-Stack Developer, AI/ML Engineer, React, Next.js, Node.js, Python, TensorFlow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: 'rgba(0, 0, 0, 0.8)',
              color: '#fff',
              border: '1px solid rgba(0, 240, 255, 0.3)',
            },
          }}
        />
      </body>
    </html>
  )
}

