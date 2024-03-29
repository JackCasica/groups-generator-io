import { Button as FlowbiteButton } from 'flowbite-react';
import React from 'react';
import { HiChevronRight } from 'react-icons/hi';

type ButtonProps = {};

export const Button: React.FC<ButtonProps> = ({}) => {
	return (
		<FlowbiteButton
			color="info"
			href="#"
			size="lg"
			className="[&>span]:items-center"
		>
			Learn more
			<HiChevronRight className="-mr-1 ml-2 h-5 w-5" />
		</FlowbiteButton>
	);
};
