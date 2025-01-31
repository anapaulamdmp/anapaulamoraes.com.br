import './globals.css'
import {Caladea, DM_Serif_Text, DM_Sans, Frank_Ruhl_Libre, Libre_Baskerville, Manrope, Shrikhand} from 'next/font/google'
import React, {PropsWithChildren} from 'react';

//
// const inter = Inter({subsets: ['latin']});
const manrope = Manrope({subsets: ['latin']});

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'], // Choose appropriate subsets for your project
  weight: ['400', '700'], // Optional: Specify font weights (400 for normal, 700 for bold)
  variable: '--font-libre-baskerville',
  display: "swap"
});
const dmSerifText = DM_Serif_Text({
  subsets: ['latin'], // Add the appropriate subsets for your language
  weight: '400',      // DM Serif Text typically only has regular (400) weight
  variable: '--font-dm-serif-text',
  display: "swap"
});
const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ['latin'], // Choose subsets based on your language
  weight: ['400', '500', '600', '700', '800'], // Optional: Specify weights (e.g., 400 for normal, 700 for bold)
  variable: '--font-frank-ruhl-libre',
  display: "swap"
});
const caladea = Caladea({
  subsets: ['latin'],
  weight: ['400', '700'], // You can specify the weights you need
  variable: '--font-caladea',
  display: "swap"
});
const shrikhand = Shrikhand({
  subsets: ['latin'],
  weight: ['400'], // You can specify weights if needed, otherwise it defaults to 400
  variable: '--font-shrikhand',
  display: "swap"
});
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // You can specify weights if needed, otherwise it defaults to 400
  variable: '--font-shrikhand',
  display: "swap"
});


export const metadata = {
  title: 'Ana Paula Moraes',
  description: 'Experience designer',
};

export default async function Layout({children}: Readonly<PropsWithChildren>) {
  return (
    <html lang="en"
          className={`${manrope.className} ${dmSans.className} ${libreBaskerville.variable} ${dmSerifText.variable} ${frankRuhlLibre.variable} ${caladea.variable}`}
    >
    <body className='bg-slate-50 text-neutral-500'>
    {children}
    </body>
    </html>
  )
}
