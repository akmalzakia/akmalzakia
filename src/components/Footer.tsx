import React from 'react';
import Socials from './Socials';
import Link from 'next/link';

function Footer() {
	return (
		<footer className='flex justify-between items-center p-4 '>
			<a href='#header' className='text-primary font-bold text-lg'>
				<span>Back to top</span>
			</a>
			<Socials />
		</footer>
	);
}

export default Footer;
