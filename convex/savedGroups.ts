import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createSavedGroup = mutation({
    args: {
        studentGroups: v.array(v.array(v.id("students"))),
        classId: v.id("classes"),
    },
    handler: async (ctx, args) => {
        const savedGroup = await ctx.db.insert("savedGroups", {
            groups: args.studentGroups,
            classId: args.classId,
        });
        return savedGroup;
    },
});
