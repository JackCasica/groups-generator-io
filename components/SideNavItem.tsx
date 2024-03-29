import Link from 'next/link';
import React from 'react';
type SideNavItemProps = {
	text: string;
	href: string;
	icon: React.ReactNode;
};

export const SideNavItem: React.FC<SideNavItemProps> = ({
	text,
	href,
	icon,
}) => {
	return (
		<li>
			<Link
				href={href}
				className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
			>
				{/* <svg
					aria-hidden="true"
					className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
				</svg> */}
				{icon}
				<span className="ml-3">{text}</span>
			</Link>
		</li>
	);
};
