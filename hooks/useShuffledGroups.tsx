import { useEffect, useState } from "react";
import { Doc } from "@/convex/_generated/dataModel";
import { createGroups } from "@/lib/utils";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
export type StudentGroup = Doc<"students">[];
export type StudentGroups = Doc<"students">[][];

export type History = StudentGroups[];

export function useShuffledGroups(students: StudentGroup, numberOfGroups: number, studentsPerGroup: number = 0) {
    const shuffledStudentGroups = createGroups<Doc<"students">>(students, numberOfGroups, 0);
    const [history, setHistory] = useState<History>([shuffledStudentGroups || []]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const save = useMutation(api.savedGroups.createSavedGroup);

    const shuffleGroups = () => {
        // Shuffle the groups
        const newGroups = createGroups(students, numberOfGroups, studentsPerGroup);

        const prevGroups = [...history.slice(0, currentIndex + 1)];

        if (!newGroups || !prevGroups) {
            // Handle the error here, e.g., by showing an error message to the user
            return;
        }

        // Add the new arrangement to the history and increment the current index
        setHistory([...prevGroups, newGroups]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    useEffect(() => {
        // When the students or the number of groups changes, update the history
        const newGroups = createGroups(students, numberOfGroups, studentsPerGroup);
        if (newGroups) {
            setHistory([newGroups]);
            setCurrentIndex(0);
        }
    }, [students, numberOfGroups, studentsPerGroup]);

    const goBack = () => {
        // Decrement the current index but don't go below 0
        setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };

    const goForward = () => {
        // Increment the current index but don't go above the length of the history - 1
        setCurrentIndex((prevIndex) => Math.min(history.length - 1, prevIndex + 1));
    };

    const saveCurrentGroups = async (classId: Id<"classes">) => {
        // Save the current arrangement of groups to the database

        // The current arrangement of groups is history[currentIndex]
        const currentGroups = history[currentIndex].map((group) => group.map((student) => student._id));
        const savedGroupId = await save({ classId: classId, studentGroups: currentGroups });
        return savedGroupId;
    };

    // The current arrangement of groups is history[currentIndex]
    const currentGroups = history[currentIndex];

    return { currentGroups, shuffleGroups, goBack, goForward, saveCurrentGroups };
}
