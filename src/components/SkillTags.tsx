import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React, { useMemo } from 'react';

import CppLogo from '@/public/icons/ISO_C++_Logo.svg';
import Csharp from '@/public/icons/c-sharp-c-seeklogo.svg';
import JsLogo from '@/public/icons/JavaScript-logo.png';
import MongoDBLogo from '@/public/icons/MongoDB_Logomark_SpringGreen.svg';
import NextLogo from '@/public/icons/nextjs-icon-dark-background.svg';
import NodeJSLogo from '@/public/icons/nodejs.svg';
import PostgresLogo from '@/public/icons/PostgreSQL_logo.3colors.svg';
import PlaywrightLogo from '@/public/icons/logos--playwright.svg';
import ReactLogo from '@/public/icons/React-icon.svg';
import TsLogo from '@/public/icons/ts-logo-128.png';
import UnityLogo from '@/public/icons/U_Cube_1C_White.svg';
import VueLogo from '@/public/icons/Vue.js_Logo_2.svg';
import JestLogo from '@/public/icons/Jest.png';

export enum Tags {
	React,
	Vue,
	Typescript,
	Javascript,
	Unity,
	Next,
	NodeJS,
	MongoDB,
	Postgres,
	Csharp,
	Cpp,
	Playwright,
	Jest,
}

interface SkillTagsProps {
	type: Tags;
}

function SkillTags({ type }: SkillTagsProps) {
	const getTags = useMemo(() => {
		let tagSrc: StaticImageData, tagTitle: string;

		switch (type) {
			case Tags.Cpp:
				tagSrc = CppLogo;
				tagTitle = 'C++';
				break;
			case Tags.Csharp:
				tagSrc = Csharp;
				tagTitle = 'C#';
				break;
			case Tags.Javascript:
				tagSrc = JsLogo;
				tagTitle = 'Javascript';
				break;
			case Tags.Jest:
				tagSrc = JestLogo;
				tagTitle = 'Jest';
			case Tags.MongoDB:
				tagSrc = MongoDBLogo;
				tagTitle = 'MongoDB';
				break;
			case Tags.Next:
				tagSrc = NextLogo;
				tagTitle = 'Next';
				break;
			case Tags.NodeJS:
				tagSrc = NodeJSLogo;
				tagTitle = 'NodeJS';
				break;
			case Tags.Playwright:
				tagSrc = PlaywrightLogo;
				tagTitle = 'Playwright';
			case Tags.Postgres:
				tagSrc = PostgresLogo;
				tagTitle = 'PostgreSQL';
				break;
			case Tags.React:
				tagSrc = ReactLogo;
				tagTitle = 'React';
				break;
			case Tags.Typescript:
				tagSrc = TsLogo;
				tagTitle = 'Typescript';
				break;
			case Tags.Unity:
				tagSrc = UnityLogo;
				tagTitle = 'Unity';
				break;
			case Tags.Vue:
				tagSrc = VueLogo;
				tagTitle = 'Vue';
				break;
			default:
				const _exh: never = type;
				return _exh;
		}

		return { src: tagSrc, title: tagTitle };
	}, [type]);

	return (
		<div className='flex gap-2 border-2 border-accent rounded-lg p-1 items-center'>
			<Image src={getTags.src} alt={getTags.title} height={12} />
			<span className='font-bold text-xs'>{getTags.title}</span>
		</div>
	);
}

export default SkillTags;
