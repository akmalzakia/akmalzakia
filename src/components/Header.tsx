function Header() {
	return (
		<header
			id='header'
			className='flex flex-col text-center p-10 gap-2 scroll-smooth scroll-mt-20'>
			<h1 className='text-3xl md:text-4xl font-bold'>
				Hello, I&apos;m <span className='text-primary'>Zaki</span>
			</h1>
			<span className='text-sm md:text-base'>
				I&apos;m a <span className='text-primary'>Frontend Developer</span>{' '}
				and a Computer Graphics enthusiast
			</span>
			<a
				href='/cv/Akmal Zaki Asmara - Resume.pdf'
				className='rounded-md px-5 py-2 self-center mt-5 border-2 border-primary font-bold text-primary hover:bg-primary hover:bg-opacity-10 transition-colors'>
				Résumé
			</a>
		</header>
	);
}

export default Header;
