"use client";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@shadcn/resizable";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Textarea } from "@components/ui/textarea";
import { AddStudentForm } from "@components/AddStudentForm";
import { useState } from "react";
import { NumberOfGroupsSlider } from "@components/NumberOfGroupsSlider";
import { ClassDropdown } from "@/components/ClassDropdown";
export default function Layout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { classId: Id<"classes"> };
}) {
    const [numberOfGroups, setNumberOfGroups] = useState<number>(2);
    const students = useQuery(api.students.getStudentsByClass, { classId: params.classId })!;

    if (!students) {
        return <div>Loading...</div>;
    }

    return (
        <div className="panels h-full">
            <ResizablePanelGroup
                direction="horizontal"
                className="h-full"
            >
                <ResizablePanel
                    collapsible
                    className="p-4 flex gap-4 flex-col bg-background-secondary"
                    defaultSize={15}
                >
                    <ClassDropdown />

                    <NumberOfGroupsSlider
                        setNumberOfGroups={setNumberOfGroups}
                        numberOfGroups={numberOfGroups}
                    />
                    <AddStudentForm classId={params.classId} />
                    <Textarea
                        defaultValue={students.map((student) => student.name).join("\n")}
                        className="bg-white flex-1"
                    />
                </ResizablePanel>
                <ResizableHandle
                    withHandle
                    className="bg-background-secondary"
                />
                <ResizablePanel className="pt-2 pl-2 bg-background-secondary">{children}</ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}
