import { Card } from '../ui/dashboard/cards';
import { projectData } from '../lib/project-data';


export default function Page() {
  return ( 
  <main>

{projectData.map((project) => {
    return (
      <Card
        key={project.id}
        title={project.name}
        value={project.description}
      
      />
    )
  })}
  </main>
  )
}

