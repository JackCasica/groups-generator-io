import { Doc } from "@/convex/_generated/dataModel";
import { ClassValue, clsx, type } from "clsx";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// forward refs
export function fr<T = HTMLElement, P = React.HTMLAttributes<T>>(component: ForwardRefRenderFunction<T, P>) {
    const wrapped = forwardRef(component);
    wrapped.displayName = component.name;
    return wrapped;
}

// styled element
export function se<T = HTMLElement, P extends React.HTMLAttributes<T> = React.HTMLAttributes<T>>(
    Tag: keyof React.ReactHTML,
    ...classNames: ClassValue[]
) {
    const component = fr<T, P>(({ className, ...props }, ref) => (
        // @ts-expect-error Too complicated for TypeScript
        <Tag
            ref={ref}
            className={cn(...classNames, className)}
            {...props}
        />
    ));
    component.displayName = Tag[0].toUpperCase() + Tag.slice(1);
    return component;
}

// Shuffle Students
export function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    console.log(newArray);
    return newArray;
}

// Create groups of students based on either: 1) number of groups, or 2) number of students per group
export function createGroups<T>(students: T[], numberOfGroups: number, studentsPerGroup: number): T[][] | undefined {
    if (!students) return undefined;

    const shuffledStudents = shuffleArray<T>(students);

    console.log(shuffledStudents);
    const groups: T[][] = [];
    if (studentsPerGroup) {
        for (let i = 0; i < shuffledStudents.length; i += studentsPerGroup) {
            groups.push(shuffledStudents.slice(i, i + studentsPerGroup));
        }
    } else {
        for (let i = 0; i < numberOfGroups; i++) {
            groups.push([]);
        }
        for (let i = 0; i < shuffledStudents.length; i++) {
            groups[i % numberOfGroups].push(shuffledStudents[i]);
        }
    }
    return groups;
}
