import React from 'react';
type BottomMenuProps = {};

export const BottomMenu: React.FC<BottomMenuProps> = ({}) => {
	return (
		<div className="absolute bottom-0 left-0 justify-center p-4 w-full bg-white dark:bg-gray-800 z-20">
			<ul className="pb-4 pl-2 mb-4 space-y-2 border-b border-gray-200 dark:border-gray-700">
				<li>
					<a
						href="/"
						className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white group"
					>
						<svg
							aria-hidden="true"
							className="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
							<path
								fill-rule="evenodd"
								d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
								clip-rule="evenodd"
							/>
						</svg>
						<span className="ml-2">Settings</span>
					</a>
				</li>
				<li>
					<a
						href="/"
						className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white group"
					>
						<svg
							aria-hidden="true"
							className="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
						</svg>
						<span className="ml-2">Help & getting started</span>
					</a>
				</li>
			</ul>
			<button
				id="dropdownUserNameButton"
				data-dropdown-toggle="dropdownUserName"
				className="flex justify-between items-center p-2 my-4 w-full rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-50 dark:hover-bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
				type="button"
			>
				<span className="sr-only">Open user menu</span>
				<div className="flex items-center">
					<img
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
						className="mr-3 w-8 h-8 rounded-full"
						alt="Bonnie avatar"
					/>
					<div className="text-left">
						<div className="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">
							Bonnie Green
						</div>
						<div className="text-sm text-gray-500 dark:text-gray-400">
							name@flowbite.com
						</div>
					</div>
				</div>
				<svg
					className="w-5 h-5 text-gray-500 dark:text-gray-400"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
					<title>title</title>
				</svg>
			</button>
			<div
				id="dropdownUserName"
				className="hidden z-10 w-60 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
				data-popper-placement="top"
			>
				<a
					href="/"
					className="flex items-center py-3 px-4 rounded hover:bg-gray-50 dark:hover:bg-gray-600"
				>
					<img
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
						className="mr-3 w-8 h-8 rounded-full"
						alt="Micheal avatar"
					/>
					<div className="text-left">
						<div className="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">
							Micheal Gough
						</div>
						<div className="text-sm text-gray-500 dark:text-gray-400">
							michael@flowbite.com
						</div>
					</div>
				</a>
				<a
					href="/"
					className="flex items-center py-3 px-4 rounded hover:bg-gray-50 dark:hover:bg-gray-600"
				>
					<img
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
						className="mr-3 w-8 h-8 rounded-full"
						alt="Roberta avatar"
					/>
					<div className="text-left">
						<div className="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">
							Roberta Casas
						</div>
						<div className="text-sm text-gray-500 dark:text-gray-400">
							roberta@flowbite.com
						</div>
					</div>
				</a>
			</div>
			<a
				href="/"
				className="flex items-center pl-2 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white group"
			>
				<svg
					aria-hidden="true"
					className="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
				</svg>
				<span className="ml-2">Invite team members</span>
			</a>
		</div>
	);
};
