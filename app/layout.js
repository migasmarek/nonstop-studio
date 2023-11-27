import { inter } from './ui/fonts'
import './globals.css'

export const metadata = {
  title: 'Nonstop Studio',
  description: 'International Design & Development Collective',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}