'use client';
import { Button, Navbar } from 'flowbite-react';
import { SignInAndSignUpButtons } from './SignInAndSignUpButtons';
export const Topbar = () => {
	return (
		<header className="z-10 sticky top-0">
			<Navbar fluid={true}>
				<Navbar.Brand href="https://flowbite.com">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="mr-3 h-6 sm:h-9"
						alt="Flowbite Logo"
					/>
					<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
						GroupsGenerator.io
					</span>
				</Navbar.Brand>
				<div className="flex items-center gap-3 lg:order-2">
					{/* <Button
						color="green"
						href="/sign-in"
						className="border-0 hover:bg-gray-50 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
					>
						Log in
					</Button>
					<Button color="info" href="/sign-up">
						Get started
					</Button> */}
					<Button color="info" href="/dashboard">
						Dashboard
					</Button>
					<SignInAndSignUpButtons />
					<Navbar.Toggle theme={{ icon: 'h-5 w-5 shrink-0' }} />
				</div>
				<Navbar.Collapse
					theme={{
						list: 'mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-base lg:font-medium',
					}}
					className="lg:order-1"
				>
					<Navbar.Link active={true} href="#" className="rounded-lg">
						Home
					</Navbar.Link>
					<Navbar.Link href="#">Company</Navbar.Link>
					<Navbar.Link href="#">Marketplace</Navbar.Link>
					<Navbar.Link href="#">Features</Navbar.Link>
					<Navbar.Link href="#">Team</Navbar.Link>
					<Navbar.Link href="#">Contact</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default Topbar;
