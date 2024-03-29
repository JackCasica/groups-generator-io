'use client';
import React from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';

type ClassListProps = {
	classId: Id<'classes'>;
};

export const ClassList: React.FC<ClassListProps> = ({ classId }) => {
	const students = useQuery(api.students.getStudentsByClass, {
		classId: 'jh746bceesxrt1gp5v4mjtxh856k75rg',
	});

	return (
		<>
			<div className="pt-5 pl-2 mt-5 mb-4 text-sm text-gray-500 border-t border-gray-200 dark:text-gray-400 dark:border-gray-700">
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
			</ul>
		</>
	);
};
