'use client';
import type { Id } from '@/convex/_generated/dataModel';
import type React from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Badge } from '@components/ui/badge';
import { X } from 'lucide-react';
import { Skeleton } from '@components/ui/skeleton';
import { useState } from 'react';
import { AddStudentForm } from '@components/AddStudentForm';
type StudentBadgesProps = {
	classId: Id<'classes'>;
};

export const StudentBadges: React.FC<StudentBadgesProps> = ({ classId }) => {
	const [addStudentFormVisible, setAddStudentFormVisible] = useState(false);
	const students = useQuery(api.students.getStudentsByClass, { classId });

	const addStudentButtonHandler = () => {
		setAddStudentFormVisible(true);
	};

	return (
		<div className="flex flex-col gap-2">
			<h2 className="font-extrabold uppercase text-base">{`Students (${
				students?.length || 0
			})`}</h2>
			<ul className="flex flex-wrap gap-2">
				{students?.map((student) => (
					<Badge
						key={student._id}
						className="w-fit gap-1 bg-[#171006]/10 text-white font-extrabold text-lg tracking-normal"
					>
						<span>{student.name}</span>
						<X size={12} strokeWidth={3} className="cursor-pointer" />
					</Badge>
				))}
				{!students && (
					<>
						<Skeleton className="h-4 w-12 rounded-sm bg-black/10" />
						<Skeleton className="h-4 w-12 rounded-sm bg-black/10 " />
						<Skeleton className="h-4 w-12 rounded-sm bg-black/10 " />
						<Skeleton className="h-4 w-12 rounded-sm bg-black/10 " />
						<Skeleton className="h-4 w-12 rounded-sm bg-black/10 " />
					</>
				)}

				<Badge
					className="w-fit gap-1 bg-[#171006]/10 text-white font-extrabold text-lg tracking-normal"
					onClick={addStudentButtonHandler}
				>
					{addStudentFormVisible ? (
						<AddStudentForm classId={classId} />
					) : (
						'+ Add Student'
					)}
				</Badge>
			</ul>
		</div>
	);
};
