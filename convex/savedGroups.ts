import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

export const createSavedGroup = mutation({
	args: {
		studentGroups: v.array(v.array(v.id('students'))),
		classId: v.id('classes'),
	},
	handler: async (ctx, args) => {
		// Save the groups to the database
		const savedGroupId = await ctx.db.insert('savedGroups', {
			groups: args.studentGroups,
			classId: args.classId,
		});
		return savedGroupId;
	},
});

export const removeSavedGroup = mutation({
	args: {
		savedGroupId: v.id('savedGroups'),
	},
	handler: async (ctx, args) => {
		await ctx.db.delete(args.savedGroupId);
	},
});

export const getSavedGroupsByClass = query({
	args: {
		classId: v.id('classes'),
	},
	handler: async (ctx, args) => {
		const savedGroups = await ctx.db
			.query('savedGroups')
			.filter((q) => q.eq(q.field('classId'), args.classId))
			.collect();
		return savedGroups;
	},
});
