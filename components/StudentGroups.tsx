"use client";
import React from "react";
import { StudentGroup } from "./StudentGroup";
import { ShuffleButton } from "./ShuffleButton";
import { DragDropContext } from "@hello-pangea/dnd";
import { useCallback } from "react";
import { Doc } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";

type StudentGroupsProps = {
    studentGroups: Doc<"students">[][];
    classData: Doc<"classes">;
};

export function StudentGroups({ studentGroups, classData }: StudentGroupsProps) {
    // const groups: Group[] = useStudentGroupsStore((state) => state.groups);

    const onDragEnd = useCallback(() => {
        // the only one that is required
    }, []);

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="container mx-auto px-4 py-6">
                <div
                    className={cn(
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6",
                        studentGroups.length === 2 && "lg:grid-cols-2"
                    )}
                >
                    {studentGroups.map((group, index) => (
                        <StudentGroup
                            key={index}
                            groupName={`${index}`}
                            students={group}
                        />
                    ))}
                </div>
            </div>
        </DragDropContext>
    );
}
