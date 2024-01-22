/* eslint-disable @next/next/no-img-element */
'use client';

import { Carousel } from 'react-responsive-carousel';
import './carousel.css';

type Props = {
	imageLinks: string[];
};

export function PhotoCarousel({ imageLinks }: Props) {
	return (
		<Carousel
			showThumbs={true}
			infiniteLoop={true}
			autoPlay={true}
			interval={5000}
			transitionTime={500}
			className='container'
			thumbWidth={100}
			showIndicators={false}
		>
			{imageLinks.map((imageLink, index) => (
				<div key={index}>
					<img src={imageLink} alt='' loading='eager' />
				</div>
			))}
		</Carousel>
	);
}
