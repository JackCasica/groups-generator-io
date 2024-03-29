import Link from 'next/link';
import React from 'react';
import { HiChevronRight } from 'react-icons/hi';

type UpdatesBadgeProps = {};

export const UpdatesBadge: React.FC<UpdatesBadgeProps> = ({}) => {
	return (
		<Link
			href="/"
			className="mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
		>
			<span className="mr-3 rounded-full bg-primary-600 px-4 py-1.5 text-xs text-white">
				New
			</span>
			&nbsp;
			<span className="text-sm font-medium">Get started for free today</span>
			<HiChevronRight className="ml-2 h-5 w-5" />
		</Link>
	);
};
