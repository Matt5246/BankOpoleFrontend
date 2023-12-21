import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Breadcrumb, Layout, Menu } from 'antd';
import { Header, Content, Footer } from 'antd/es/layout/layout';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home screen',
  description: 'Generated by create next app',
}
const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: '#f5f5f5' }}>
        {children}
      </body>
    </html >
  )
}
