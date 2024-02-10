import Clerk, { DeletedObjectJSON, UserJSON } from "@clerk/clerk-sdk-node";
import { WebhookEvent } from "@clerk/clerk-sdk-node";
import { httpRouter } from "convex/server";
import { ConvexError } from "convex/values";
import { Webhook } from "svix";

import { internal } from "./_generated/api";
import { httpAction } from "./_generated/server";

const http = httpRouter();
const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

// THis http action creates a new user document from a webhook when Clerk receives a new user.
http.route({
    path: "/clerk",
    method: "POST",
    handler: httpAction(async (ctx, request) => {
        if (!CLERK_WEBHOOK_SECRET) {
            throw new Error("Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local");
        }
        // Get the headers
        const svix_id = request.headers.get("svix-id");
        const svix_timestamp = request.headers.get("svix-timestamp");
        const svix_signature = request.headers.get("svix-signature");

        // If there are no headers, error out
        if (!svix_id || !svix_timestamp || !svix_signature) {
            return new Response("Error occured -- no svix headers", {
                status: 400,
            });
        }

        // Get the body
        const payload = await request.json();
        const body = JSON.stringify(payload);

        // Create a new Svix instance with your secret.
        const webhook = new Webhook(CLERK_WEBHOOK_SECRET);

        let webhookEvent: WebhookEvent;

        // Verify the payload with the headers
        try {
            webhookEvent = webhook.verify(body, {
                "svix-id": svix_id,
                "svix-timestamp": svix_timestamp,
                "svix-signature": svix_signature,
            }) as WebhookEvent;
        } catch (err) {
            console.error("Error verifying webhook:", err);
            return new Response("Error occured", {
                status: 400,
            });
        }

        // If the event is a create event
        if (webhookEvent.type === "user.created") {
            const userData = webhookEvent.data;
            await ctx.runMutation(internal.users.createNewUser, {
                name: `${userData.first_name} ${userData.last_name}`,
                email: userData.email_addresses[0]?.email_address,
                clerkId: userData.id,
            });

            return new Response("", { status: 200 });
        }

        return new Response("", { status: 200 });
    }),
});

export default http;
