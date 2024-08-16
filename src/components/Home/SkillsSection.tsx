import React from 'react';
import Card from '../Card';

import SkillTags, { Tags } from '../SkillTags';

function SkillsSection() {
	return (
		<section id='skills-section'>
			<h2 className='text-xl font-bold mb-4 text-primary'>Skills</h2>
			<Card wrapper='article' className='!p-3 mb-3 md:flex md:items-center'>
				<h3 className='text-lg font-bold max-md:mb-1 md:w-1/5'>Frontend</h3>
				<div className='flex gap-1'>
					<SkillTags type={Tags.Vue} />
					<SkillTags type={Tags.React} />
					<SkillTags type={Tags.React} />
				</div>
			</Card>
			<Card wrapper='article' className='!p-3 mb-3 md:flex md:items-center'>
				<h3 className='text-lg font-bold max-md:mb-1 md:w-1/5'>Backend</h3>
				<div className='flex gap-1'>
					<SkillTags type={Tags.NodeJS} />
					<SkillTags type={Tags.MongoDB} />
					<SkillTags type={Tags.Postgres} />
				</div>
			</Card>
			<Card wrapper='article' className='!p-3 mb-3 md:flex md:items-center'>
				<h3 className='text-lg font-bold max-md:mb-1 md:w-1/5'>Language</h3>
				<div className='flex gap-1'>
					<SkillTags type={Tags.Typescript} />
					<SkillTags type={Tags.Javascript} />
					<SkillTags type={Tags.Csharp} />
					<SkillTags type={Tags.Cpp} />
				</div>
			</Card>
		</section>
	);
}

export default SkillsSection;
