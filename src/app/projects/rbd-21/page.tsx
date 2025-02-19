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
        After countless late-night zoom calls to talk about life and design during post-pandemic times, 2021 marked a turning point for these conversations. Through researches on design subject, <b>there was a noticeable gap on official sources about brazilian design dating back to 2014.</b> On an effort to address this, there was one question in mind: <b>What is brazilian design?</b>
        </p>
        <p className="text-slate-950 mb-4">
        This question drove a 3-year collaborative project that aimed to <b>identify, make accessible and amplify understanding about the Brazilian Design scene in 2021.</b> To achieve this, the project combined two key efforts: automated and manual searches across public web databases, and an online survey directed at individuals identifying as Brazilian designers. Covering themes as education, professional market, knowledge generation and designers, all gathered insights were <b>compiled on a website featuring over 30 data visualization sets</b> that intend to inspire and lead discussions on the subject in the country.
        </p>


        {/*SEÇÃO GOALS*/} 
        <section id="goals" className="mb-6 md720:mb-8 mt-10 md720:mt-14">
          <h2 className="text-2xl font-bold mb-6 md720:mb-8">Goals</h2>

          {/*Destaque 01*/} 
          <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4 rounded-e-lg">
            <h4 className='font-bold text-lg'>
            Collect data about design in Brazil
            </h4>
            <p>
            Create a record on information about brazilian design until 2021
            </p>
          </div>
          {/*Destaque 02*/} 
          <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4 rounded-e-lg">
            <h4 className='font-bold text-lg'>Create data visualization from compiled information</h4>
            <p>
            Use visual tools to turn complex data into easy to consume information
            </p>
          </div>
          {/*Destaque 03*/} 
          <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4 rounded-e-lg">
            <h4 className='font-bold text-lg'>Public access to the information</h4>
            <p>
            Make the data about brazilian design available for everyone
            </p>
          </div>
          {/*Destaque 04*/} 
          <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 rounded-e-lg">
            <h4 className='font-bold text-lg'>Generate insights, not images</h4>
            <p>
            Making the conditions and consequences of an issue apparent and known through insights
            </p>
          </div>

        </section>

        {/*SEÇÃO RESEARCH AND FINDINGS*/} 
        <section id="research-and-findings" className="mb-6 md720:mb-8 mt-10 md720:mt-14">
          <h2 className="text-2xl font-bold mb-6 md720:mb-8">
            Research and Findings
          </h2>
          {/*Conteúdo*/} 
          <p className="text-slate-950 mb-4">
          For the online survey, there was careful planning involved in the <b>release strategy,</b> making sure it would <b>reach a broader audience across a continental country.</b>
          </p>
          <p className="text-slate-950 mb-4">
          The combined efforts of desk research, web scraping and online survey resulted in <b>over 5,500 lines of structured and unstructured data collected.</b>
          </p>
          {/*Overview*/} 
          <div className="mb-4 md720:mb-6 grid justify-items-center">
            {/*Imagem - Dashboard original*/} 
              <img
                src="/rbd-21/images/Research and Findings - Table.png"
                alt="Data collecting overview"
                className="w-full object-contain md720:mt-6 rounded-2xl mb-2 w-full big-image" />
              <img
                src="/rbd-21/images/Research and Findings - Overview.gif"
                alt="Data collecting overview"
                className="w-full object-contain md720:mt-6 rounded-2xl mb-4 w-full big-image" />
         
            <p className="text-sm text-gray-500 text-center mt-2 block italic mb-2 md720:mb-8">
                Part of data collected in the project
            </p>
          </div>
          <div className='justify-center flex mb-4 md720:mb-8'><hr/></div>

          {/*Survey Overview*/} 
          <div className="mb-8 md720:mb-12 grid justify-items-center">
            {/*Imagem - Dashboard original*/} 
              <img
                src="/rbd-21/images/Research and Findings - Survey Overview.png"
                alt="Overview of the flow designed for the Online Survey"
                className="w-full object-contain md720:mt-6 rounded-2xl mb-2 w-full big-image" />
         
            <p className="text-sm text-gray-500 text-center mt-2 block italic mb-2 md720:mb-8">
              Overview of the flow designed for the Online Survey
            </p>
          </div>
                  


        </section>

        {/*SEÇÃO FINDINGS*/} 
        <section id="findings" className="mb-6 md720:mb-8 mt-10 md720:mt-14">
          <h2 className="text-2xl font-bold mb-6 md720:mb-8">Findings</h2>
          
          {/*Estratégia 01 */} 
          <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4 rounded-e-lg">
            <h4 className='font-bold text-lg'>
              114 Researched public universities
            </h4>
            <p>
            Within the scope of Brazilian Public Universities, a desk research was conducted on all 114 institutions, looking for the criteria of having or not design-related courses
            </p>
          </div>
          {/*Estratégia 02 */} 
          <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4 rounded-e-lg">
            <h4 className='font-bold text-lg'>
              5,000 Articles collected
            </h4>
            <p>
            To understand trends in design knowledge generation in Brazil a web scrapping tool was used to gather over 5,000 articles in Blucher Proceeding&apos;s database until 2021
            </p>
          </div>
          {/*Estratégia 03*/} 
          <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4 rounded-e-lg">
            <h4 className='font-bold text-lg'>
              406 Online survey answers
            </h4>
            <p>
            Aiming to understand who are the people who recognize themselves as designers in Brazil and their views on the matter of brazilian design, an online survey was conducted and achieved 406 answers
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
              className="w-full object-contain mt-8 rounded-2xl mb-4 w-full big-image" />
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
              className="w-full object-contain mt-8 rounded-2xl mb-4 w-full big-image" />
            <p className="text-sm text-gray-500 text-center block italic">
              Refinement resume of the visual identity crafting
            </p>
          </div>
          <div className='justify-center flex mb-4 md720:mb-10'><hr/></div>
          {/*Imagem - Explorações*/}
          <div className=" mb-8 md720:mb-12 grid justify-items-center">
            <img
              src="/rbd-21/images/Explorations - Figma.png"
              alt="Explorations for social media sharing and press release"
              className="w-full object-contain mt-8 rounded-2xl mb-4 w-full big-image" />
            <p className="text-sm text-gray-500 text-center block italic">
              Explorations for social media sharing and press release
            </p>
          </div>
          <div className='justify-center flex mb-4 md720:mb-10'><hr/></div>

        </section>

        {/*SEÇÃO Outcome*/} 
        <section id="outcome" className='mb-6 md720:mb-8 mt-10 md720:mt-14'>
          <h2 className="text-2xl font-bold mb-6 md720:mb-8">Outcome</h2>
          <p className="text-slate-950 mb-4">
          The process was long and challenging, but it was supported by many who believed in the vision and the proposal behind it. The outcome was <b>a project that exceeded initial expectations, offering people a deeper understanding of the reality of Brazilian design. </b>
          </p>

          {/*Imagem - Tech Structure*/}
          <div className=" mb-4 grid justify-items-center">
            <video
              src="/rbd-21/images/Outcome - RBD21.mp4"
              className="w-full object-contain mt-8 rounded-2xl mb-4 w-full big-image"
              controls
            />
          </div>
          


        </section>

        {/*SEÇÃO RESULTS*/} 
        <section id="results" className='mb-6 md720:mb-8 mt-10 md720:mt-14'>
          <h2 className="text-2xl font-bold mb-6 md720:mb-8">Results</h2>
          
          {/*Results 01*/} 
          <div className="bg-gray-200 border-l-4 border-gray-950 p-4 mb-6 rounded-e-lg">
            <h4 className='font-extrabold  text-lg mb-1 text-gray-900'>
            100% free responsive website
            </h4>
            <p className='text-gray-800'>
            The insights and findings of the project were made freely available on a responsive website to ensure that the goal of having widespread access to the data and easy sharing was met. This way, it could be opened by anyone, anywhere.
            </p>
          </div>
          {/*Results 02*/} 
          <div className="bg-blue-50 border-l-4 border-blue-900 p-4 mb-6 rounded-e-lg">
            <h4 className='font-extrabold  text-lg mb-1 text-blue-900'>
            Over 30 data visualizations
            </h4>
            <p className='text-blue-950'>
            Over 5,000 lines of data were summarized and translated into over 30 data visualization diagrams, organized by major themes of interest. This approach simplifies the understanding and facilitates the extraction of insights and discussions about brazilian design <i>phenomena</i>. 
            </p>
          </div>
          {/*Results 03*/} 
          <div className="bg-gray-200 border-l-4 border-gray-950 p-4 mb-6 rounded-e-lg">
            <h4 className='font-extrabold text-lg mb-1 text-gray-900'>
            Strong visual identity
            </h4>
            <p className='text-gray-800'>
            The visual of the project holds a strong identity branded by its live colors and shapes, crafted after the analysis and breakdown of the country&apos;s flags and forms. The results embody the dimension and the concept of a complex and continent-sized subject that is Brazil.
            </p>
          </div>
          {/*Results 04*/} 
          <div className="bg-blue-50 border-l-4 border-blue-900 p-4 mb-6 rounded-e-lg">
            <h4 className='font-extrabold  text-lg mb-1 text-blue-900'>
            Collaboration is key
            </h4>
            <p className='text-blue-950'>
            This project was possible because people believed in it, assisted not only by developers and designers, but by everyone who acted on sharing and participating on the survey. For a continental country such as Brazil, the data had to be built by the collective efforts of many, to reflect the complex and diverse nature of an identity intertwined with many others.
            </p>
          </div>

          {/*Imagem Resultado - 0*/}
          <div className=" mb-4 grid justify-items-center">
            <img
              src="/rbd-21/images/Results - RBD21.gif"
              alt="Vignette"
              className="w-full object-contain mt-8 rounded-2xl mb-4 w-full big-image" />
          </div>
          <div className='justify-center flex mb-4 md720:mb-10'><hr/></div>
          {/*Imagem Resultado - 1*/}
          <div className=" mb-4 grid justify-items-center">
            <img
              src="/rbd-21/images/Results - 01.png"
              alt="Results - 01"
              className="w-full object-contain mt-8 rounded-2xl mb-4 w-full big-image" />
          </div>
          <div className='justify-center flex mb-2 md720:mb-5'><hr/></div>
          {/*Imagem Resultado - 2*/}
          <div className=" mb-4 grid justify-items-center">
            <img
              src="/rbd-21/images/Results - 02.png"
              alt="Results - 02"
              className="w-full object-contain mt-8 rounded-2xl mb-4 w-full big-image" />
          </div>
          <div className='justify-center flex mb-2 md720:mb-5'><hr/></div>
          {/*Imagem Resultado - 3*/}
          <div className=" mb-4 grid justify-items-center">
            <img
              src="/rbd-21/images/Results - 03.png"
              alt="Results - 03"
              className="w-full object-contain mt-8 rounded-2xl mb-4 w-full big-image" />
          </div>
          <div className='justify-center flex mb-2 md720:mb-5'><hr/></div>
          {/*Imagem Resultado - 4*/}
          <div className=" mb-4 grid justify-items-center">
            <img
              src="/rbd-21/images/Results - 04.png"
              alt="Results - 04"
              className="w-full object-contain mt-8 rounded-2xl mb-4 w-full big-image" />
          </div>
          <div className='justify-center flex mb-2 md720:mb-5'><hr/></div>
          {/*Imagem Resultado - 5*/}
          <div className=" mb-4 grid justify-items-center">
            <img
              src="/rbd-21/images/Results - 05.png"
              alt="Results - 05"
              className="w-full object-contain mt-8 rounded-2xl mb-4 w-full big-image" />
          </div>
          <div className='justify-center flex mb-10 md720:mb-14'><hr/></div>
          
          <div className='rounded-lg bg-green-200 bg-opacity-35 text-center px-8 py-8 '>
            <h4 className='font-bold text-lg md720:text-xl mb-1  text-green-900 '>Wanna see the full project? 👀</h4>

            <p className='text-base md720:text-lg italic leading-tight  text-green-900 '>Send me a message for the prototype link<br/></p>

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
                        <div className="grid grid-cols-2 gap-4">

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
                                Reshaping Data Visualization and Enchanting Audience
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