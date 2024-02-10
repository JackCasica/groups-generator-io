import { v } from "convex/values";

import { internalMutation, internalQuery } from "./_generated/server";

// You can write data to the database via a mutation. This mutation creates a new user document. Internal mutations are not exposed to the client.
export const createNewUser = internalMutation({
    args: {
        name: v.string(),
        email: v.string(),
        clerkId: v.string(),
    },
    handler: async (ctx, args) => {
        const newUserId = await ctx.db.insert("users", {
            name: args.name,
            email: args.email,
            clerkId: `${process.env.CLERK_JWT_ISSUER_DOMAIN}|${args.clerkId}`,
            classes: [],
        });
        return newUserId;
    },
});
/*





*/
export const getUserByClerkId = internalQuery({
    args: {
        clerkId: v.string(),
    },
    handler: async (ctx, args) => {
        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkId))
            .unique();
        return user;
    },
});
