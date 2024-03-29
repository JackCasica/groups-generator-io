import { SocialProof } from "@/components/SocialProof";
import { Button } from "flowbite-react";
import { HiChevronRight } from "react-icons/hi";

import { UpdatesBadge } from "./UpdatesBadge";

export const Hero = () => {
	return (
		<section className='bg-white dark:bg-gray-900'>
			<div className='mx-<auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16'>
				<UpdatesBadge />
				<h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl'>
					Free Groups Generator
				</h1>
				<p className='mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48'>
					A simple groups generator for teachers and students.
				</p>
				<div className='mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16'>
					<Button
						color='info'
						href='#'
						size='lg'
						className='[&>span]:items-center'
					>
						Learn more
						<HiChevronRight className='-mr-1 ml-2 h-5 w-5' />
					</Button>
					<Button
						color='gray'
						outline={true}
						size='lg'
						className='[&>span]:items-center'
					>
						<svg
							className='-ml-1 mr-2 h-5 w-5'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<title>play</title>
							<path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z' />
						</svg>
						Watch video
					</Button>
				</div>
				<SocialProof />
			</div>
		</section>
	);
};

export default Hero;
