"use client";
import { useState } from "react";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams, useRouter } from "next/navigation";

export function ClassDropdown() {
	const { classId } = useParams();
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");
	const classes = useQuery(api.classes.getClasses);

	console.log(classes, "🟢");
	if (!classes) {
		return null;
	}
	const classDoc = classes.find((c) => c._id === classId);

	return (
		<div className="flex flex-col gap-2">
			<h2 className="font-extrabold uppercase text-base">Class</h2>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild={true}>
					<Button
						variant="default"
						role="combobox"
						aria-expanded={open}
						className="w-full justify-between bg-white font-bold"
					>
						{classId
							? `${classDoc?.name} ( ${classDoc?.students.length} Students )`
							: "Select classes..."}
						<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[200px] p-0" align="start">
					<Command>
						<CommandInput placeholder="Search classes..." />
						<CommandEmpty>No framework found.</CommandEmpty>
						<CommandGroup>
							{classes.map((c) => (
								<CommandItem
									key={c._id}
									value={c._id}
									onSelect={(currentValue) => {
										setValue(currentValue === value ? "" : currentValue);
										setOpen(false);

										router.push(`/classes/${currentValue}`);
									}}
								>
									<Check
										className={cn(
											"mr-2 h-4 w-4",
											value === c._id ? "opacity-100" : "opacity-0",
										)}
									/>
									{c.name}
								</CommandItem>
							))}
						</CommandGroup>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	);
}
