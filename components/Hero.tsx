import React from 'react';

import { Authenticated, Unauthenticated } from 'convex/react';

import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

type HeroProps = {};

export const Hero: React.FC<HeroProps> = ({}) => {
	return (
		<section className="bg-green-500">
			<p className="font-extrabold uppercase text-base text-foreground-secondary">
				Student Groups Generator
			</p>
			<h1 className="text-7xl font-extrabold my-8 text-primary-dark">
				Free Groups Generator
			</h1>
			<TypewriterEffectSmooth
				words={[
					{ text: 'Free', className: 'text-primary text-7xl' },
					{ text: 'Groups', className: 'text-primary text-7xl' },
					{ text: 'Generator', className: 'text-primary text-7xl' },
				]}
			/>
			<p className="text-2xl font-medium text-text-light ">
				A free tool for generating groups.
			</p>

			{/* <Authenticated></Authenticated> */}
			<Unauthenticated>
				<p>Click one of the buttons in the top right corner to sign in.</p>
			</Unauthenticated>
		</section>
	);
};
