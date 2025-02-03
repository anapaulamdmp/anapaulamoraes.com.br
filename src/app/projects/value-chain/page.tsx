'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectPage() {
  return (

    

      <div className="max-w-[1024px] mx-auto p-6 rounded-2xl px-5 md720:px-6 mt-7 md720:mt-20 text-slate-950 font-dmSans">
        {/* Fixed breadcrumb menu */}
        <div className="fixed top-0 left-0 w-full pt-10 pb-8 z-10 text-center bg-color ">
          <div className="max-w-[1024px] mx-auto px-6">
            <p className="text-lg md720:text-2xl font-medium">
              <Link href="/" className="text-gray-400 hover:text-gray-400">Ana /</Link> Value Chain
            </p>
          </div>
        </div>
        
        {/*Título do Projeto*/} 
        <h1 className="mt-4 md720:mt-12 text-2xl md720:text-3xl font-semibold text-center mb-14 text-slate-950">Banco do Brasil&apos;s Value Chain: Reshaping data visualization for easier readings and enchanting audience</h1>
        
        {/*Cover Image*/} 
        <img
                  src="/value-chain/images/Cover.png"
                  alt="Cover"
                  className="w-full aspect-video object-cover mb-14 rounded-2xl sm:w-[105%] md:w-[115%] lg:w-[150%]" />


        {/*SEÇÃO INTRODUÇÃO*/} 
        <p className="text-slate-950 mb-4 ">
            Banco do Brasil is the <b>oldest and one of the biggest financial institutions in Latin America</b> and tracks economic activity relationships through a dataset extracted from CNAE (National Classification of Economic Activities) database. However, visualizing and interpreting this data proved challenging due to its complexity.
        </p>
        <p className="text-slate-950 mb-4">
            Banco do Brasil&apos;s Value Chain was created to <b>capture the audience&apos;s attention by showcasing innovation and simplifying complex data. </b>With the goal of bringing the project to the broader public through technology and innovation conferences, the platform uses advanced visual tools to transform intricate financial data into an easily understandable and interactive experience. By organizing data based on the CNAE, it allows users to explore connections between sectors like agribusiness, education, and healthcare, making complex economic relationships more accessible and engaging.
        </p>


        {/*SEÇÃO GOALS*/} 
        <section id="goals" className="mb-8 mt-14">
          <h2 className="text-2xl font-bold mb-8">Goals</h2>

          {/*Destaque 01 - Redesign the experience*/} 
          <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4 rounded-e-lg">
            <h4 className='font-bold text-lg'>
              Redesign the experience
            </h4>
            <p>
              The dashboard was complex and had many steps to every action, making the overall experience draining and laborious, unnapropriated for general public
            </p>
          </div>
          {/*Destaque 02 - Organize the data*/} 
          <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4 rounded-e-lg">
            <h4 className='font-bold text-lg'>Organize the data</h4>
            <p>
                The current solution for the visualization of the value chain&apos;s data was complex, unordered and had a messy display of informations          
            </p>
          </div>
          {/*Destaque 03 - Enchant the audience*/} 
          <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4 rounded-e-lg">
            <h4 className='font-bold text-lg'>Enchant the audience</h4>
            <p>
              Banco do Brasil invests in technology and innovation and continuously demonstrates its commitment to digital transformation and technological development. It is important to bring these innovative solutions to the eyes of the public and make it accessible for everyone.
            </p>
          </div>
          {/*Destaque 04 - Visual tools to understand a complex world*/} 
          <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 rounded-e-lg">
            <h4 className='font-bold text-lg'>Visual tools to understand a complex world</h4>
            <p>
              Economic dynamics are a complex phenomenon, but visual resources can be a powerful tool to help people really see and understand the content of the data, not only numbers and labels
            </p>
          </div>

        </section>

        {/*SEÇÃO AUDIT AND INSIGHTS*/} 
        <section id="audit-insights" className="mb-8 mt-14">
          <h2 className="text-2xl font-bold mb-8">
            Audit and Insights
          </h2>
          {/*Conteúdo*/} 
          
          {/*Imagem com descrição*/} 
          <div className=" mb-12 grid justify-items-center">
            {/*Imagem - Dashboard original*/} 
              <img
                src="/value-chain/images/Audit - Old Dashboard.png"
                alt="Old dashboard showing connections and transactions between CNAE nodes"
                className="w-full object-contain mt-8 rounded-2xl mb-4 sm:w-[105%] md:w-[120%] lg:w-[120%] big-image" />
         
            <p className="text-sm text-gray-500 text-center mt-2 block italic mb-8">
                Old dashboard showing connections and transactions between CNAE nodes
            </p>
          </div>
          
            <p className="text-slate-950 mb-8">
              The viewer was characterized by a <b>complex interface</b> and a <b>cluttered design,</b> making it challenging to navigate and understand what was going on at each viewer section. 
            </p>           

            {/*Imagem - Overview table content*/} 
            <div className=" mb-4 grid justify-items-center">
            <img
                src="/value-chain/images/Audit - Table of Contents CNAE.png"
                alt="Overview of the delimited table of contents for the project"
                className="w-full object-contain mt-8 rounded-2xl mb-4 sm:w-[105%] md:w-[120%] lg:w-[120%] big-image" />
              <p className="text-sm text-gray-500 text-center block italic mb-6">
              Overview of the delimited table of contents for the project
              </p>
            </div>
            <div className='justify-center flex mb-8'><hr/></div>

          {/*Imagem - Messy Node Connections*/} 
          <div className=" mb-12 grid justify-items-center">
            <img
              src="/value-chain/images/Audit - Untreated nodes.png"
              alt="Initial Visualization of Node Connections Without Data Processing"
              className="w-full object-contain mt-8 rounded-2xl mb-4 sm:w-[105%] md:w-[120%] lg:w-[120%] big-image" />
            <p className="text-sm text-gray-500 text-center block italic mb-6">
              Initial Visualization of Node Connections Without Data Processing
            </p>
          </div>
          <p className="text-slate-950">
            By <b>exploring the issue, understanding the data, designing the tool and acting on public engagement,</b> the goal was to rethink the experience completely.
          </p>


        </section>

        {/*SEÇÃO DESIGN STRATEGY*/} 
        <section id="design-strategy" className="mb-8 mt-14">
          <h2 className="text-2xl font-bold mb-8">Design Strategy</h2>
          
          {/*Estratégia 01 - Make it simpler*/} 
          <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4 rounded-e-lg">
            <h4 className='font-bold text-lg'>
              Make it simpler, make it visual
            </h4>
            <p>
            Visual tools play a great role on <b>making complex phenomenon visible, accessible, understandable and usable.</b> For a data experience project, it is important to explore ways to visualize information.
            </p>
          </div>
          {/*Estratégia 02 - Redesign the experience*/} 
          <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4 rounded-e-lg">
            <h4 className='font-bold text-lg'>
                Make people <span className='italic'>see</span> the data
            </h4>
            <p>
                Identify patterns, treat and organize the information, so <b>people can pay more attention on understanding the story being told by the data</b> and not on trying to figure out the interface.
            </p>
          </div>
          {/*Estratégia 03 - Redesign the experience*/} 
          <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-4 rounded-e-lg">
            <h4 className='font-bold text-lg'>
                Act on Public Engagement
            </h4>
            <p>
                As the project aims for broader audience, there is a need to <b>engage people with the experience.</b> Information design seeks to be interacted with, but in a conference context, it has to physically stand out and <b>break the barrier of digital world to make the space part of the experience.</b>
            </p>
          </div>
        
        </section>

        {/*SEÇÃO EXPLORATIONS*/} 
        <section id="explorations" className="mb-8 mt-14">
          <h2 className="text-2xl font-bold mb-8">Explorations</h2>
          <p className="text-slate-950 mb-6">
            As the solution works with real-time filtering to have a dynamic and immediate view of the relationships within and across economic sectors, the explorations were focused on <b>empowering all users to effortlessly view, explore and interpretate these chains.</b>
          </p>
          
          <p className="text-slate-950 mb-6">
            Prioritizing the graphic visualization aspect of the project, the Unity game engine was selected as the core development tool. This choice enabled the crafting of a real-time 3D graph system, providing <b>dynamic interactions, visual effects, and complex animations without compromising performance,</b> even with a significant and challenging volume of data. Understanding the technical process was critical in designing a solution that worked within the limitations of the game engine, leading to a process of <b>adapting the design</b> by simplifying or rethinking some of the initial explorations.
          </p>
          
          <p className="text-slate-950 mb-6">
            The refinement of the information to be shown was a challenge itself, as the data received was raw and unprocessed, making it difficult to understand how the elements connected and what was truly relevant for users to visualize. This process of understanding the data led to numerous iterations on the UI, looking for better ways to <b>translate the complex information into an organized and readable format.</b>
          </p>
          
          {/*Imagem - Overview Explorations*/}
          <div className=" mb-12 grid justify-items-center">
            <img
              src="/value-chain/images/Explorations - Explorations on Figma.png"
              alt="Overview of initial explorations for filtering and visualization of data"
              className="w-full object-contain mt-8 rounded-2xl mb-4 sm:w-[105%] md:w-[120%] lg:w-[120%] big-image" />
            <p className="text-sm text-gray-500 text-center block italic">
              Overview of initial explorations for filtering and visualization of data
            </p>
          </div>
          <div className='justify-center flex mb-12'><hr/></div>
          {/*Imagem - Information Architecture*/}
          <div className=" mb-12 grid justify-items-center">
            <img
              src="/value-chain/images/Explorations - UI Description - Before and after.png"
              alt="Information Architecture of refined UI over translated data - Before and After"
              className="w-full object-contain mt-8 rounded-2xl mb-4 sm:w-[105%] md:w-[120%] lg:w-[120%] big-image" />
            <p className="text-sm text-gray-500 text-center block italic">
              Information Architecture of refined UI over translated data
            </p>
          </div>
          <div className='justify-center flex mb-12'><hr/></div>

        </section>

        {/*SEÇÃO Digital Meets Analogical*/} 
        <section id="digital-meets-analogical" className='mb-8 mt-14'>
          <h2 className="text-2xl font-bold mb-8">Digital Meets Analogical</h2>
          <p className="text-slate-950 mb-4">
            Beyond the digital world, there was the challenge to <b>spark the curiosity enough to make people want to interact with the experience</b> during the showcasing of the solution. 
          </p>
          
          <p className="text-slate-950 mb-4">
          Throughout the entire design process, numerous meetings were held to define the scope and directions of the experience, while assessing the budget and available resources. It was decided that the macroeconomic categories within the dataset would be represented by <b>3D-printed objects,</b> bringing them to life and enabling direct interaction with the visualization tool.
          </p>
          
          <p className="highlight-point rounded-xl text-slate-600 my-12 bg-sky-100">
              How can we seamlessly integrate physical objects into the digital experience?
          </p>
          
          <p className="text-slate-950 mb-4">
          With RFID technology, users can trigger the experience and filter categories by <b>placing the corresponding 3D-printed object onto an RFID-enabled base.</b> This interaction stacks the views in the visualization tool in real-time. Each object was assigned a color, which lit up on the base as feedback, while the interactive monitor immediately highlighted the selected node and displayed its related information.
          </p>

          {/*Imagem - Tech Structure*/}
          <div className=" mb-4 grid justify-items-center">
            <img
              src="/value-chain/images/RFID-Dispositives.png"
              alt="Technology structure for the RFID integration"
              className="w-full object-contain mt-8 rounded-2xl mb-4 sm:w-[50%]" />
            <p className="text-sm text-gray-500 text-center block italic">
            Technology structure for the RFID integration
            </p>
          </div>
          


        </section>
        
        {/*SEÇÃO OUTCOME*/} 
        <section id="outcome" className='mb-8 mt-14'>
          <h2 className="text-2xl font-bold mb-8">Outcome</h2>
          <p className="text-slate-950 mb-4">
              As a consequence of the design process, the initial tool went through a full-on makeover, emphasizing in <b>making the complex phenomenon of Brazil's economic dynamics accessible for everyone and transforming the way people interact with information.</b> 
          </p>
          <p className="text-slate-950 mb-4">
          The project highlights how technology can enhance decision-making by providing clearer insights into economic transactions, bridging the gap between a complex world phenomenon and the general public. By visualizing complex data, it empowers users to better understand economic dynamics and relationships, ultimately leading to more informed decision-making and bringing value not only for Banco do Brasil, but potentially to the whole economic ecosystem.
          </p>

          {/*Imagem - Final Event Photo*/}
          <div className=" mb-4 grid justify-items-center">
            <img
              src="/value-chain/images/Outcome - BBDW.png"
              alt="Prototype RFID objects filtering category visualization"
              className="w-full object-contain mt-8 rounded-2xl mb-4 sm:w-[105%] md:w-[120%] lg:w-[120%] big-image" />
            <p className="text-sm text-gray-500 text-center block italic">
              Prototype of RFID objects filtering category visualization
            </p>
          </div>
          <div className='justify-center flex mb-12'><hr/></div>
          {/*Imagem - Stacking view*/}
          <div className=" mb-12 grid justify-items-center">
            <img
              src="/value-chain/images/Outcome - Stacking.gif"
              alt="Stacked filtering visualization"
              className="w-full object-contain mt-8 rounded-2xl mb-4 sm:w-[105%] md:w-[120%] lg:w-[120%] big-image" />
            <p className="text-sm text-gray-500 text-center block italic">
              Stacked filtering visualization
            </p>
          </div>


        </section>
        {/*SEÇÃO RESULTS*/} 
        <section id="results" className='mb-8 mt-14'>
          <h2 className="text-2xl font-bold mb-8">Results</h2>
          
          {/*Results 01*/} 
          <div className="bg-gray-200 border-l-4 border-gray-950 p-4 mb-6 rounded-e-lg">
            <h4 className='font-extrabold  text-lg mb-1 text-gray-900'>
            Improved Economic Insights
            </h4>
            <p className='text-gray-800'>
            Over 8,000 interconnections at the CNAE level were successfully treated and translated visually, breaking down complex information and enabling a clearer understanding of financial relationships across sectors. This innovation facilitated Banco do Brasil to mitigate risks regarding corporate-client discontinuation and empowered the extraction of actionable insights to support decision-making processes.
            </p>
          </div>
          {/*Results 02*/} 
          <div className="bg-blue-50 border-l-4 border-blue-900 p-4 mb-6 rounded-e-lg">
            <h4 className='font-extrabold  text-lg mb-1 text-blue-900'>
            Data Visualization as Interaction
            </h4>
            <p className='text-blue-950'>
            Data visualization plays an important role on translating and breaking down complex information to general audience. By introducing an interactive graph-based interface, the project allows users to explore the connections between CNAE sectors in real-time easily and directly within the 3D Viewer.
            </p>
          </div>
          {/*Results 03*/} 
          <div className="bg-gray-200 border-l-4 border-gray-950 p-4 mb-6 rounded-e-lg">
            <h4 className='font-extrabold text-lg mb-1 text-gray-900'>
            Engagement Beyond Banking
            </h4>
            <p className='text-gray-800'>
            By presenting the tool at innovation and technology conferences, the project reached a broader audience. This initiative reinforces Banco do Brasil's authority in digital transformation and reputation as a future-focused institution.
            </p>
          </div>
          {/*Results 04*/} 
          <div className="bg-blue-50 border-l-4 border-blue-900 p-4 mb-6 rounded-e-lg">
            <h4 className='font-extrabold  text-lg mb-1 text-blue-900'>
            Open access to information
            </h4>
            <p className='text-blue-950'>
            This project plays an important role on the democratization of information, <b>assisting people with the analysis and understanding of how values navigate through brazilian economy,</b> in a simple and intuitive way, even if they have no technical financial understanding.  
            </p>
          </div>

          {/*Imagem Resultado - 1*/}
          <div className=" mb-4 grid justify-items-center">
            <img
              src="/value-chain/images/Results - Start Screen.png"
              alt="Start Screen"
              className="w-full object-contain mt-8 rounded-2xl mb-4 sm:w-[105%] md:w-[120%] lg:w-[120%] big-image" />
          </div>
          <div className='justify-center flex mb-12'><hr/></div>
          {/*Imagem Resultado - 2*/}
          <div className=" mb-4 grid justify-items-center">
            <img
              src="/value-chain/images/Results - Onboarding.gif"
              alt="Onboarding Screens"
              className="w-full object-contain mt-8 rounded-2xl mb-4 sm:w-[105%] md:w-[120%] lg:w-[120%] big-image" />
          </div>
          <div className='justify-center flex mb-12'><hr/></div>
          {/*Imagem Resultado - 3*/}
          <div className=" mb-4 grid justify-items-center">
            <img
              src="/value-chain/images/Results - Node View.gif"
              alt="Node visualization"
              className="w-full object-contain mt-8 rounded-2xl mb-4 sm:w-[105%] md:w-[120%] lg:w-[120%] big-image" />
          </div>
          <div className='justify-center flex mb-12'><hr/></div>
          
        </section>

        {/* New Two-Row Section with Columns */}
        <section className='flex flex-col w-full px-6 md720:gap-16 mt-16 md720:mt-32 max-920 md720:max-w-[1024px] md720:px-0'>

            {/* First Row
            <div className='flex flex-col md720:flex-row w-full gap-4 pt-8 border-t-[1px]'>
                
                <div className='w-full md720:w-1/3  rounded-xl'>
                    <h3 className='text-3xl font-semibold text-gray-900'>Nice to meet you.</h3>
                </div>

                
                <div className='w-full md720:w-2/3 rounded-xl'>
                    <p className='text-gray-900 text-2xl leading-relaxed'>
                        I’m Ana Paula, a brazilian designer located in 📌 Curitiba - PR. I’m continuously looking for fun stuff to explore and work on, feel free to hit me up anytime.
                    </p>
                </div>
            </div> */}

            {/* Let's Connect */}
            <div className='flex flex-col md720:flex-row w-full gap-4 pt-4'>
                {/* Left Column (1/3 on large screens) */}
                <div className='w-full mt-9 md720:mt-0 md720:w-1/3 rounded-xl'>
                    <h3 className='text-2xl font-semibold md720:font-normal text-gray-900'>Let&apos;s connect</h3>
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
  )
}