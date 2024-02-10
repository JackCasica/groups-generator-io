"use client";
import { StudentGroups } from "@components/StudentGroups";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { createGroups } from "@/lib/utils";
import { AddStudentForm } from "@/components/AddStudentForm";
import { NumberOfGroupsSlider } from "@/components/NumberOfGroupsSlider";
import { Doc } from "@/convex/_generated/dataModel";
import { SaveGroupsForm } from "@/components/SaveGroupsForm";
import { Shuffle } from "lucide-react";
type pageProps = { children: React.ReactNode; params: { classId: Id<"classes"> } };

export type StudentGroups = Doc<"students">[][];

export default function Page({ params }: pageProps) {
    const [numberOfGroups, setNumberOfGroups] = useState<number>(2);
    const classData = useQuery(api.classes.getClassById, { id: params.classId })!;
    const students = useQuery(api.students.getStudentsByClass, { classId: params.classId })!;

    const studentGroups = createGroups<Doc<"students">>(students, numberOfGroups, 0);

    const [shuffledStudents, setShuffledStudents] = useState<StudentGroups>(studentGroups);

    return (
        <div className="bg-primary-light rounded-tl-lg  h-full p-4">
            <div className="flex w-full justify-between">
                <NumberOfGroupsSlider
                    setNumberOfGroups={setNumberOfGroups}
                    numberOfGroups={numberOfGroups}
                />
                {/* <SaveGroupsForm studentGroups={studentGroups} /> */}
                <Button
                    onClick={() => {
                        const newGroups = createGroups(students, numberOfGroups, 0);
                        return setShuffledStudents(newGroups);
                    }}
                    className="gap-2"
                >
                    Shuffle
                    <Shuffle
                        size={16}
                        strokeWidth={3}
                    />
                </Button>
            </div>
            {classData && students && (
                <StudentGroups
                    studentGroups={studentGroups}
                    classData={classData}
                />
            )}
        </div>
    );
}
