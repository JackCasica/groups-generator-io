import React from 'react';
import { SideNavItem } from './SideNavItem';
import { HiFlag, HiHome } from 'react-icons/hi';
import { ClassList } from './ClassList';
import { BottomMenu } from './BottomMenu';
import { Dropdown } from 'flowbite-react';
import { DropdownItem } from './DropdownItem';

export const SideNav = () => {
	return (
		<aside
			id="sidebar-team-switch"
			className=" top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0 hidden md:block"
			aria-label="Sidebar"
		>
			<div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 ">
				<button
					id="dropdownCompanyNameButton"
					data-dropdown-toggle="dropdownCompanyName"
					className="flex justify-between items-center p-2 w-full rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-50 dark:hover-bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
					type="button"
				>
					<span className="sr-only">Open user menu</span>
					<div className="flex items-center">
						<img
							src="https://flowbite.com/docs/images/logo.svg"
							className="mr-3 h-7"
							alt="Flowbite Logo"
						/>
						<div>
							<div className="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">
								Flowbite
							</div>
							<div className="text-sm text-gray-500 dark:text-gray-400">
								Team plan
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

				<DropdownItem />
				<DropdownItem />
				<ul className="mt-5 space-y-2">
					<SideNavItem
						text="Home"
						href="/"
						icon={
							<HiHome className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
						}
					/>

					<li>
						<button
							type="button"
							className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
							aria-controls="dropdown-tasks"
							data-collapse-toggle="dropdown-tasks"
						>
							<svg
								aria-hidden="true"
								className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
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
							<span className="flex-1 ml-3 text-left whitespace-nowrap">
								My Tasks
							</span>
							<svg
								className="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
								<title>title</title>
							</svg>
						</button>
						<ul id="dropdown-tasks" className="hidden py-2 space-y-2">
							<li>
								<a
									href="/"
									className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
								>
									To do
								</a>
							</li>
							<li>
								<a
									href="/"
									className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
								>
									In progress
								</a>
							</li>
							<li>
								<a
									href="/"
									className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
								>
									Completed
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a
							href="/"
							className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
						>
							<svg
								aria-hidden="true"
								className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
								<path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
							</svg>
							<span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
							<span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
								6
							</span>
						</a>
					</li>
				</ul>
				{/* <div className="pt-5 pl-2 mt-5 mb-4 text-sm text-gray-500 border-t border-gray-200 dark:text-gray-400 dark:border-gray-700">
					<h3>Class List</h3>
				</div>
				<ul className="pl-2 space-y-4">
					<li>
						<a
							href="/"
							className="flex items-center text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:underline dark:text-white group"
						>
							<span className="w-4 h-4 rounded bg-primary-600" />
							<span className="ml-3">Flowbite library</span>
						</a>
					</li>
					<li>
						<a
							href="/"
							className="flex items-center text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:underline dark:text-white group"
						>
							<span className="w-4 h-4 bg-teal-400 rounded" />
							<span className="ml-3">Themesberg</span>
						</a>
					</li>
					<li>
						<a
							href="/"
							className="flex items-center text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:underline dark:text-white group"
						>
							<span className="w-4 h-4 bg-orange-300 rounded" />
							<span className="ml-3">Flowbite blocks</span>
						</a>
					</li>
					<li>
						<a
							href="/"
							className="flex items-center text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:underline dark:text-white group"
						>
							<span className="w-4 h-4 bg-purple-500 rounded" />
							<span className="ml-3">Iconscale</span>
						</a>
					</li>
					<li>
						<a
							href="/"
							className="flex items-center text-base font-medium text-gray-900 rounded-lg transition duration-75 dark:text-gray-200 group"
						>
							<svg
								className="w-4 h-4 rounded border border-gray-200 dark:border-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
									clip-rule="evenodd"
								/>
								<title>title</title>
							</svg>
							<span className="ml-3 text-gray-500 dark:text-gray-400 hover:underline">
								Add new project
							</span>
						</a>
					</li>
				</ul> */}
				<ClassList />
			</div>
			<BottomMenu />
		</aside>
	);
};
