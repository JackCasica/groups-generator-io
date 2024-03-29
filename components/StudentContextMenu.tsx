import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuShortcut,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
} from '@shadcn/context-menu';
import { Id } from '@/convex/_generated/dataModel';
import { Doc } from '@/convex/_generated/dataModel';

type StudentContextMenuProps = {
	children: React.ReactNode;
	studentId: Id<'students'>;
	studentGroups: Doc<'students'>[][];
};

export const StudentContextMenu: React.FC<StudentContextMenuProps> = ({
	children,
	studentId,
	studentGroups,
}) => {
	const deleteStudent = useMutation(api.students.deleteStudent);

	const onSelectHandler = () => {
		deleteStudent({ studentId: studentId })
			.then((deletedStudentId) => {
				console.log(deletedStudentId);
			})
			.catch((error) => {
				// Handle error
				console.error(error);
			});
	};

	return (
		<ContextMenu>
			<ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				<ContextMenuItem onSelect={onSelectHandler}>
					Delete
					<ContextMenuShortcut>⌘[</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem disabled>
					Avoid
					<ContextMenuShortcut>⌘]</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem disabled>
					Lock to Group
					<ContextMenuShortcut>⌘]</ContextMenuShortcut>
				</ContextMenuItem>

				<ContextMenuSub>
					<ContextMenuSubTrigger>Move to Group</ContextMenuSubTrigger>
					<ContextMenuSubContent>
						<ContextMenuRadioGroup>
							<ContextMenuRadioItem value={'1'}>Group 1</ContextMenuRadioItem>
							<ContextMenuRadioItem value={'1'}>Group 2</ContextMenuRadioItem>
							<ContextMenuRadioItem value={'1'}>Group 3</ContextMenuRadioItem>
							<ContextMenuRadioItem value={'1'}>Group 4</ContextMenuRadioItem>
						</ContextMenuRadioGroup>
					</ContextMenuSubContent>
				</ContextMenuSub>
			</ContextMenuContent>
		</ContextMenu>
	);
};
