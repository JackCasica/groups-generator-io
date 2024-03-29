'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';

import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { Input } from './ui/input';
import { replaceLastNameWithInitial } from '@/lib/util';
import { PlusIcon } from 'lucide-react';

type AddStudentFormProps = {
	children?: React.ReactNode;
	classId: Id<'classes'>;
};

const FormSchema = z.object({
	student: z.string().nonempty('Student name is required'),
});

export function AddStudentForm({ classId }: AddStudentFormProps) {
	const addStudentToClass = useMutation(api.classes.addStudentToClass);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			student: '',
		},
	});

	const onSubmit = async (data: z.infer<typeof FormSchema>) => {
		const processedStudentNames = replaceLastNameWithInitial(data.student);

		await addStudentToClass({ classId, studentName: processedStudentNames[0] });
		form.reset();
		return;
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
				<FormField
					control={form.control}
					name="student"
					render={({ field }) => (
						<FormItem>
							{/* <FormLabel className="font-extrabold uppercase text-base">
								Add a Student
							</FormLabel> */}
							<FormControl>
								<div className="flex gap-2">
									<Input
										placeholder="Student"
										className="bg-white"
										{...field}
									/>
									<Button type="submit">
										<PlusIcon size={16} strokeWidth={3} />
									</Button>
								</div>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}
