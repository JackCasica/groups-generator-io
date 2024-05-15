import { NextRequest, NextResponse } from "next/server";

export const responseHeaderMiddleware = (request: NextRequest) => {
	// Create a response object.
	const response = NextResponse.next();

	// Set custom headers in the response.
	response.headers.set("Test-Header", "SUCCESS");

	// Continue to the next Middleware or route handler.
	return response;
};
