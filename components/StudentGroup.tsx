import React from "react";
import { CardContent, CardFooter, CardHeader, Card, CardTitle } from "@shadcn/card";
import { Button } from "@shadcn/button";
import { Student } from "./Student";
import { Droppable } from "@hello-pangea/dnd";
import { Doc } from "@/convex/_generated/dataModel";
type StudentGroupProps = { students: Doc<"students">[]; groupName: string };

export const StudentGroup: React.FC<StudentGroupProps> = ({ students, groupName }) => {
    return (
        <Droppable droppableId={groupName}>
            {(provided, snapshot) => (
                <li
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="w-fill"
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>{groupName}</CardTitle>
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
                                    />
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button
                                size="sm"
                                variant="outline"
                            >
                                Add Student
                            </Button>
                            <Button
                                className="ml-auto"
                                size="sm"
                                variant="outline"
                            >
                                Remove Student
                            </Button>
                        </CardFooter>
                    </Card>
                    {provided.placeholder}
                </li>
            )}
        </Droppable>
    );
};
