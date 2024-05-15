"use client";
import { HistoryTraverseButton } from "@/components/HistoryTraverseButton";
import { NumberOfGroupsSlider } from "@/components/NumberOfGroupsSlider";
import { ShuffleButton } from "@/components/ShuffleButton";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useShuffledGroups } from "@/hooks/useShuffledGroups";
import { cn } from "@/lib/utils";
import { StudentGroups } from "@components/StudentGroups";
import { useQuery } from "convex/react";
import { RotateCcwIcon, RotateCwIcon, Save, StarIcon } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";
import { toast } from "sonner";
import type { Doc } from "@/convex/_generated/dataModel";
import { SaveGroupsButton } from "@/components/SaveGroupsButton";
import Link from "next/link";

type PageProps = {
	children: ReactNode;
	params: { classId: Id<"classes"> };
	savedGroup: boolean | Id<"savedGroups">;
};

export type StudentGroups = Doc<"students">[][] | undefined;

export default function Page({ params, savedGroup }: PageProps) {
	return (
		<div className='bg-white rounded-tl-3xl  h-full p-4  border border-black/10 w-full ml-4 mt-4 flex items-center justify-center'>
			<span className='font-medium'>
				Select a class or <Link href='/'>create a new one</Link> to get started.
			</span>
		</div>
	);
}
