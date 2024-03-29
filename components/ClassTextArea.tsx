import React from 'react';
import { Textarea } from '@components/ui/textarea';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
type ClassTextAreaProps = {
	classId: string;
};

export const ClassTextArea: React.FC<ClassTextAreaProps> = ({ classId }) => {
	console.log(classId, '🔴');
	const students = useQuery(api.students.getStudentsByClass, {
		classId: classId as Id<'classes'>,
	})!;

	if (!students) {
		return null;
	}

	console.log(students);
	return (
		<Textarea
			defaultValue={students.map((student) => student.name).join('\n')}
			className="bg-white flex-1"
		/>
	);
};
