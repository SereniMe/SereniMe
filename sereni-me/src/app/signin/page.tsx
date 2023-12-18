import {comparePassword} from "@/utils/bcryptjs";
import {signToken} from "@/utils/jwt";
import Link from "next/link";
import {redirect} from "next/navigation";
import React from "react";
import {z} from "zod";
import {cookies} from "next/headers";
import {getUserByEmail} from "@/db/models/userLogin";

const Home: React.FC = () => {
	const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
	const handleLogin = async (data: FormData) => {
		"use server";

		const email = data.get("email");
		const password = data.get("password");

		const loginInputSchema = z.object({
			email: z.string().email(),
			password: z.string(),
		});

		const parsedData = loginInputSchema.safeParse({
			email,
			password,
		});

		if (!parsedData.success) {
			const errPath = parsedData.error.issues[0].path[0];
			const errMessage = parsedData.error.issues[0].message;
			const errFinalMessage = `${errPath} - ${errMessage}`;

			// Mengembalikan error via redirect
			return redirect(
				`${NEXT_PUBLIC_SERVER_URL}/login?error=${errFinalMessage}`
			);
		}

		const foundUser = await getUserByEmail(parsedData.data.email);

		if (!foundUser) {
			return redirect(
				`${NEXT_PUBLIC_SERVER_URL}/login?error=invalid%20email/password`
			);
		}

		const compare = comparePassword(
			parsedData.data.password,
			foundUser.password
		);

		if (!compare) {
			return redirect(
				`${NEXT_PUBLIC_SERVER_URL}/login?error=invalid%20email/password`
			);
		}

		const payload = {
			id: foundUser._id,
			email: foundUser.email,
			name: foundUser.name,
			username: foundUser.username,
		};

		const token = signToken(payload);

		cookies().set("token", token, {
			httpOnly: true,
			secure: false,
			expires: new Date(Date.now() + 1000 * 3600),
			sameSite: "strict",
		});

		return redirect("/");
	};
	return (
		<div className="bg-gray-100 min-h-screen flex flex-row justify-center items-center joined rounded-md drop-shadow-lg">
			<div className="flex flex-row w-full justify-center items-center">
				<section className="w-[280px] h-full hidden md:block object-cover relative">
					<img
						src="https://images.unsplash.com/photo-1562751362-404243c2eea3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Picture"
						className="w-full h-full object-cover"
					/>
				</section>

				<div className="w-full max-w-md p-6 bg-white shadow-md text-gray-600">
					<div className="mb-8 text-center">
						<h1 className="my-3 text-3xl font-bold">Sign in</h1>
						<p className="text-sm text-gray-400">Sign in to SereniMe</p>
					</div>
					<form action={handleLogin} className="space-y-6">
						<div className="space-y-4">
							<div>
								<label htmlFor="email" className="block mb-2 text-sm">
									Email address
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
								/>
							</div>
							<div>
								<div className="flex justify-between mb-2">
									<label htmlFor="password" className="text-sm">
										Password
									</label>
									<a href="#" className="text-xs hover:underline text-gray-400">
										Forgot password?
									</a>
								</div>
								<input
									type="password"
									name="password"
									id="password"
									className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
								/>
							</div>
						</div>
						<div className="space-y-2">
							<div>
								<button
									type="submit"
									className="w-full px-8 py-3 font-semibold rounded-md bg-blue-500 text-white"
								>
									Sign in
								</button>
							</div>
							<p className="px-6 text-sm text-center text-gray-400">
								Don't have an account yet? {"  "}
								<Link
									href="/register"
									className="hover:underline text-blue-500"
								>
									Sign up
								</Link>
								.
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Home;
