type Project = {
    slug: string,
    title: string,
    tags: string[]
}

const projects = [
    {
        slug: 'rbd-21',
        title: 'Recorte Brasil Design',
        tags: ['DataViz','UX Design','Interaction']
    }, 

    {
        slug: 'value-chain',
        title: 'Banco do Brasil\'s Value Chain: Reshaping Data Visualization and Enchanting Audience'                
    }

]

export function getProjectBySlug(slug:string) {
    return projects.find(project => project.slug === slug);
}

export function getAllProjects() {
    return projects;
}
