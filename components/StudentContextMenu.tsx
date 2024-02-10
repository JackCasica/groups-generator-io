import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuShortcut,
    ContextMenuTrigger,
} from "@shadcn/context-menu";
import { Id } from "@/convex/_generated/dataModel";

type StudentContextMenuProps = {
    children: React.ReactNode;
    studentId: Id<"students">;
};

export const StudentContextMenu: React.FC<StudentContextMenuProps> = ({ children, studentId }) => {
    const deleteStudent = useMutation(api.students.deleteStudent);
    return (
        <ContextMenu>
            <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
            <ContextMenuContent className="w-64">
                <ContextMenuItem
                    inset
                    onSelect={() => deleteStudent({ studentId: studentId })}
                >
                    Delete
                    <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem
                    inset
                    disabled
                >
                    Avoid
                    <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    );
};
