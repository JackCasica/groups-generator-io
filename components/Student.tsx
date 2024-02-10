import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { StudentContextMenu } from "./StudentContextMenu";

type StudentProps = { name: string; index: number; id: Id<"students">; color?: string };

export const Student: React.FC<StudentProps> = ({ name, index, id, color }) => {
    return (
        <Draggable
            draggableId={id}
            index={index}
        >
            {(provided, snapshot) => (
                <StudentContextMenu studentId={id}>
                    <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={cn(`px-4 py-2 w-fit h-fit rounded-lg bg-slate-300 font-gilroy  font-black `, color)}
                        style={{ backgroundColor: color }}
                    >
                        {name}
                    </li>
                </StudentContextMenu>
            )}
        </Draggable>
    );
};
