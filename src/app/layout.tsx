import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react';
import { Manrope}  from 'next/font/google';
import { Libre_Baskerville } from 'next/font/google';
import { DM_Serif_Text } from 'next/font/google';
import { Frank_Ruhl_Libre } from 'next/font/google';
import { Caladea } from 'next/font/google';
import { Shrikhand } from 'next/font/google';


const inter = Inter({subsets: ['latin']});
const manrope = Manrope({subsets: ['latin']});

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'], // Choose appropriate subsets for your project
  weight: ['400', '700'], // Optional: Specify font weights (400 for normal, 700 for bold)
  display: "swap"
});
const dmSerifText = DM_Serif_Text({
  subsets: ['latin'], // Add the appropriate subsets for your language
  weight: '400',      // DM Serif Text typically only has regular (400) weight
  display: "swap"
});
const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ['latin'], // Choose subsets based on your language
  weight: ['400', '500', '600', '700', '800'], // Optional: Specify weights (e.g., 400 for normal, 700 for bold)
  display: "swap"
});
const caladea = Caladea({
  subsets: ['latin'],
  weight: ['400', '700'], // You can specify the weights you need
  display: "swap"
});
const shrikhand = Shrikhand({
  subsets: ['latin'],
  weight: ['400'], // You can specify weights if needed, otherwise it defaults to 400
  display: "swap"
});


export const metadata = {
  title: 'Ana Paula Moraes',
  description: 'Experience designer',
};

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
