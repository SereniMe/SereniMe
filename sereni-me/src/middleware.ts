import {NextResponse, NextRequest} from "next/server";
import {cookies} from "next/headers";
import {verifyToken, verifyTokenJose} from "./utils/jwt";

export const middleware = async (request: NextRequest) => {
<<<<<<< HEAD
  if (
    !request.url.includes("/api") &&
    !request.url.includes("_next/static") &&
    !request.url.includes("_next/image") &&
    !request.url.includes("favicon.ico") &&
    !request.url.includes("/low-poly")
  ) {
    console.log(request.method, request.url);
  }
  if (request.url.includes("/main")) {
    console.log("API", request.method, request.url);
    const cookieStore = cookies();
    const token = cookieStore.get("token");
    console.log("Cookie Store Token", token);
    if (!token) {
      return NextResponse.json({
        statusCode: 401,
        error: "Unauthorized",
      });
    }
    const tokenData = await verifyTokenJose<{ id: string; email: string }>(
      token.value
    );
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", tokenData.id);
    // requestHeaders.set("x-user-email", tokenData.email);
    return NextResponse.next({
      headers: requestHeaders,
    });
  }
  return NextResponse.next();
=======
	if (
		!request.url.includes("/api") &&
		!request.url.includes("_next/static") &&
		!request.url.includes("_next/image") &&
		!request.url.includes("favicon.ico")
	) {
		console.log(request.method, request.url);
	}
	if (request.url.includes("/main")) {
		console.log("API", request.method, request.url);
		const cookieStore = cookies();
		const token = cookieStore.get("token");
		console.log("Cookie Store Token", token);
		if (!token) {
			return NextResponse.redirect(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/signin`
			);
		}
		const tokenData = await verifyTokenJose<{id: string; email: string}>(
			token.value
		);
		const requestHeaders = new Headers(request.headers);
		requestHeaders.set("x-user-id", tokenData.id);
		// requestHeaders.set("x-user-email", tokenData.email);
		return NextResponse.next({
			headers: requestHeaders,
		});
	}
	return NextResponse.next();
>>>>>>> 667e417272a7fa67da6fa9118392e164300e2182
};

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
