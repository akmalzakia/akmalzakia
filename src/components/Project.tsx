import React from 'react';
import Card from './Card';
import Image from 'next/image';
import { ProjectData } from '@/constants/data';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import SkillTags from './SkillTags';

interface ProjectsProps {
	project: ProjectData;
}

function Project({ project }: ProjectsProps) {
	return (
		<Card
			wrapper='article'
			className='flex flex-col justify-between'>
			<div>
				<Image
					src={project.image.src}
					alt={project.image.alt}
					sizes='100vw'
					className='w-full h-auto rounded-sm'
				/>
				<h3 className='mt-3 text-lg font-bold'>{project.title}</h3>
				<p className='text-sm'>{project.description}</p>
			</div>
			<div className='flex justify-between items-center mt-4'>
				<div className='flex gap-2'>
					{project.githubUrl && (
						<a
							href={project.githubUrl}
							className='text-2xl text-gray-500 hover:text-white transition-colors'>
							<FaGithub />
						</a>
					)}
					{project.url && (
						<a
							href={project.url}
							className='text-2xl text-gray-500 hover:text-white transition-colors'>
							<FaGlobe />
						</a>
					)}
				</div>
				{project.tags && (
					<div>
						{project.tags.map((tag) => (
							<SkillTags key={tag} type={tag}></SkillTags>
						))}{' '}
					</div>
				)}
			</div>
		</Card>
	);
}

export default Project;
