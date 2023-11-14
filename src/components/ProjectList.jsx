import ProjectItem from '@/components/ProjectItem';

function ProjectList({ projects }){

  {/* Add a prop to define if the mobile layout should be either slider or grid */}

  return (
    <div>
        {projects.map((project, index) => {
          const imageUrl = process.env.NEXT_PUBLIC_API_URL + '/assets/' + project.grid_image.id;
          return <ProjectItem 
                    key={`project-${index}`} 
                    image={{ url: imageUrl, height: project.grid_image.height, width: project.grid_image.width, alt: project.grid_image.title }} 
                    name={project.name} 
                    tags={project.tags}
                    text={project.short_description} 
                    link="/"
                  />
        } )}
    </div>
  )
}

export default ProjectList;