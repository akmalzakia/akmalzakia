import Card from '../Card';
import Image from 'next/image';
import Profile from '@/public/assets/profile.png';
import Socials from '../Socials';

function AboutSection() {
	return (
		<Card id='about-section' wrapper='section' className=''>
			<div className='flex justify-between mb-3'>
				<h2 className='text-xl font-bold text-primary'>About me</h2>
				<Socials />
			</div>
			<div className='flex gap-4'>
				<div className=''>
					<p className=''>
						<Image
							className='max-w-40 h-auto float-right max-md:m-2 md:ml-2 rounded-sm'
							src={Profile}
							alt='My photo'
							sizes='100vw'></Image>
						I&apos;m Akmal Zaki Asmara, a frontend developer experienced
						in using popular frontend frameworks like{' '}
						<span className='text-accent'>React.js</span> and{' '}
						<span className='text-[#42b883]'>Vue.js</span>. I love
						developing and implementing unique responsive user interfaces.
						I am constantly learning about the IT development and trends,
						especially in web technology. Currently, I am learning about
						other parts of web development, for example, backend
						development and cloud engineering.
					</p>
				</div>
			</div>
		</Card>
	);
}

export default AboutSection;
