import { create } from "zustand";

export type Group = {
    id: string;
    groupName: string;
    students: string[];
};

type State = {
    groups: Group[];
    increaseGroups: (newGroup: Group) => void;
    decreaseGroups: () => void;
};

export const useStudentGroupsStore = create<State>((set) => ({
    groups: [
        {
            id: "1",
            groupName: "Group 1",
            students: ["John Doe", "Jane Doe"],
        },
        {
            id: "2",
            groupName: "Group 2",
            students: ["Jose Doe", "Alicia Doe"],
        },
    ],
    increaseGroups: (newGroup: Group) => set((state) => ({ groups: [...state.groups, newGroup] })),
    decreaseGroups: () => set((state) => ({ groups: state.groups.slice(0, -1) })),
}));
