'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useUser } from '@clerk/clerk-react';
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
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useAction, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useRouter } from 'next/navigation';
import { replaceLastNameWithInitial } from '@/lib/util';
import { toast } from 'sonner';

const FormSchema = z.object({
	className: z
		.string()
		.min(2, {
			message: 'Classname must be at least 2 characters.',
		})
		.max(20, { message: 'Classname must be at most 20 characters.' }),
	students: z.string(),
});

const StudentNamesSchema = z
	.string()
	.array()
	.max(40, { message: 'You can only have 40 students in a class.' });

export function UploadRosterForm() {
	const getUserCreateClass = useAction(api.classes.getUserCreateClass);
	const router = useRouter();

	const { user } = useUser();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			className: '',
			students: '',
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		// Process the data to replace the last name with the initial of the last name
		const processedStudentNames = replaceLastNameWithInitial(data.students);

		const result = StudentNamesSchema.safeParse(processedStudentNames);

		if (result.success) {
			// The data is valid, continue processing
			console.log(result.data);
		} else {
			// Handle the validation error
			form.setError('students', {
				message: result.error.errors[0].message,
			});
			return;
		}

		if (!user || user.id === null) {
			toast('You must be logged in to create a class');
			return;
		}

		// const classId = getUserCreateClass({
		// 	studentNames: processedStudentNames,
		// 	className: data.className,
		// }).catch((err) => {
		// 	toast(err);
		// });

		// // Redirect to the new class
		// router.push(`/classes/${classId}`);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
				<FormField
					control={form.control}
					name="className"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Class Name</FormLabel>
							<FormControl>
								<Input placeholder="Class Name" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="students"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Student Roster</FormLabel>
							<FormControl>
								<Textarea placeholder="Students" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Create Class</Button>
			</form>
		</Form>
	);
}
