'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CornerDownLeft, SquareArrowUpRight } from 'lucide-react';
import { SquareArrowOutUpRight } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectPage() {
  return (
    <>
      <div className="max-w-[1024px] mx-auto p-6 rounded-2xl px-5 md720:px-6 mt-7 md720:mt-20 text-slate-950 font-dmSans">
        {/* Fixed breadcrumb menu */}
        <div className="fixed top-0 left-0 w-full pt-10 pb-8 z-10 text-center bg-color align-middle ">
          <div className="max-w-[1024px] mx-auto px-6">
            <p className="text-lg md720:text-2xl font-medium">
              <Link href="/" className="text-gray-400 hover:text-gray-500"><CornerDownLeft strokeWidth={3} className='inline w-4 h-4 mr-2'/>Ana /</Link> Event Transformation
            </p>
          </div>
        </div>
        
        {/*Título do Projeto*/} 
        <h1 className="mt-12 md720:text-4xl text-2xl font-medium text-center mb-8 md720:mb-14 text-slate-900 leading-snug md720:leading-snug">Transforming Event Engagement with Customizable Solutions</h1>
        
        {/*Cover Image*/} 
        <img
                  src="/bb-event-transformation/images/Cover.png"
                  alt="Cover"
                  className="w-full aspect-[16/10] object-cover mb-8 md720:mb-14 rounded-2xl sm:w-[105%] md:w-[115%] lg:w-[150%]" />


        {/*SEÇÃO INTRODUÇÃO*/} 
        <p className="text-slate-950 mb-4 ">
        Banco do Brasil stands its presence and authority in digital transformation and finnancial innovation by showcasing its products and services in innovation fairs, events and conferences nationwide. However, the high costs associated with externally developed solutions for such events highlighted the need for a more <b>efficient, customizable, and reusable approach to this issue.</b>
        </p>


        {/*SEÇÃO GOALS*/} 
        <section id="goals" className="mb-6 md720:mb-8 mt-10 md720:mt-14">
          <h2 className="text-2xl font-bold mb-6 md720:mb-8">Goals</h2>

          {/*Destaque 01*/} 
          <div className="rounded-2xl p-4 mb-4 border-slate-300 border-[1px]">
            <h4 className='font-bold text-xl pb-4'>
              Engage through gamification
            </h4>
            <p>
            Make participation fun, rewarding and interactive, capturing the attention of attendees
            </p>
          </div>
          {/*Destaque 02*/} 
          <div className="rounded-2xl p-4 mb-4 border-slate-300 border-[1px]">
            <h4 className='font-bold text-xl pb-4'>
              Showcase products
            </h4>
            <p>
            The gamified experiences are a opportunity to showcase different products and services in a way that&apos;s engaging and memorable
            </p>
          </div>
          {/*Destaque 03*/} 
          <div className="rounded-2xl p-4 mb-4 border-slate-300 border-[1px]">
            <h4 className='font-bold text-xl pb-4'>
              Collect leads
            </h4>
            <p>
            Integrate lead collection into the experience to support follow-ups and strenghten client relationships
            </p>
          </div>
          {/*Destaque 04*/} 
          <div className="rounded-2xl p-4 mb-4 border-slate-300 border-[1px]">
            <h4 className='font-bold text-xl pb-4'>
              Adapt to event needs
            </h4>
            <p>
            The solution must be adaptable and customizable to align with the themes and requirements of each event and product showcase
            </p>
          </div>

        </section>

        {/*SEÇÃO AUDIT AND INSIGHTS*/} 
        <section id="audit-and-insights" className="mb-6 md720:mb-8 mt-10 md720:mt-14">
          <h2 className="text-2xl font-bold mb-6 md720:mb-8">
            Audit and Insights
          </h2>
          {/*Conteúdo*/} 
          <p className="text-slate-950 mb-4">
          At conferences, Banco do Brasil usually showcases multiple solutions simultaneously, which demands <b>tailored experiences that complement each other rather than compete. </b>
          </p>
          <p className="text-slate-950 mb-6 md720:mb-8">
          The fact that different products and displays must coexist suggests a need for scalable solutions that can be integrated easily across various product lines and events. These solutions must be able <b>to scale without compromising the quality of individual experiences.</b>
          </p>
          
          {/*Texto Destaque*/} 
          <div className='grid grid-cols-1 md720:grid-cols-3 align-middle  gap-4 mt-10 md720:mt-12 mb-4 w-full items-center'>
            <div className='border border-slate-400 p-4 min-h-20 md720:min-h-28 content-center text-center w-full h-full rounded-xl md720:rounded-2xl py-2 bg-slate-400 bg-opacity-5 font-semibold'>
              <p className="text-lg md720:text-xl text-slate-700">
                Complementary variety
              </p>
            </div>
            <div className='border border-slate-400 p-4 min-h-20 md720:min-h-28 content-center text-center w-full h-full rounded-xl md720:rounded-2xl py-2 bg-slate-400 bg-opacity-5 font-semibold'>
              <p className="text-lg md720:text-xl text-slate-700">
                Engage while showcasing product
              </p>
            </div>
            <div className='border border-slate-400 p-4 min-h-20 md720:min-h-28 content-center text-center w-full h-full rounded-xl md720:rounded-2xl py-2 bg-slate-400 bg-opacity-5 font-semibold'>
              <p className="text-lg md720:text-xl text-slate-700">
                Scalability and Integration
              </p>
            </div>
          </div>
                  


        </section>

        {/*SEÇÃO EXPLORATIONS*/} 
        <section id="explorations" className="mb-6 md720:mb-8 mt-10 md720:mt-14">
          <h2 className="text-2xl font-bold mb-6 md720:mb-8">Explorations</h2>
          <p className="text-slate-950 mb-4">
          Explorations centered on developing a <b>sustainable and engaging system,</b> with a clear understanding of business requirements supported by years of insights gathered from showcasing at fairs and events.
          </p>
          
          <p className="text-slate-950 mb-4">
          The last findings indicate that the <i>current</i> optimal formula for each game concept consists generally in: call to action, product showcase, lead collection, experience setup, user engagement, results and action rewards.
          </p>
          
          
          {/*Imagem - Overview Figma*/}
          <div className="mb-8 grid justify-items-center">
            <img
              src="/bb-event-transformation/images/Explorations - Game Concept.png"
              alt="Overview of initial explorations for an interactive game concept"
              className="w-full object-contain mt-8 rounded-2xl mb-4 w-full big-image" />
            <p className="text-sm text-gray-500 text-center block italic">
            Overview of initial explorations for an interactive game concept
            </p>
          </div>
          <div className='justify-center flex mb-4 md720:mb-10'><hr/></div>
          
          {/*Imagem - Overview Usability Test*/}
          <div className=" mb-8 md720:mb-12 grid justify-items-center">
            <img
              src="/bb-event-transformation/images/Explorations - Usability Test.png"
              alt="Overview of usability test flow for a quiz game concept"
              className="w-full object-contain mt-8 rounded-2xl mb-4 w-full big-image" />
            <p className="text-sm text-gray-500 text-center block italic">
            Overview of usability test flow for a quiz game concept
            </p>
          </div>
          <div className='justify-center flex mb-4 md720:mb-10'><hr/></div>

          

          <p className="text-slate-950 mb-6">
          Each game concept is built on a modular framework, enabling teams to easily adjust visual themes and features to meet specific needs without starting from scratch. This approach prioritizes adaptability, offering a <b>variety of experience possibilities to captivate and engage the audience.</b>
          </p>

        </section>

        {/*SEÇÃO Outcome*/} 
        <section id="outcome" className='mb-6 md720:mb-8 mt-10 md720:mt-14'>
          <h2 className="text-2xl font-bold mb-6 md720:mb-8">Outcome</h2>
          
          {/*Outcome 01*/} 
          <div className="rounded-2xl p-4 mb-4 border-slate-300 border-[1px]">
            <h4 className='text-6xl font-bold pb-2 md720:text-7xl'>
              6
            </h4>
            <h4 className='font-bold text-xl pb-4'>
            Fully customizable gamified experiences
            </h4>
            <p className='text-gray-800'>
            The project delivered a scalable set of 6 customizable solutions, including 3 distinct memory games, a fortune wheel (with and without integrated quiz), a standalone quiz experience and a interactive real-time data collection setup, each adaptable for different initiatives
            </p>
          </div>
          {/*Outcome 02*/} 
          <div className="rounded-2xl p-4 mb-4 border-slate-300 border-[1px]">
            <h4 className='text-6xl font-bold pb-2 md720:text-7xl'>
              71
            </h4>
            <h4 className='font-bold text-xl pb-4'>
            Solutions and 50 events in 2024
            </h4>
            <p className='text-gray-800'>
            In 2024, the project&apos;s delivered solutions were adapted and deployed across 71 initiatives at over 50 innovation and technology events nationwide
            </p>
          </div>
          {/*Outcome 03*/} 
          <div className="rounded-2xl p-4 mb-8 md720:mb-12 border-slate-300 border-[1px]">
            <h4 className='text-6xl font-bold pb-2 md720:text-7xl'>
              1400%
            </h4>
            <h4 className='font-bold text-xl pb-4'>
            Estimated growth in 2025
            </h4>
            <p className='text-gray-800'>
            There are over 1,000 initiatives scheduled to happen in 2025, representing a 1400% increase in adoption of the project&apos;s solution compared to 2024
            </p>
          </div>



        </section>

        {/*SEÇÃO RESULTS*/} 
        <section id="results" className='mb-6 md720:mb-8 mt-10 md720:mt-14'>
          <h2 className="text-2xl font-bold mb-6 md720:mb-8">Results</h2>
          
          {/*Results 01*/} 
          <div className="rounded-2xl p-4 mb-4 bg-gray-950 text-slate-50">
            <h4 className='font-bold text-xl pb-4'>
            Significant Financial Efficiency
            </h4>
            <p className='text-slate-200'>
            By investing in internal development for the <i>Banco do Brasil&apos;s</i> event solutions, there was significant impact over financial efficiency and cost strategy, reducing the bank&apos;s technological cost in 50 events near to <i>zero</i> in 2024
            </p>
          </div>
          {/*Results 02*/} 
          <div className="rounded-2xl p-4 mb-4 bg-gray-950 text-slate-50">
          <h4 className='font-bold text-xl pb-4'>
            Scalable Impact
            </h4>
            <p className='text-slate-200'>
            Through feedback and insights gathered from the events, the project is continuously evolving to anticipate needs and deliver improved solutions, offering highly adaptable and globally scalable experiences for different contexts and needs
            </p>
          </div>
          {/*Results 03*/} 
          <div className="rounded-2xl p-4 mb-4 bg-gray-950 text-slate-50">
          <h4 className='font-bold text-xl pb-4'>
            Ensured Product Identity
            </h4>
            <p className='text-slate-200'>
            Initiatives can require distinct identities, as the visual language aligns to the target audience of the showcased offering. By empowering customization, it was ensured that each product maintained its distinct identity, delivering a consistent brand presence while safeguarding individual product narratives
            </p>
          </div>

          

          <p className="text-slate-950 mt-10 mb-4">
          After successfully delivering scalable engaging solutions within a year, the project is taking action in <b>empowering Banco do Brasil&apos;s teams with full control to configure and customize experiences</b> according to their specific needs, designing a <b>customizable tool to streamline the process and eliminate unnecessary steps in current game build setups.</b>
          </p>


          {/*Imagem - 01*/}
          <div className=" mb-10 md720:mb-12 grid justify-items-center">
            <img
              src="/bb-event-transformation/images/Outcome - 01.png"
              alt="Screen concepts for the customizable setup tool"
              className="w-full object-contain mt-8 rounded-2xl mb-4 big-image" />
            <p className="text-sm text-gray-500 text-center block italic">
                Screen concepts for the customizable setup tool
              </p>
            </div>

          <p className="text-slate-950 mb-8 md720:mb-14">
          By transforming its approach to event engagement, Banco do Brasil has set a new standard for <b>cost-effective, impactful, and scalable solutions that captivate audiences and deliver content.</b> These initiatives support the bank&apos;s commitment to innovation, financial efficiency, and brand presence.
          </p>
          <div className='justify-center flex mb-8 md720:mb-14'><hr/></div>
        </section>
      </div>
      

      {/* Footer */}
      <section className='w-full bg-slate-500 bg-opacity-5 pt-10 md720:pt-12 px-6 lg:px-0 mt-8 md720:mt-10 border-t-[1px]'>
        <div className="max-w-[1024px] mx-auto flex flex-col md720:gap-16">
          
          {/* First Row */}
          <div className='flex flex-col md720:flex-row w-full gap-4 pt-4 md720:pt-8'>
                {/* Left Column (1/3 on large screens) */}
                <div className='w-full md720:w-1/3  rounded-xl'>
                    <a href='/' className='text-lg md720:text-xl font-semibold text-gray-900 hover:text-gray-500 flex items-center'><ArrowLeft className='inline mr-2 w-6 h-6' strokeWidth={2}/>Go Back Home</a>
                </div>

          </div>


          {/* Projects */}
          <div className='flex flex-col md720:flex-row w-full gap-4 pt-8'>
                    {/* Left Column (1/3 on large screens) */}
                    <div className='w-full md720:w-1/3  rounded-xl'>
                        <h3 className='text-2xl md720:text-3xl font-semibold text-gray-900'>See more</h3>
                    </div>

                    {/* Right Column (2/3 on large screens) */}
                      <div className="w-full md720:w-2/3 rounded-xl overflow-y-visible overflow-x-visible scrollbar-hide">
                        <div className="grid grid-cols-1 md720:grid-cols-2 gap-4">

                          {/* Project 1 */}
                          <div className="transition-all duration-[500ms] hover:scale-[1.02] hover:opacity-90 text-slate-800 hover:text-blue-700 shadow-lg border-l-8 border-blue-600 border-opacity-25 bg-color-lightblue rounded-md">
                            <a href="/projects/value-chain">
                              <img
                                src="/value-chain/images/Cover.png"
                                className="w-full rounded-md md720:rounded-xl object-contain hover:opacity-80 transition-all duration-[500ms]"
                                width={80}
                                height={80}
                                alt="Project Thumbnail"
                              />
                              <div className="w-full px-4 h-auto pb-4 text-lg md720:text-xl font-bold leading-snug">
                                Reshaping Data Visualization for Economic Activities
                              </div>
                            </a>
                          </div>

                          {/* Project 2 */}
                          <div className="transition-all duration-[500ms] hover:scale-[1.02] hover:opacity-90 text-slate-800 hover:text-orange-700 shadow-lg border-l-8 border-orange-600 border-opacity-25 bg-color-lightorange rounded-md">
                                <a href="/projects/rbd-21">
                                    <img
                                      src="/rbd-21/images/Cover.png"
                                      className="w-full rounded-md md720:rounded-xl object-contain hover:opacity-80 transition-all duration-[500ms]"
                                      width={80}
                                      height={80}
                                      alt="Project Thumbnail"
                                    />
                                    <div className="w-full px-4 h-auto pb-4 text-lg md720:text-xl font-bold leading-snug">
                                      Mapping Brazilian Design in 2021 
                                    </div>
                                </a>
                            </div>

                          
                        </div>
                      </div>

          </div>



          {/* Let's Connect */}
          <div className='flex flex-col md720:flex-row w-full gap-4 pt-4'>
              <div className='w-full mt-9 md720:mt-0 md720:w-1/3 rounded-xl'>
                  <h3 className='text-xl md720:text-2xl font-semibold md720:font-normal text-gray-900'>Let&apos;s connect</h3>
              </div>

              <div className='w-full md720:w-2/3 rounded-xl flex flex-col'>
                  <a target="_blank" href="https://www.linkedin.com/in/anapaulamoraesdsgn/" className="flex flex-row w-full py-4 md720:py-6 border-t-[1px] justify-between items-center text-gray-900 text-base md720:text-lg leading-relaxed hover:text-gray-500 transition">
                      <span>Linkedin</span>
                      <SquareArrowOutUpRight className="w-5 h-5" />
                  </a>
                  <a target="_blank" href="https://instagram.com/paulamdmp" className="flex flex-row w-full py-4 md720:py-6 border-t-[1px] md720:border-y-[1px] justify-between items-center text-gray-900 text-base md720:text-lg leading-relaxed hover:text-gray-500 transition">
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

        </div>
      </section>

    </>

  )
}