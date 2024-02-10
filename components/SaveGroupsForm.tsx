import React from "react";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormMessage, FormControl } from "@/components/ui/form";
import { useParams } from "next/navigation";

type SaveGroupsFormProps = {
    studentGroups: Doc<"students">[][];
};

const FormSchema = z.object({
    student: z.string(),
});

export const SaveGroupsForm: React.FC<SaveGroupsFormProps> = ({ studentGroups }) => {
    const { classId } = useParams();
    const createSavedGroup = useMutation(api.savedGroups.createSavedGroup);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            student: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        await createSavedGroup({ studentGroups: studentGroups, classId: classId as Id<"classes"> });
        form.reset();
        return;
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6"
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
};
