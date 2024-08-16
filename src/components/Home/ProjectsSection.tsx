import { projectData } from '@/constants/data';
import Project from '../Project';

function ProjectsSection() {
	return (
		<section id='project-section'>
			<h2 className='text-xl font-bold mb-4 text-primary'>Projects</h2>
			<div className='flex gap-4 max-md:flex-col'>
				{projectData.map((project) => (
					<Project key={project.id} project={project} />
				))}
			</div>
		</section>
	);
}

export default ProjectsSection;
