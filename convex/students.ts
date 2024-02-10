import { Doc, Id } from "./_generated/dataModel";
import { v } from "convex/values";

import { api } from "./_generated/api";
import { action, mutation, query } from "./_generated/server";

// export const getStudentsByClass = action({
//     args: {
//         classId: v.id("classes"),
//     },
//     // Query implementation.
//     handler: async (ctx, args): Promise<Doc<"students">[]> => {
//         //// Read the database as many times as you need here.
//         //// See https://docs.convex.dev/database/reading-data.
//         const queryResponse = await ctx.runQuery(api.classes.getClassById, { id: args.classId });

//         if (!queryResponse) return [];

//         const { students: studentIds } = queryResponse;

//         const students = await Promise.all(
//             studentIds.map(async (studentId) => {
//                 const student = await ctx.runQuery(api.students.getStudentById, { id: studentId });
//                 return student;
//             })
//         );

//         const existingStudents = students.filter((student) => student !== null) as Doc<"students">[];
//         return existingStudents;
//     },
// });

export const getStudentsByClass = query({
    args: {
        classId: v.id("classes"),
    },
    // Query implementation.
    handler: async (ctx, args): Promise<Doc<"students">[]> => {
        //// Read the database as many times as you need here.
        //// See https://docs.convex.dev/database/reading-data.
        const queryResponse = await ctx.db.get(args.classId);

        if (!queryResponse) return [];

        const { students: studentIds } = queryResponse;

        const students = await Promise.all(
            studentIds.map(async (studentId) => {
                const student = await ctx.db.get(studentId);
                return student;
            })
        );

        const existingStudents = students.filter((student) => student !== null) as Doc<"students">[];
        return existingStudents;
    },
});
/*





*/
export const getStudentById = query({
    // Validators for arguments.
    args: {
        id: v.id("students"),
    },
    // Query implementation.
    handler: async (ctx, args) => {
        //// Read the database as many times as you need here.
        //// See https://docs.convex.dev/database/reading-data.
        const student = await ctx.db.get(args.id);
        return student;
    },
});

export const deleteStudent = mutation({
    args: {
        studentId: v.id("students"),
    },
    handler: async (ctx, args) => {
        const user = await ctx.auth.getUserIdentity();
        console.log(user);
        await ctx.db.delete(args.studentId);
    },
});
