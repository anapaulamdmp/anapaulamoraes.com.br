'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
      <div className='h-screen flex flex-col w-screen'>

        <div className='flex flex-col md720:flex-row flex-1 h-screen relative overflow-auto max-h-screen'>
          <div className='flex flex-1 flex-row md720:flex-col sticky max-w-max pl-20 pr-28 h-auto md720:h-screen top-0 md720:self-center'>
            
            {/* Navigation */}
            {/* Hamburger button for mobile */}
            <div className='md720:hidden sticky top-4 left-4 z-10 w-full'>
              <button
                className='text-xl text-gray-600'
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? 'Close' : 'Menu'}
              </button>
            </div>
            
            {/* Vertical navigation (hidden on mobile) */}
            <nav className={`space-y-4 my-auto ${menuOpen ? 'block' : 'hidden'} md720:block absolute top-0 left-0 w-ful md720:relative md720:flex md720:flex-col md720:w-auto md720:h-auto md720:top-auto`}>                
              <a href='#works' className='flex items-start text-blue-600 font-bold hover:text-blue-700'>
                My work
              </a>

              <a href='' className='flex items-start font-normal text-slate-800 active:text-blue-600 active:font-bold hover:text-blue-700'>
                About me
              </a>

              <a href='https://www.linkedin.com/in/anapaulamoraesdsgn/' target='_blank' className='flex items-start font-normal text-slate-800 active:text-blue-600 active:font-bold hover:text-blue-700'>
                Linkedin
              </a>

              <a href='https://www.instagram.com/paulamdmp/' target='_blank' className='flex items-start font-normal text-slate-800 active:text-blue-600 active:font-bold hover:text-blue-700'>
                Instagram
              </a>
            </nav>
          </div>
          
          {/* Content div */}
          <div className='flex flex-col flex-1 max-w-screen-2xl justify-self-center'>    
            <header className='sticky top-0 bg-slate-50 px-4 flex flex-col pt-32 pb-2 border-b border-slate-200'>
              
              {/* Header */}
              <div className='flex flex-col xl:flex-row w-full xl:max-w-screen-2xl justify-between'>
                  
                  {/* Description */}
                  <div className='flex flex-col max-w-4xl gap-1 order-2 xl:order-1'>
                      <h1 className='text-xl font-medium text-gray-600 mb-6'>Hi, I&apos;m Ana!</h1>
                      <h2 className='font-caladea font-bold text-gray-900'>I&apos;m a designer creating future-oriented products and experiences that drive business impact and transform how people interact with the world.</h2>
                  </div>

                  {/* Profile Picture (Full width on mobile, fixed size on larger screens)*/}
                  <div className='flex w-full xl:w-1/3 justify-start xl:justify-end mb-8 xl:mb-0 order-1 xl:order-2 xl:ml-24'>
                      <div className='flex w-20 h-20 justify-end'>
                        <Image src='./images/Profile_Picture.png' alt='Profile' className='w-20 h-20 rounded-full justify-end' />
                        <div className='flex w-5 h-5 rounded-full border-white border-2 bg-green-500 self-end relative z-50'/>
                      </div>
                  </div>

              </div>

              {/* Project Section Title */}
              <div id='Content_header' className='flex flex-col mt-6'>
                <h2 className='font-medium  text-base mt-16 pb-2 text-slate-700 uppercase tracking-wide'>Check out my work</h2>
              </div>

            </header>

            {/* Portfolio project list */}
            <main id='Content' className='flex-1'>
            <div id='#portfolio' className='flex flex-col px-4'>
              <div className='grid grid-cols-1 p-12 gap-12'>

                <div className='flex flex-row gap-10'>
                  <Image src='/' className='bg-blue-600 w-5/12 h-80 rounded-lg' alt='Project Thumbnail' />

                  <div className='flex flex-col flex-1'>
                    <div className='flex flex-col'>
                      {/* Project Tags */}
                      <nav className='space-x-2 flex flex-row'>
                        <a href='' className='bg-amber-100 text-gray-600 font-bold px-3 py-2 rounded-md hover:bg-amber-200 text-sm'>DataViz</a>
                        <a href='' className='bg-cyan-100 text-gray-600 font-bold px-3 py-2 rounded-md hover:bg-cyan-200 text-sm'>UX Design</a>
                        <a href='' className='bg-lime-100 text-gray-600 font-bold px-3 py-2 rounded-md hover:bg-lime-200 text-sm'>Interaction</a>
                      </nav>
                      {/* Project Title */}
                      <a href='' className='font-bold text-2xl mt-5 text-slate-700 max-w-lg mb-6'>Banco do Brasil's Value Chain: Reshaping Data Visualization and Enchanting Audience</a>
                      <span></span>
                      {/* CTA See Project */}
                      <button className='bg-slate-700 rounded-lg px-6 py-4 inline-block mt-4 hover:bg-slate-900 w-fit text-gray-200'>View project</button>
                    </div>
                  </div>
                </div>

                {/* Outros projetos */}
              </div>
            </div>

            </main>

          </div>
          
        </div>
      </div>
  )
}
