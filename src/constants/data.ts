import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { StaticImageData } from 'next/image';
import Miniplayer from '@/public/assets/miniplayer.png';
import LidarImage from '@/public/assets/lidar.png';

import { Tags } from '@/components/SkillTags';

export interface SkillTag {
	src: string | StaticImport;
	title: string;
}

export interface ProjectData {
	id: number;
	title: string;
	image: {
		src: StaticImageData;
		alt: string;
	};
	description: string;
	tags?: Tags[];
	githubUrl?: string;
	url?: string;
}

export const projectData: ProjectData[] = [
	{
		id: 1,
		title: 'Miniplayer',
		image: {
			src: Miniplayer,
			alt: 'Miniplayer screenshot',
		},
		description: 'Online music library utilizing Spotify API',
		tags: [Tags.React],
		githubUrl: 'https://github.com/akmalzakia/miniplayer',
		url: 'https://miniplayer-nz7v.vercel.app/',
	},
	{
		id: 2,
		title: 'Marker vs. Markerless: Usability Insights for Indoor Navigation with Handheld Augmented Reality Systems',
		image: {
			src: LidarImage,
			alt: 'Marker vs. Markerless: Usability Insights for Indoor Navigation with Handheld Augmented Reality Systems',
		},
		description:
			'A study to determine the usability of a virtual-based localization system using QR Codes and LIDAR point cloud.',
		tags: [Tags.Unity],
		url: 'https://ieeexplore.ieee.org/document/10330861',
	},
];
