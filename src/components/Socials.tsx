import { emailLink, githubLink, linkedInLink } from '@/constants/links';
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Socials() {


	return (
		<div className='flex items-center gap-2'>
			<a
				href={emailLink}
				className='text-gray-500 text-2xl hover:text-white transition-colors'>
				<FaEnvelope />
			</a>
			<a
				href={linkedInLink}
				className='text-gray-500 text-2xl hover:text-white transition-colors'>
				<FaLinkedin />
			</a>
			<a
				href={githubLink}
				className='text-gray-500 text-2xl hover:text-white transition-colors'>
				<FaGithub />
			</a>
		</div>
	);
}

export default Socials;
