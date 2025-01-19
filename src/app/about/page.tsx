import Image from 'next/image'

export default function Home() {
  return (
      <div className='h-screen flex flex-col w-screen'>

        <div className='flex flex-1 h-screen relative overflow-auto max-h-screen'>
          <div className='flex flex-col sticky w-64 px-12 h-screen top-0 self-center'>
            <nav className='space-y-4 my-auto'>
                
            </nav>
          </div>
          
          <main id='Content' className='flex-1'>
              <div id='#portfolio' className='flex flex-col px-4'>
                <div className='grid grid-cols-1 p-12 gap-12'>


                </div>
              </div>  
          </main>

        </div>
      </div>
  )
}
