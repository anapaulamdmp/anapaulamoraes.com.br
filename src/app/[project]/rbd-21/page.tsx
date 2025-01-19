import Image from 'next/image'

export default function ProjectPage() {

  return (
      <div className='h-screen flex flex-col w-screen'>

        <div className='flex flex-col md720:flex-row flex-1 h-screen relative overflow-auto max-h-screen'>
          <div className='flex flex-1 flex-row md720:flex-col sticky max-w-max pl-20 pr-28 h-auto md720:h-screen top-0 md720:self-center'>
            
            {/* Navigation */}
            {/* Hamburger button for mobile */}
            <div className='md720:hidden sticky top-4 left-4 z-10 w-full'>
              Pagina RBD21
            </div>
            
          </div>
          
        </div>
      </div>
  )
}
