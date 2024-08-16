import Image from 'next/image';
import React from 'react';
import Card from '../Card';
import Internship from '@/public/assets/internship.jpg';

import SkillTags, { Tags } from '../SkillTags';

function ExperienceSection() {
	return (
		<section id='experience-section'>
			<h2 className='text-xl font-bold mb-4 text-primary'>Experience</h2>
			<Card wrapper='article'>
				<div className='md:flex md:justify-between md:mb-3'>
					<div>
						<h3 className='text-lg font-bold text-primary'>
							Software Developer Intern - Frontend
						</h3>
						<h4>at Blibli.com (PT. Global Digital Niaga)</h4>
					</div>
					<h5 className='text-sm md:text-base'>Feb 2022 - Jan 2023</h5>
				</div>
				<div className='md:flex md:gap-5'>
					<Image
						src={Internship}
						alt='Blibli Intern'
						sizes='100vw'
						className='w-full h-auto my-5 md:w-1/4 md:h-full md:m-auto rounded-sm'
					/>
					<ul className='list-disc list-outside px-4 md:w-3/4'>
						<li>
							Developed multiple{' '}
							<span className='text-primary'>interactive</span> and{' '}
							<span className='text-primary'>responsive</span> User
							Interfaces for the Blibli Product Detail Page and Review
							Page
						</li>
						<li>
							Assisted in improving website{' '}
							<span className='text-primary'>core web vitals</span> and
							minimizing page load improving the{' '}
							<span className='text-primary'>web performance</span> by
							10%
						</li>
						<li>
							Optimized and reduced{' '}
							<span className='text-primary'> integration test</span>{' '}
							flakiness in Product Detail Page and Review Page repository
							increasing build success rate by 30%
						</li>
					</ul>
				</div>
				<div className='flex justify-end gap-1 mt-4'>
					<SkillTags type={Tags.Vue} />
					<SkillTags type={Tags.Playwright} />
					<SkillTags type={Tags.Jest} />
				</div>
			</Card>
		</section>
	);
}

export default ExperienceSection;
