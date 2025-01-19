import Image from 'next/image'

export async function generateStaticParams() {
  return [
    { project: 'rbd-21' }, // Matches /project/rbd-21
  ];
}

export default function ProjectList({ params }: { params: { project: string } }) {
  return <div>Project ID: {params.project}</div>;
}

