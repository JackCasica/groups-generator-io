import { SignInAndSignUpButtons } from '@components/SignInAndSignUpButtons';
import { Button } from '@shadcn/button';
import Link from 'next/link';
import React from 'react';

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<header className="flex justify-between p-2 pl-4 p items-center ">
			<Link href="/">
				<h1 className="font-extrabold text-2xl">GroupsGenerator.io</h1>
			</Link>
			<div className="flex items-center gap-4">
				<ul className="flex items-center gap-4 font-semibold">
					<li>
						<Link href="/classes">Classes</Link>
					</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
				<Button
					variant="default"
					className=" text-white bg-primary-dark text-base font-bold py-[12px] px-[16px]  h-fit flex gap-2"
				>
					My Classes
					<SignInAndSignUpButtons />
				</Button>
			</div>
		</header>
	);
};
