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
import { SaveGroupsButton } from "@/components/SaveGroupsButton";
import Link from "next/link";

type PageProps = {
	children: ReactNode;
	params: { classId: Id<"classes"> };
	savedGroup: boolean | Id<"savedGroups">;
};

// export type StudentGroups = Doc<'students'>[][];

export default function Page({ params, savedGroup }: PageProps) {
	// const [numberOfGroups, setNumberOfGroups] = useState<number>(2);
	// const classData = useQuery(
	// 	api.classes.getClassById,
	// 	params ? { id: params.classId } : 'skip',
	// );
	// const students = useQuery(
	// 	api.students.getStudentsByClass,
	// 	params ? { classId: params.classId } : 'skip',
	// );

	// const [savedId, setSavedId] = useState<PageProps['savedGroup']>(
	// 	savedGroup || false,
	// );

	// const { currentGroups, shuffleGroups, goBack, goForward, saveCurrentGroups } =
	// 	useShuffledGroups(students || [], numberOfGroups, 0);

	// const saveAction = () => {
	// 	saveCurrentGroups(params.classId)
	// 		.then((savedGroupId) => {
	// 			console.log(savedGroupId);
	// 			toast('Groups saved!');
	// 			setSavedId(savedGroupId);
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 			toast('Something went wrong. Please try again later.');
	// 		});
	// };

	// if (!classData || !students) {
	// 	return null;
	// }

	return (
		<div className='h-full p-4 w-full flex items-center justify-center'>
			{/* <div className="flex w-full justify-between">
				<NumberOfGroupsSlider
					setNumberOfGroups={setNumberOfGroups}
					numberOfGroups={numberOfGroups}
				/>
				<HistoryTraverseButton variant="back" clickAction={goBack} />
				<ShuffleButton shuffleGroupsFn={shuffleGroups} />
				<HistoryTraverseButton variant="forward" clickAction={goForward} />
				<SaveGroupsButton saveGroupsFn={saveAction} savedId={savedId} />
			</div>
			<StudentGroups studentGroups={currentGroups} classData={classData} /> */}
			<span className='font-medium'>
				Select a class or <Link href='/'>create a new one</Link> to get started.
			</span>
		</div>
	);
}
