import { Id } from "./_generated/dataModel";
import { v } from "convex/values";
import { ConvexError } from "convex/values";

import { generateRandomEmoji, randomHexColor } from "../lib/util";
import { internal } from "./_generated/api";
import { action, internalMutation, mutation, query } from "./_generated/server";

// You can write data to the database via a mutation:
export const createClass = internalMutation({
	// Validators for arguments.
	args: {
		className: v.string(),
		studentNames: v.optional(v.array(v.string())),
		id: v.id("users"),
	},

	// Mutation implementation.
	handler: async (ctx, args): Promise<Id<"classes">> => {
		//// Insert or modify documents in the database here.
		//// Mutations can also read from the database like queries.
		//// See https://docs.convex.dev/database/writing-data.

		if (args.studentNames === undefined) {
			throw new ConvexError("Student names are required");
		}

		// Create new student documents and get their ids
		const newStudentsIds = await Promise.all(
			args.studentNames?.map(async (studentName) => {
				const newStudentId = await ctx.db.insert("students", {
					name: studentName,
					rules: { avoid: null },
					color: randomHexColor(),
					placeholderEmoji: generateRandomEmoji(),
				});
				console.log("Added new student with id:", newStudentId);
				return newStudentId;
			}),
		);

		// Create new class object, passing in the new student ids
		const newClass = {
			name: args.className,
			students: newStudentsIds,
			user: args.id,
		};

		// Insert the new class document and get its id
		const classConvexId = await ctx.db.insert("classes", newClass);

		// Store the class id in the user's document

		// Optionally, return the class id from your mutation.
		return classConvexId;
	},
});
/*





*/
// You can write data to the database via a mutation:
export const addStudentToClass = mutation({
	// Validators for arguments.
	args: {
		classId: v.id("classes"),
		studentName: v.string(),
	},

	// Mutation implementation.
	handler: async (ctx, args) => {
		//// Insert or modify documents in the database here.
		//// Mutations can also read from the database like queries.
		//// See https://docs.convex.dev/database/writing-data.

		const newStudentId = await ctx.db.insert("students", {
			name: args.studentName,
			rules: { avoid: null },
			color: randomHexColor(),
			placeholderEmoji: generateRandomEmoji(),
		});
		const classDoc = await ctx.db.get(args.classId);

		if (!classDoc) {
			return;
		}

		const updatedStudents = [...classDoc.students, newStudentId];

		await ctx.db.patch(args.classId, { students: updatedStudents });

		console.log(
			`Added new student (${newStudentId}) to class (${args.classId})`,
		);
		// Optionally, return a value from your mutation.
		// return id;
	},
});
/*





*/
// Get a list of classes of the current user via a query:
export const getClasses = query({
	// Query implementation.
	handler: async (ctx) => {
		console.log("running", "🟢");
		const user = await ctx.auth.getUserIdentity();

		console.log(user, "🟢");

		if (!user) return;
		const userId = await ctx.db
			.query("users")
			.withIndex("by_clerkId", (q) => q.eq("clerkId", user.tokenIdentifier))
			.unique();

		if (!userId) return;

		const classes = await ctx.db
			.query("classes")
			.filter((q) => q.eq(q.field("user"), userId._id))
			.collect();

		return classes;
	},
});
/*





*/
export const getClassById = query({
	// Validators for arguments.
	args: {
		id: v.id("classes"),
	},
	// Query implementation.
	handler: async (ctx, args) => {
		//// Read the database as many times as you need here.
		//// See https://docs.convex.dev/database/reading-data.
		const classDoc = await ctx.db.get(args.id);
		return classDoc;
	},
});
/*





*/
export const getUserCreateClass = action({
	args: {
		studentNames: v.optional(v.array(v.string())),
		className: v.string(),
	},
	handler: async (ctx, args): Promise<Id<"classes">> => {
		const userIdentity = await ctx.auth.getUserIdentity();

		if (!userIdentity) {
			throw new ConvexError("You must be logged in to create a class");
		}

		const user = await ctx.runQuery(internal.users.getUserByClerkId, {
			clerkId: userIdentity.tokenIdentifier,
		});

		if (!user) {
			throw new ConvexError("User not found");
		}

		const classId = await ctx.runMutation(internal.classes.createClass, {
			className: args.className,
			studentNames: args.studentNames,
			id: user._id,
		});

		if (!classId) {
			throw new ConvexError("Unable to create class. Please try again later.");
		}

		return classId;
	},
});
