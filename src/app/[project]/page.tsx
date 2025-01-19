import Image from 'next/image'

export async function generateStaticParams() {
  return [
    { rbd21: '1' }, // Matches /project/1
    { rbd21: '2' }, // Matches /project/2
    { rbd21: '3' }, // Matches /project/3
  ];
}

export default function ProjectList() {
  return (
      <div className='h-screen flex flex-col w-screen'>
        <span>Página de projetos</span>
        
      </div>
  )
}
