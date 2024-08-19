import Header from '@/components/Header';
import AboutSection from '@/components/Home/AboutSection';
import ProjectsSection from '@/components/Home/ProjectsSection';
import ExperienceSection from '@/components/Home/ExperienceSection';
import SkillsSection from '@/components/Home/SkillsSection';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Akmal Zaki Asmara',
};

export default function Home() {
	return (
		<>
			<Header />
			<main className='flex min-h-screen flex-col bg-background gap-8 px-5 py-2'>
				<AboutSection />
				<ProjectsSection />
				<ExperienceSection />
				<SkillsSection />
			</main>
			<Footer />
		</>
	);
}
