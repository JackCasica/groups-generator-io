import { NextRequest, NextResponse } from "next/server";

export const loggingMiddleware = (request: NextRequest) => {
	console.log(request);
	return NextResponse.next();
};
