"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Input } from "./ui/input";
import { replaceLastNameWithInitial } from "@/lib/util";

type AddStudentFormProps = {
    children?: React.ReactNode;
    classId: Id<"classes">;
};

const FormSchema = z.object({
    student: z.string(),
});

export function AddStudentForm({ classId }: AddStudentFormProps) {
    const addStudentToClass = useMutation(api.classes.addStudentToClass);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            student: "",
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
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6"
            >
                <FormField
                    control={form.control}
                    name="student"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Student Roster</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Student"
                                    className="bg-white"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>Add a Student</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Add Student</Button>
            </form>
        </Form>
    );
}
