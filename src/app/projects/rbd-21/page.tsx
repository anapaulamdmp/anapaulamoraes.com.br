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
              <Link href="/" className="text-gray-400 hover:text-gray-500"><CornerDownLeft strokeWidth={3} className='inline w-4 h-4 mr-2'/>Ana /</Link> Recorte Brasil Design 21
            </p>
          </div>
        </div>
        
        {/*Título do Projeto*/} 
        <h1 className="mt-12 md720:text-4xl text-2xl font-medium text-center mb-8 md720:mb-14 text-slate-900 leading-snug md720:leading-snug">Mapping Brazilian Design in 2021</h1>
        
        {/*Cover Image*/} 
        <img
                  src="/rbd-21/images/Cover.png"
                  alt="Cover"
                  className="w-full aspect-[16/10] object-cover mb-8 md720:mb-14 rounded-2xl sm:w-[105%] md:w-[115%] lg:w-[150%]" />


        {/*SEÇÃO INTRODUÇÃO*/} 
        <p className="text-slate-950 mb-4 ">
        In 2021, I partnered with a friend to explore design maturity and apply it to a volunteering project we were working on. As we dug deeper, we realized <b>there were little to no official records or consolidated data about Brazilian design from 2014 onward.</b> Our focus then shifted, and the project became an initiative to <b>map and expand the understanding of Brazil&apos;s design landscape through data collection and visualization.</b>
        </p>
        <p className="text-slate-950 mb-4 ">
        This project took us three years to complete and reflects both the importance and the effort involved in conducting independent research and fostering discussion.
        </p>


        {/*SEÇÃO GOALS*/} 
        <section id="goals" className="mb-6 md720:mb-8 mt-10 md720:mt-14">
          <h2 className="text-2xl font-bold mb-6 md720:mb-8">Goals</h2>

          {/*Destaque 01*/} 
          <div className="rounded-2xl p-4 mb-4 border-slate-300 border-[1px]">
            <h4 className='font-bold text-xl pb-4'>
              Broad exploration of theme
            </h4>
            <p>
            Map the end-to-end design landscape in Brazil, covering <b>education, professional market, scientific publishing, and the people who shape Brazilian design</b>
            </p>
          </div>
          {/*Destaque 02*/} 
          <div className="rounded-2xl p-4 mb-4 border-slate-300 border-[1px]">
            <h4 className='font-bold text-xl pb-4'>
              Collect data on Brazilian Design
            </h4>
            <p>
              Gather and organize information about design in Brazil up to 2021 combining manual and automated methods, including desk researches, online survey and web-scraping of public databases
            </p>
          </div>
          {/*Destaque 03*/} 
          <div className="rounded-2xl p-4 mb-4 border-slate-300 border-[1px]">
            <h4 className='font-bold text-xl pb-4'>
              Generate insights, not images
            </h4>
            <p>
              Turn complex data into meaningful visual information, highlighting points to encourage discussion and critical reflection
            </p>
          </div>
          {/*Destaque 04*/} 
          <div className="rounded-2xl p-4 mb-4 border-slate-300 border-[1px]">
            <h4 className='font-bold text-xl pb-4'>
              Make the data accessible
            </h4>
            <p>
            Publish and make the data openly available for anyone to explore and use
            </p>
          </div>


      

        </section>

        {/*SEÇÃO Data Collection */} 
        <section id="data-collection" className="mb-6 md720:mb-8 mt-10 md720:mt-14">
          <h2 className="text-2xl font-bold mb-6 md720:mb-8">
            Data collection
          </h2>
          {/*Conteúdo*/} 
          <p className="text-slate-950 mb-4">
          The data collection methods for this project varied depending on the subject being explored. Desk research and web scraping were used to gather quantitative information, while a survey was designed to collect both quantitative and qualitative insights from people.
          </p>
          <p className="text-slate-950 mb-6">
          The online survey was carefully structured to cover the desired areas, and its release was strategically planned to ensure it would <b>reach a broader audience across a continental country.</b>
          </p>

          {/*Survey Overview*/} 
          <div className="mb-8 md720:mb-12 grid justify-items-center">
            {/*Imagem - Dashboard original*/} 
              <img
                src="/rbd-21/images/Data Collection - Online Survey Flow Diagram.png"
                alt="Online Survey Flow Diagram"
                className="object-contain mt-6 md720:mt-6 rounded-2xl mb-2 w-full big-image" />
         
            <p className="text-sm text-gray-500 text-center mt-2 block italic mb-2 md720:mb-8">
              Online Survey Flow Diagram
            </p>
          </div>

          <p className="text-slate-950 mb-6">
          The combined efforts of desk research, web scraping and online survey resulted in <b>over 5,500 lines of structured and unstructured data collected.</b>
          </p>
          {/*Overview*/} 
          <div className="mb-4 md720:mb-6 grid justify-items-center">
            {/*Imagem - Dashboard original*/} 
              {/*<img
                src="/rbd-21/images/Data Collection - Table.png"
                alt="Data collecting table overview"
                className="object-contain mt-6 md720:mt-6 rounded-2xl mb-2 w-full big-image" />*/}
              <img
                src="/rbd-21/images/Data Collection - Overview.gif"
                alt="Video snippet of data collecting overview"
                className="object-contain mt-6 md720:mt-6 rounded-2xl mb-4 w-full big-image" />
         
            <p className="text-sm text-gray-500 text-center mt-2 block italic mb-2 md720:mb-8">
                Part of data collected in the project
            </p>
          </div>
          <div className='justify-center flex mb-4 md720:mb-8'><hr/></div>

                  


        </section>

        {/*SEÇÃO FINDINGS*/} 
        <section id="findings" className="mb-6 md720:mb-8 mt-10 md720:mt-14">
          <h2 className="text-2xl font-bold mb-6 md720:mb-8">Findings</h2>
          
          {/*Findings 01 */} 
          <div className="rounded-2xl p-4 mb-4 border-slate-300 border-[1px]">
            <h4 className='text-6xl font-bold pb-2 md720:text-7xl'>
              406
            </h4>
            <h4 className='font-bold text-xl pb-4'>
              Participants in survey
            </h4>
            <p>
              406 Individuals participated in the conducted survey aiming to understand who are and the people who recognize themselves as brazilian designers
            </p>
          </div>
          {/*Findings 02 */} 
          <div className="rounded-2xl p-4 mb-4 border-slate-300 border-[1px]">
            <h4 className='text-6xl font-bold pb-2 md720:text-7xl'>
              114
            </h4>
            <h4 className='font-bold text-xl pb-4'>
              Public Universities Investigated
            </h4>
            <p>
              Within the scope of Brazilian Public Universities, a desk research was conducted on all 114 institutions, individually looking for the criteria of having or not design-related courses
            </p>
          </div>
          {/*Findings 03 */} 
          <div className="rounded-2xl p-4 mb-4 border-slate-300 border-[1px]">
            <h4 className='text-6xl font-bold pb-2 md720:text-7xl'>
              5K+
            </h4>
            <h4 className='font-bold text-xl pb-4'>
              Articles collected
            </h4>
            <p>
              Through web scapping, over 5,000 articles were gathered from Blucher Proceedings in an attempt to understand trends in brazilian design knowledge generation
            </p>
          </div>

        </section>

        {/*SEÇÃO EXPLORATIONS*/} 
        <section id="explorations" className="mb-6 md720:mb-8 mt-10 md720:mt-14">
          <h2 className="text-2xl font-bold mb-6 md720:mb-8">Explorations</h2>
          <p className="text-slate-950 mb-6">
          After the data collection phase, a process of <b>compiling and processing the information</b> began, including the search for tools to automate these steps. Simultaneously, the best approaches for handling various data complexities were analyzed to ensure standardization of data formats.
          </p>
          
          <p className="text-slate-950 mb-6">
          As part of the automation strategy, <b>the data was migrated from spreadsheets to the MixPanel platform.</b> Events and properties were customized to reflect the specific demands of the project, facilitating collaborative analysis and actionable insights.
          </p>
          
          
          {/*Imagem - MixPanel*/}
          <div className=" mb-8 md720:mb-12 grid justify-items-center">
            <img
              src="/rbd-21/images/Explorations - MixPanel.png"
              alt="Data uploaded into MixPanel for Dashboard visualization"
              className="object-contain mt-8 rounded-2xl mb-4 w-full big-image" />
            <p className="text-sm text-gray-500 text-center block italic">
            Data uploaded into MixPanel for Dashboard visualization
            </p>
          </div>
          <div className='justify-center flex mb-4 md720:mb-10'><hr/></div>
          
          

          <p className="text-slate-950 mb-6">
          Creating the visual identity was also a crucial part of the journey, willing to <b>capture Brazil&apos;s diversity while making the project easy to recognize.</b> The goal was to create a consistent look across all communications and branding, establishing a sense of authority and showing the project as something <b>serious yet exciting.</b>
          </p>

          {/*Imagem - Explorações*/}
          <div className=" mb-8 md720:mb-12 grid justify-items-center">
            <img
              src="/rbd-21/images/Explorations - Logo Crafting.png"
              alt="Refinement resume of the visual identity crafting"
              className="object-contain mt-8 rounded-2xl mb-4 w-full big-image" />
            <p className="text-sm text-gray-500 text-center block italic">
              Refinement resume of the visual identity crafting
            </p>
          </div>
          <div className='justify-center flex mb-4 md720:mb-10'><hr/></div>

        </section>

        {/*SEÇÃO Outcome*/} 
        <section id="outcome" className='mb-6 md720:mb-8 mt-10 md720:mt-14'>
          <h2 className="text-2xl font-bold mb-6 md720:mb-8">Outcome</h2>
          <p className="text-slate-950 mb-4">
            Over three years of work, from 2021 to 2023, the process was long and challenging, but was strengthened by the support of those who believed the vision and purpose behind it. The outcome was a bold project that showcased <b>the importance of generating data to foster meaningful discussions and inspire action where change is needed. </b>
          </p>

          {/*Video - Outcome*/}
          <div className=" mb-4 grid justify-items-center">
            <video
              src="/rbd-21/images/Outcome - RBD21.mp4"
              className="object-contain mt-8 rounded-2xl mb-4 w-full big-image"
              controls
            />
          </div>
        


        </section>

        {/*SEÇÃO RESULTS*/} 
        <section id="results" className='mb-6 md720:mb-8 mt-10 md720:mt-14'>
          <h2 className="text-2xl font-bold mb-6 md720:mb-8">Results</h2>
          

          {/*Results 01 */} 
          <div className="rounded-2xl p-4 mb-4 bg-gray-950 text-slate-50">
            <h4 className='text-6xl font-bold pb-2 md720:text-7xl'>
              30+
            </h4>
            <h4 className='font-bold text-xl pb-4'>
              Data visualization charts
            </h4>
            <p className='text-slate-200'>
            Over 5,000 lines of data were summarized and translated into 31 data visualization diagrams, organized by major themes of interest. This approach simplifies the understanding and facilitates the extraction of insights and discussions about brazilian design.
            </p>
          </div>
          {/*Results 02 */} 
          <div className="rounded-2xl p-4 mb-4 bg-gray-950 text-slate-50">
            <h4 className='font-bold text-xl pb-4'>
              Free, responsive website
            </h4>
            <p className='text-slate-200'>
            The insights and findings of the project were made freely available on a responsive website to ensure that the goal of having widespread access to the data and easy sharing was met. This way, it could be opened by anyone, anywhere.
            </p>
          </div>
          {/*Results 03 */} 
          <div className="rounded-2xl p-4 mb-4 bg-gray-950 text-slate-50">
            <h4 className='font-bold text-xl pb-4'>
              Strong, collaborative results
            </h4>
            <p className='text-slate-200'>
            This project came to life thanks to the collaboration of many people: those who helped develop tools to curate data, key contacts who helped spread the word and provided brand support, and everyone who participated in and shared the survey. Their involvement was very significative to the project and reflects the rich and interconnected nature of an identity shaped by many.
            </p>
          </div>
          


          {/*Imagem Resultado - 1*/}
          <div className='grid md720:grid-cols-1 gap-8 my-8 md720:my-12'>
              <div className="w-full justify-items-center">
                <img
                  src="/rbd-21/images/Results - RBD21.gif"
                  alt="Vignette"
                  className="w-full object-contain rounded-2xl big-image" />
              </div>
              {/*Video - Outcome*/}
              <div className="grid justify-items-center">
                <video
                  src="/rbd-21/images/Results - Demographic Insight.mp4"
                  className="object-contain rounded-2xl w-full big-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              {/*Video - Outcome*/}
              <div className="grid justify-items-center">
                <video
                  src="/rbd-21/images/Results - Professional Acting.mp4"
                  className="object-contain rounded-2xl w-full big-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              {/*Video - Outcome*/}
              {/*<div className="grid justify-items-center">
                <video
                  src="/rbd-21/images/Results - Academic Production.mp4"
                  className="object-contain rounded-2xl w-full big-image"
                  autoPlay
                  loop
                  muted
                />
              </div>*/}
              {/*Imagem Resultado - 2*/}
              {/*<div className=" w-full justify-items-center">
                <img
                  src="/rbd-21/images/Results - 01.png"
                  alt="Results - 01"
                  className="w-full object-contain rounded-2xl big-image" />
              </div>*/}

              {/*Imagem Resultado - 3*/}
              {/*<div className=" grid justify-items-center">
                <img
                  src="/rbd-21/images/Results - 02.png"
                  alt="Results - 02"
                  className="w-full object-contain rounded-2xl big-image" />
              </div>*/}
          </div>
          <div className='justify-center flex mb-10 md720:mb-12'><hr/></div>
          
          {/*RESULTADO PROTÓTIPO*/}
          
          <div className='rounded-2xl bg-blue-200 bg-opacity-35 text-center px-4 md720:px-8 py-4 md720:py-8 mb-6'>
            <h4 className='font-bold text-lg md720:text-xl mb-1  text-blue-900 '>Wanna interact with the project? 👀</h4>

            <p className='text-base md720:text-lg italic leading-tight  text-blue-900 mb-8'>Here is the prototype for you to explore ↓ (brazilian-pt only)<br/></p>

            {/*Protótipos*/}
              {/*Protótipo Desktop*/}
              <iframe className="w-full rounded-2xl px-6 bg-[#090C0F] h-[520px] hidden md720:block" src="https://embed.figma.com/proto/J9HJQCu6G9RcMS3PZTTV0G/RBD-21---Desktop?page-id=664%3A4958&node-id=695-9736&p=f&viewport=835%2C-645%2C0.02&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=796%3A9726&embed-host=share&hide-ui=true" allowFullScreen></iframe>
              
              {/*Protótipo Mobile*/}
              <iframe className="w-full rounded-2xl px-4 bg-[#090C0F] h-[500px] min-[420px]:h-[720px] block md720:hidden" src="https://embed.figma.com/proto/J9HJQCu6G9RcMS3PZTTV0G/RBD-21---Desktop?page-id=1018%3A5744&node-id=1018-24395&viewport=7023%2C-17897%2C0.32&scaling=scale-down-width&content-scaling=fixed&embed-host=share&hide-ui=true" allowFullScreen></iframe>
          

          </div>
          

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
                          <div className="transition-all duration-[500ms] hover:scale-[1.02] hover:opacity-90 text-slate-800 hover:text-green-700 shadow-lg border-l-8 border-green-700 border-opacity-25 bg-color-lightgreen rounded-md">
                            <a href="/projects/bb-event-transformation">
                              <img
                                src="/bb-event-transformation/images/Cover.png"
                                className="w-full rounded-md md720:rounded-xl object-contain hover:opacity-80 transition-all duration-[500ms]"
                                width={80}
                                height={80}
                                alt="Project Thumbnail"
                              />
                              <div className="w-full px-4 h-auto pb-4 text-lg md720:text-xl font-bold leading-snug">
                                Transforming Event Engagement with Customizable Solutions
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