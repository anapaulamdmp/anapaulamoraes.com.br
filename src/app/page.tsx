'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

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
          <header className='sticky top-0 bg-slate-50 px-6 flex flex-col pt-32'>
              
              {/* Header */}
              <div className='flex flex-col xl:flex-row w-full xl:max-w-[1024px] justify-between align-middle'>
                  
                  {/* Description */}
                  <div className='flex flex-col max-w-[920px] order-2 xl:order-1'>
                      <h1 className='text-2xl font-medium text-gray-900 mb-4 xl:mb-16'>Hi, my name is Ana! &#x1F44B;</h1>
                      <h2 className={`font-dmSans leading-snug md720:leading-snug font-bold text-gray-900 md720:text-4xl text-3xl transition-all duration-[800ms] ${isScrolled ? 'text-sm' : ''}`}>
                        I&apos;m a designer creating future-oriented products and experiences that drive business impact and transform how people interact with the world.
                      </h2>
                  </div>

                  {/* Profile Picture (Full width on mobile, fixed size on larger screens)*/}
                  <div className='flex w-full xl:w-1/3  justify-start xl:justify-end mb-8 xl:mb-0 order-1 xl:order-2 xl:ml-24'>
                      <div className='flex w-20 h-20 justify-end'>
                      <div className='flex w-5 h-5 rounded-full border-white border-2 bg-green-500 self-end relative z-50'/>
                        <Image src='/images/Profile_Picture.png' alt='Profile' width={80} height={80} className='w-20 h-20 rounded-full justify-end' />
                        
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
                  <div className='flex flex-col bg-slate-950 rounded-2xl hover:bg-blue-950 transition-all duration-[500ms]  text-lg lg:text-3xl text-gray-100 hover:text-white hover:scale-[1.02] hover:shadow-2xl'>
                    <a href='/projects/value-chain'>
                      <Image src='/value-chain/images/Cover.png' className='w-full rounded-t-2xl aspect-[24/9] object-cover hover:opacity-80 transition-all duration-[500ms]' width={80} height={80} alt='Project Thumbnail' />
                    </a>

                    <div className='flex flex-col flex-1 w-full px-10 py-8 rounded-b-2xl'>
                        {/* Title and Button Container */}
                        <div className='grid grid-cols-3 items-center align-middle h-full'>
                          {/* Project Title (Spanning 2 columns) */}
                          <a
                            href='/projects/value-chain'
                            className='font-normal w-full max-w-[695px] col-span-2 transition-all duration-[500ms]'
                          >
                            Banco do Brasil&apos;s Value Chain: Reshaping Data Visualization and Enchanting Audience
                          </a>

                          {/* CTA Button (1 column) */}
                          <button className='w-full justify-self-end text-right font-medium uppercase text-xs md720:text-base text-blue-300 hover:text-blue-500 transition-all duration-[400ms]'>
                            Go to project →
                          </button>
                        </div>
                      </div>
          
                  </div>

                  {/* Project 02 */}
                  <div className='flex flex-col bg-slate-950 rounded-2xl hover:bg-blue-950 transition-all duration-[500ms]  text-lg lg:text-3xl text-gray-100 hover:text-white hover:scale-[1.02] hover:shadow-2xl'>
                    <a href='/projects/bb-event-transformation'>
                      <Image src='/value-chain/images/Cover.png' className='w-full rounded-t-2xl aspect-[24/9] object-cover hover:opacity-80 transition-all duration-[500ms]' width={80} height={80} alt='Project Thumbnail' />
                    </a>

                    <div className='flex flex-col flex-1 w-full px-10 py-8 rounded-b-2xl'>
                        {/* Title and Button Container */}
                        <div className='grid grid-cols-3 gap-4 items-center align-middle h-full'>
                          {/* Project Title (Spanning 2 columns) */}
                          <a
                            href='/projects/value-chain'
                            className='font-normal w-full max-w-[695px] col-span-2 transition-all duration-[500ms]'
                          >
                            Transforming Event Engagement with Customizable Solutions
                          </a>

                          {/* CTA Button (1 column) */}
                          <button className='w-full justify-self-end text-right font-medium uppercase text-xs md720:text-base text-blue-300 hover:text-blue-500 transition-all duration-[400ms]'>
                            Go to project →
                          </button>
                        </div>
                      </div>
          
                  </div>

                  {/* Project 03 */}
                  <div className='flex flex-col bg-slate-950 rounded-2xl hover:bg-blue-950 transition-all duration-[500ms]  text-lg lg:text-3xl text-gray-100 hover:text-white hover:scale-[1.02] hover:shadow-2xl'>
                    <a href='/projects/bb-event-transformation'>
                      <Image src='/value-chain/images/Cover.png' className='w-full rounded-t-2xl aspect-[24/9] object-cover hover:opacity-80 transition-all duration-[500ms]' width={80} height={80} alt='Project Thumbnail' />
                    </a>

                    <div className='flex flex-col flex-1 w-full px-10 py-8 rounded-b-2xl'>
                        {/* Title and Button Container */}
                        <div className='grid grid-cols-3 gap-4 items-center align-middle h-full'>
                          {/* Project Title (Spanning 2 columns) */}
                          <a
                            href='/projects/value-chain'
                            className='font-normal w-full max-w-[695px] col-span-2 transition-all duration-[500ms]'
                          >
                            Transforming Event Engagement with Customizable Solutions
                          </a>

                          {/* CTA Button (1 column) */}
                          <button className='w-full justify-self-end text-right font-medium uppercase text-xs md720:text-base text-blue-300 hover:text-blue-500 transition-all duration-[400ms]'>
                            Go to project →
                          </button>
                        </div>
                      </div>
          
                  </div>

                  {/* Additional projects */}

                </div>
              </div>
            </main>

           {/* New Two-Row Section with Columns */}
            <section className='flex flex-col w-full px-6 md720:gap-16 mt-16 md720:mt-32 max-920 md720:max-w-[1024px] md720:px-0'>

                {/* First Row */}
                <div className='flex flex-col md720:flex-row w-full gap-4 pt-8 border-t-[1px]'>
                    {/* Left Column (1/3 on large screens) */}
                    <div className='w-full md720:w-1/3  rounded-xl'>
                        <h3 className='text-3xl font-semibold text-gray-900'>Nice to meet you.</h3>
                    </div>

                    {/* Right Column (2/3 on large screens) */}
                    <div className='w-full md720:w-2/3 rounded-xl'>
                        <p className='text-gray-900 text-2xl leading-relaxed'>
                            I’m Ana Paula, a brazilian designer located in 📌 Curitiba - PR. I’m continuously looking for fun stuff to explore and work on, feel free to hit me up anytime.
                        </p>
                    </div>
                </div>

                {/* Let's Connect */}
                <div className='flex flex-col md720:flex-row w-full gap-4 pt-4'>
                    {/* Left Column (1/3 on large screens) */}
                    <div className='w-full mt-9 md720:mt-0 md720:w-1/3 rounded-xl'>
                        <h3 className='text-2xl font-semibold md720:font-normal text-gray-900'>Let's connect</h3>
                    </div>

                    {/* Right Column (2/3 on large screens) */}
                    <div className='w-full md720:w-2/3 rounded-xl flex flex-col'>
                        <div className='flex flex-row w-full py-6 border-t-[1px]'>
                          <a target='_blank' href='https://www.linkedin.com/in/anapaulamoraesdsgn/' className='text-gray-900 text-lg leading-relaxed'>
                              Linkedin
                          </a>
                        </div>
                        <div className='flex flex-row w-full py-6 border-t-[1px] md720:border-y-[1px]'>
                          <a target='_blank' href='https://instagram.com/paulamdmp' className='text-gray-900 text-lg leading-relaxed'>
                              Instagram
                          </a>
                        </div>
                        
                    </div>

                </div>


                {/* Copyrights */}
                <div className='flex flex-col md720:flex-row w-full gap-4 pt-4 border-t-[1px] mt-10'>
                    <div className='w-full rounded-xl pt-8 pb-12'>
                        <p className='text-sm font-semibold text-gray-800'>© 2025 All rights reserved</p>
                    </div>
                </div>

            </section>

          </div>
          
        </div>
      </div>
  )
}
