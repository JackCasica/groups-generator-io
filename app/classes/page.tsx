"use client";
import { ClassCard } from "@/components/ClassCard";
import { UploadRosterForm } from "@/components/UploadRosterForm";
import { Card } from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function Page({ children }: { children: React.ReactNode }) {
    const classes = useQuery(api.classes.getClasses);

    return (
        <>
            <div className="grid grid-cols-3 gap-4 p-4 ">
                {classes?.map((c) => (
                    <ClassCard
                        classId={c._id}
                        className={c.name}
                        key={c._id}
                    />
                ))}
                <Card className="p-4">
                    <UploadRosterForm />
                </Card>
            </div>
        </>
    );
}
