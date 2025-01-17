import Image from 'next/image'

export default function Home() {
  return (
      <div className='h-screen flex flex-col w-screen'>

        <div className='flex flex-1 h-screen relative overflow-auto max-h-screen'>
          <div className='flex flex-col sticky w-64 px-12 h-screen top-0 self-center'>
            <nav className='space-y-4 my-auto'>
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
          
          <div className='flex flex-col flex-1 max-w-screen-2xl justify-self-center'>    
            <header className='sticky top-0 bg-slate-50 px-4 flex flex-col pt-32 pb-2 border-b border-slate-200'>
              <div className='flex flex-row'>
                  <div className='flex flex-col max-w-4xl gap-1'>
                      they/them
                      <h1 className='text-lg font-bold text-gray-700'>Hi, I'm Ana!</h1>
                      <h2>I’m a designer creating future-oriented products and experiences that drive business impact and transform how people interact with the world.</h2>
                  </div>

                  <div className='flex flex-1 text-right justify-end'>
                      <div className='flex w-16 h-16 rounded-full bg-pink-300 justify-end'>
                        <div className='flex w-5 h-5 rounded-full border-white border-2 bg-green-500 self-end'/>
                      </div>
                  </div>
              </div>

              <div id='Content_header' className='flex flex-col mt-6'>
                <h2 className='font-bold text-2xl mt-16 pb-2 text-slate-700'>My work</h2>
              </div>

            </header>

            <main id='Content' className='flex-1'>
              <div id='#portfolio' className='flex flex-col px-4'>
                <div className='grid grid-cols-1 p-12 gap-12'>

                    <div className='flex flex-row gap-10'>
                      <img className='bg-blue-600 w-5/12 h-80'></img>

                      <div className='flex flex-col flex-1'>
                          <div className='flex flex-col'>
                            <nav className='space-x-2 flex flex-row'>
                              <a href='' className='bg-slate-700 text-gray-300 font-medium px-4 py-2 rounded-md hover:bg-slate-900'>tag 1</a>
                              <a href='' className='bg-slate-700 text-gray-300 font-medium px-4 py-2 rounded-md hover:bg-slate-900'>tag 2</a>
                              <a href='' className='bg-slate-700 text-gray-300 font-medium px-4 py-2 rounded-md hover:bg-slate-900'>tag 3</a>
                            </nav>
                            <a href='' className='font-bold text-2xl mt-5 text-slate-700'>Título do projeto</a>
                            descrição do projeto
                          </div>


                      </div>
                    </div>

                    <div className='flex flex-row gap-10'>
                      <img className='bg-blue-600 w-5/12 h-80'></img>

                      <div className='flex flex-col flex-1'>
                          <div className='flex flex-col'>
                            <nav className='space-x-2 flex flex-row'>
                              <a href='' className='bg-slate-700 text-gray-300 font-medium px-4 py-2 rounded-md'>tag 1</a>
                              <a href='' className='bg-slate-700 text-gray-300 font-medium px-4 py-2 rounded-md'>tag 2</a>
                              <a href='' className='bg-slate-700 text-gray-300 font-medium px-4 py-2 rounded-md'>tag 3</a>
                            </nav>
                            <a href='' className='font-bold text-2xl mt-5 text-slate-700'>Título do projeto</a>
                            descrição do projeto
                          </div>


                      </div>
                    </div>

                    <div className='flex flex-row gap-10'>
                      <img className='bg-blue-600 w-5/12 h-80'></img>

                      <div className='flex flex-col flex-1'>
                          <div className='flex flex-col'>
                            <nav className='space-x-2 flex flex-row'>
                              <a href='' className='bg-slate-700 text-gray-300 font-medium px-4 py-2 rounded-md'>tag 1</a>
                              <a href='' className='bg-slate-700 text-gray-300 font-medium px-4 py-2 rounded-md'>tag 2</a>
                              <a href='' className='bg-slate-700 text-gray-300 font-medium px-4 py-2 rounded-md'>tag 3</a>
                            </nav>
                            <a href='' className='font-bold text-2xl mt-5 text-slate-700'>Título do projeto</a>
                            descrição do projeto
                          </div>


                      </div>
                    </div>

                </div>
                            
              </div>

            </main>

          </div>
          
        </div>
      </div>
  )
}
