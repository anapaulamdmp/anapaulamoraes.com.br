import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react';
import { Helmet } from 'react-helmet';
import { Manrope}  from 'next/font/google';

const inter = Inter({subsets: ['latin']});
const manrope = Manrope({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Ana Paula Moraes',
  description: 'Experience designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={manrope.className}><body className='bg-slate-50 text-neutral-500'>{children}</body>
    </html>
  )
}
