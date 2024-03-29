"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Link from "next/link";

export default function Page() {
    const classes = useQuery(api.classes.getClasses);

    return (
        <div>
            {classes?.map((c) => (
                <Link
                    key={c._id}
                    href={`/classes/${c._id}`}
                >
                    {c.name}
                </Link>
            ))}
            {/* <StudentGroups /> */}
        </div>
    );
}
