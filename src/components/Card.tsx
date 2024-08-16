import { PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
	id?: string;
	className?: string;
	wrapper?: 'section' | 'div' | 'article';
}

function Card({ id, children, className, wrapper = 'div' }: CardProps) {
	const cardClasses = `border-2 border-secondary py-3 px-3 rounded-md ${className}`;

	switch (wrapper) {
		case 'article':
			return (
				<article id={id} className={cardClasses}>
					{children}
				</article>
			);
		case 'section':
			return (
				<section id={id} className={cardClasses}>
					{children}
				</section>
			);
		case 'div':
			return (
				<div id={id} className={cardClasses}>
					{children}
				</div>
			);
		default:
			const _exhaustive: never = wrapper;
			return _exhaustive;
	}
}

export default Card;
