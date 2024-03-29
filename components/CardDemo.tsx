'use client';

import Image from 'next/image';
import { FC } from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { Doc } from '@/convex/_generated/dataModel';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnimatedTooltipPreview } from './AnimatedTooltipPreview';

type CardProps = {
	classDoc: Doc<'classes'>;
};

export const CardDemo: FC<CardProps> = ({ classDoc }) => {
	return (
		<CardContainer className="inter-var w-full">
			<CardBody className="bg-primary-light relative group/card   border-black/[0.1]  w-full h-auto rounded-xl p-6 border  ">
				<CardItem
					translateZ="50"
					className="text-xl font-bold text-primary-dark "
				>
					{classDoc?.name || 'Class Name'}
				</CardItem>
				<CardItem
					as="p"
					translateZ="60"
					className="text-neutral-500 text-sm max-w-sm mt-2 "
				>
					Hover over this card to unleash the power of CSS perspective
				</CardItem>
				<CardItem translateZ="100" className="w-full mt-4 flex flex-wrap gap-4">
					{/* <Link href={`/classes/${classDoc._id}`}>
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</Link>
					<Link href={`/classes/${classDoc._id}`}>
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</Link>
					<Link href={`/classes/${classDoc._id}`}>
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</Link>
					<Link href={`/classes/${classDoc._id}`}>
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</Link>
					<Link href={`/classes/${classDoc._id}`}>
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</Link>
					<Link href={`/classes/${classDoc._id}`}>
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</Link>
					<Link href={`/classes/${classDoc._id}`}>
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</Link> */}
					<AnimatedTooltipPreview />
				</CardItem>
				<AnimatedTooltipPreview />
				<div className="flex justify-between items-center mt-20">
					<CardItem
						translateZ={20}
						as="button"
						className="px-4 py-2 rounded-xl text-xs font-normal "
					>
						Try now →
					</CardItem>
					<CardItem
						translateZ={20}
						as="button"
						className="px-4 py-2 rounded-xl bg-black  text-white text-xs font-bold"
					>
						<Link href={`/classes/${classDoc._id}`}>Sign up</Link>
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	);
};
