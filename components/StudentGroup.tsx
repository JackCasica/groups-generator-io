import React from 'react';
import {
	CardContent,
	CardFooter,
	CardHeader,
	Card,
	CardTitle,
} from '@shadcn/card';
import { Button } from '@shadcn/button';
import { Student } from './Student';
import { Droppable } from '@hello-pangea/dnd';
import { Doc } from '@/convex/_generated/dataModel';
type StudentGroupProps = {
	students: Doc<'students'>[];
	groupName: string;
	studentGroups: Doc<'students'>[][];
};

export const StudentGroup: React.FC<StudentGroupProps> = ({
	students,
	groupName,
	studentGroups,
}) => {
	return (
		<Droppable droppableId={groupName}>
			{(provided, snapshot) => (
				<>
					<Card className="bg-gray-600 border-0">
						<CardHeader>
							<CardTitle className="font-extrabold uppercase text-base">
								Group {+groupName + 1}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="flex flex-wrap gap-4">
								{students.map((student, index) => (
									<Student
										key={student.name + index}
										id={student._id}
										name={student.name}
										index={index}
										color={student.color}
										emoji={student.placeholderEmoji}
										studentGroups={studentGroups}
									/>
								))}
							</ul>
						</CardContent>
						<CardFooter>
							<Button
								size="sm"
								variant="ghost"
								className="text-foreground-secondary"
							>
								Add Student
							</Button>
							<Button className="ml-auto" size="sm" variant="ghost">
								Remove Student
							</Button>
						</CardFooter>
					</Card>
					{provided.placeholder}
				</>
			)}
		</Droppable>
	);
};
