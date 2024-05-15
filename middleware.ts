import { authMiddleware } from "@clerk/nextjs";
import { NextRequest, NextResponse, userAgent } from "next/server";

import { loggingMiddleware } from "./middleware/loggingMiddleware";
import { responseHeaderMiddleware } from "./middleware/responseHeadersMiddleware";

export default authMiddleware({
	publicRoutes: ["/", "/contact"],
	beforeAuth: (request) => {
		loggingMiddleware(request);
		responseHeaderMiddleware(request);
		return NextResponse.next();
	},
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
