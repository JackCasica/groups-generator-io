import { Id } from '@/convex/_generated/dataModel';
import { Doc } from '@/convex/_generated/dataModel';
import { cn } from '@/lib/utils';
import { Draggable } from '@hello-pangea/dnd';
import React from 'react';

import { StudentContextMenu } from './StudentContextMenu';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { generateRandomEmoji } from '@/lib/util';

type StudentProps = {
	name: string;
	index: number;
	id: Id<'students'>;
	color?: string;
	emoji?: string;
	studentGroups: Doc<'students'>[][];
};

export const Student: React.FC<StudentProps> = ({
	name,
	index,
	id,
	studentGroups,
	emoji,
}) => {
	return (
		<Draggable draggableId={id} index={index}>
			{(provided) => (
				<StudentContextMenu studentId={id} studentGroups={studentGroups}>
					<li
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						className={cn('w-fit h-fit ')}
					>
						<Badge className=" font-extrabold text-xl  bg-primary-light flex gap-4 pl-0 ">
							<Avatar className="scale-150">
								{/* <AvatarImage src="https://github.com/shadcn.png" /> */}
								<AvatarFallback className="bg-primary">
									{emoji || generateRandomEmoji()}
								</AvatarFallback>
							</Avatar>
							{name}
						</Badge>
					</li>
				</StudentContextMenu>
			)}
		</Draggable>
	);
};
