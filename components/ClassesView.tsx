import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";

type ClassesViewProps = {};

export const ClassesView: React.FC<ClassesViewProps> = ({}) => {
    const classes = useQuery(api.classes.getClasses);
    return (
        <div className="classes-view">
            {classes?.map((c) => (
                <div key={c._id}>{c.name}</div>
            ))}
        </div>
    );
};
