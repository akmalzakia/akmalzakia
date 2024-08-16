import { FaBars } from 'react-icons/fa';

function Nav() {
	return (
		<nav className='sticky top-0 flex gap-3 p-6 items-center bg-background'>
			<a className='font-bold text-primary'>About</a>
			<a className='font-bold text-primary'>Projects</a>
			<a className='font-bold text-primary'>Experience</a>
			<a className='font-bold text-primary'>Skills</a>
		</nav>
	);
}

export default Nav;
