'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { SquareArrowOutUpRight } from 'lucide-react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll state
  useEffect(() => {
    console.log("useEffect triggered");
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log('Current scroll position:', scrollY);  // Log scroll position to check if it's firing correctly
      setIsScrolled(scrollY > 0);
    }

    // Attach event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Run once to set the initial state
    handleScroll();  // Initial check if the page is already scrolled

    // Cleanup the event listener when the component is unmounted
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className='flex flex-col w-screen '>

      <div className='flex flex-col flex-1 relative overflow-auto items-center'>
          
          {/* Content div */}
          <div className='flex flex-col items-center flex-1 max-w-screen-2xl justify-self-center'>    
          <header className='sticky top-0 bg-slate-50 px-6 flex flex-col pt-16 md720:pt-32'>
              
              {/* Header */}
              <div className='flex flex-col xl:flex-row w-full xl:max-w-[1024px] justify-between align-middle'>
                  
                  {/* Description */}
                  <div className='flex flex-col max-w-[920px] order-2 xl:order-1'>
                      <h1 className='text-xl md729:text-2xl font-medium text-gray-800 mb-4 xl:mb-10'>Hello! &#x1F44B;</h1>
                      <h2 className={`font-dmSans leading-snug md720:leading-snug font-normal text-slate-500 md720:text-4xl text-2xl transition-all duration-[800ms]`}>
                        <span className='text-slate-900 font-bold'>I&apos;m Ana</span> — a designer creating future-oriented experiences that drive business impact and transform how people interact with the world.
                      </h2>
                  </div>

                  {/* Profile Picture (Full width on mobile, fixed size on larger screens)*/}
                  <div className='flex w-full xl:w-1/3  justify-start xl:justify-end mb-8 xl:mb-0 order-1 xl:order-2 xl:ml-24'>
                      <div className='flex w-24 h-24 justify-end'>
                      {/*<div className='flex w-5 h-5 rounded-full border-white border-2 bg-green-500 self-end relative z-50'/>*/}
                        <Image src='/images/Profile_Picture.png' alt='Profile' width={80} height={80} className='w-24 h-24 rounded-full justify-end shadow-lg' />
                        
                      </div>
                  </div>

              </div>

              {/* Project Section Title
              <div id='Content_header' className='flex flex-col mt-6'>
                <h2 className='font-medium  text-sm mt-16 pb-2 text-slate-500 uppercase tracking-widest'>Check out my work</h2>
              </div>*/}

            </header>

            {/* Project listing */}
            <main id="Content" className="flex-1 mt-10 md720:mt-32 px-6">
              <div id='#portfolio' className='flex max-920 md:max-w-[1024px]'>
                <div className='grid grid-rows-1 gap-8 md720:gap-16'>

                  {/* Project 01 */}
                  <div className='flex flex-col transition-all duration-[500ms]  text-xl md720:text-2xl text-gray-800  hover:text-blue-700 hover:scale-[1.02]'>
                    <div className='flex bg-color-lightblue rounded-md md720:rounded-xl'>
                      <a href='/projects/value-chain'>
                        <Image src='/value-chain/images/Cover.png' className='hidden md720:block w-full rounded-2xl aspect-[16/10] object-cover hover:opacity-80 transition-all duration-[500ms]' width={80} height={80} alt='Project Thumbnail' />
                      </a>
                      <a href='/projects/value-chain'>
                        <Image src='/value-chain/images/Cover.png' className='md720:hidden w-full rounded-lg aspect-[4/3] object-cover hover:opacity-80 transition-all duration-[500ms]' width={80} height={80} alt='Project Thumbnail' />
                      </a>
                    </div>

                    <a
                      href='/projects/value-chain'
                      className='flex flex-col flex-1 w-full py-4 md720:py-8 rounded-b-2xl font-normal transition-all duration-[500ms]'
                    >
                      {/* Title and Button Container */}
                      <div className='grid gap-1 md720:gap-0 grid-cols-1 md720:grid-cols-3 items-center align-middle h-full font-semibold'>
                            {/* Project Title (Spanning 2 columns) */}
                              <span className='text-sm text-blue-700'>2024</span>
                              <span className='max-w-[695px] col-span-2 md720:col-span-3 '>Reshaping Data Visualization and Enchanting Audience</span>
                      

                      </div>
                    </a>
          
                  </div>
                  {/* Project 02 */}
                  <div className='flex flex-col transition-all duration-[500ms]  text-xl md720:text-2xl text-gray-800  hover:text-blue-700 hover:scale-[1.02]'>
                    <div className='flex bg-color-lightgreen rounded-md md720:rounded-xl'>
                      <a href='/projects/bb-event-transformation'>
                        <Image src='/bb-event-transformation/images/Cover.png' className='hidden md720:block w-full rounded-2xl aspect-[16/10] object-cover hover:opacity-80 transition-all duration-[500ms]' width={80} height={80} alt='Project Thumbnail' />
                      </a>
                      <a href='/projects/bb-event-transformation'>
                        <Image src='/bb-event-transformation/images/Cover.png' className='md720:hidden w-full rounded-lg aspect-[4/3] object-cover hover:opacity-80 transition-all duration-[500ms]' width={80} height={80} alt='Project Thumbnail' />
                      </a>
                    </div>

                    <a
                      href='/projects/bb-event-transformation'
                      className='flex flex-col flex-1 w-full py-4 md720:py-8 rounded-b-2xl font-normal transition-all duration-[500ms]'
                    >
                      {/* Title and Button Container */}
                      <div className='grid gap-1 md720:gap-0 grid-cols-1 md720:grid-cols-3 items-center align-middle h-full font-semibold'>
                            {/* Project Title (Spanning 2 columns) */}
                              <span className='text-sm text-blue-700'>2024</span>
                              <span className='max-w-[695px] col-span-2 md720:col-span-3 '>Transforming Event Engagement with Customizable Solutions</span>
                      

                      </div>
                    </a>
          
                  </div>
                  {/* Project 03 */}
                  <div className='flex flex-col transition-all duration-[500ms]  text-xl md720:text-2xl text-gray-800  hover:text-blue-700 hover:scale-[1.02]'>
                    <div className='flex bg-color-lightorange rounded-md md720:rounded-xl'>
                      <a href='/projects/rbd-21'>
                        <Image src='/rbd-21/images/Cover.png' className='hidden md720:block w-full rounded-2xl aspect-[16/10] object-cover hover:opacity-80 transition-all duration-[500ms]' width={80} height={80} alt='Project Thumbnail' />
                      </a>
                      <a href='/projects/rbd-21'>
                        <Image src='/rbd-21/images/Cover.png' className='md720:hidden w-full rounded-lg aspect-[4/3] object-cover hover:opacity-80 transition-all duration-[500ms]' width={80} height={80} alt='Project Thumbnail' />
                      </a>
                    </div>

                    <a
                      href='/projects/rbd-21'
                      className='flex flex-col flex-1 w-full py-4 md720:py-8 rounded-b-2xl font-normal transition-all duration-[500ms]'
                    >
                      {/* Title and Button Container */}
                      <div className='grid gap-1 md720:gap-0 grid-cols-1 md720:grid-cols-3 items-center align-middle h-full font-semibold'>
                            {/* Project Title (Spanning 2 columns) */}
                              <span className='text-sm text-blue-700'>2023</span>
                              <span className='max-w-[695px] col-span-2 md720:col-span-3 '>Mapping Brazilian Design in 2021</span>
                      

                      </div>
                    </a>
          
                  </div>


                  {/* Additional projects */}

                </div>
              </div>
            </main>

           {/* New Two-Row Section with Columns */}
            <section className='flex flex-col w-full px-6 md720:gap-16 mt-16 md720:mt-36 max-920 md720:max-w-[1024px] lg:px-0'>

                {/* First Row */}
                <div className='flex flex-col md720:flex-row w-full gap-4 pt-8 border-t-[1px]'>
                    {/* Left Column (1/3 on large screens) */}
                    <div className='w-full md720:w-1/3  rounded-xl'>
                        <h3 className='text-2xl md720:text-3xl font-semibold text-gray-900'>Nice to meet you.</h3>
                    </div>

                    {/* Right Column (2/3 on large screens) */}
                    <div className='w-full md720:w-2/3 rounded-xl'>
                        <p className='text-gray-900 text-lg md720:text-2xl leading-relaxed'>
                            I&apos;m a brazilian designer based in 📌 Curitiba - PR. I&apos;m continuously looking for cool opportunities to explore and work on. If you feel like we should work together, send me a message!
                        </p>
                    </div>
                </div>

                {/* Let's Connect */}
                <div className='flex flex-col md720:flex-row w-full gap-4 pt-4'>
                    {/* Left Column (1/3 on large screens) */}
                    <div className='w-full mt-9 md720:mt-0 md720:w-1/3 rounded-xl'>
                        <h3 className='text-xl md720:text-2xl font-semibold md720:font-normal text-gray-900'>Let&apos;s connect</h3>
                    </div>

                    {/* Right Column (2/3 on large screens) */}
                    <div className='w-full md720:w-2/3 rounded-xl flex flex-col'>
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/anapaulamoraesdsgn/"
                          className="flex flex-row w-full py-4 md720:py-6 border-t-[1px] justify-between items-center text-gray-900 text-base md720:text-lg leading-relaxed hover:text-gray-500 transition"
                        >
                          <span>Linkedin</span>
                          <SquareArrowOutUpRight className="w-5 h-5" />
                        </a>
                        <a
                          target="_blank"
                          href="https://instagram.com/paulamdmp"
                          className="flex flex-row w-full py-4 md720:py-6 border-t-[1px] md720:border-y-[1px] justify-between items-center text-gray-900 text-base md720:text-lg leading-relaxed hover:text-gray-500 transition"
                        >
                          <span>Instagram</span>
                          <SquareArrowOutUpRight className="w-5 h-5" />
                        </a>
                        
                    </div>

                </div>


                {/* Copyrights */}
                <div className='flex flex-col md720:flex-row w-full gap-4 pt-4 border-t-[1px] mt-0 md720:mt-10'>
                    <div className='w-full rounded-xl pt-4 md720:pt-8 pb-12'>
                        <p className='text-sm font-semibold text-gray-800'>© 2025 All rights reserved</p>
                    </div>
                </div>

            </section>

          </div>
          
        </div>
      </div>
  )
}
