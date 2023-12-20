/* tslint:disable */
// @ts-ignore
// "use client";

import {comparePassword} from "@/utils/bcryptjs";
import {signToken} from "@/utils/jwt";
import {redirect} from "next/navigation";
import {z} from "zod";
import {cookies} from "next/headers";
import {getUserByEmail} from "@/db/models/userLogin";

import Link from "next/link";
import React from "react";

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
			return redirect(`${NEXT_PUBLIC_SERVER_URL}/cms?error=${errFinalMessage}`);
		}

		const foundUser = await getUserByEmail(parsedData.data.email);

		if (!foundUser) {
			return redirect(
				`${NEXT_PUBLIC_SERVER_URL}/cms?error=invalid%20email/password`
			);
		}

		if (foundUser.role !== "admin") {
			return redirect(`${NEXT_PUBLIC_SERVER_URL}/cms?error=unauthorized`);
		}

		const compare = comparePassword(
			parsedData.data.password,
			foundUser.password
		);

		if (!compare) {
			return redirect(
				`${NEXT_PUBLIC_SERVER_URL}/cms?error=invalid%20email/password`
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

		return redirect("/cms/home");
	};
	return (
		<div className="bg-[#7B746B] min-h-screen flex flex-row justify-center items-center joined">
			{/* Picture Section */}
			<div className="flex flex-row w-full justify-center items-center">
				<div className="w-[259px] h-full hidden md:block object-cover relative">
					{/* Adjust the image source accordingly */}
					<img
						src="https://images.unsplash.com/photo-1562751362-404243c2eea3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Picture"
						className="w-full h-full object-cover"
					/>
				</div>

				{/* Login Form Section */}
				<div className="w-full max-w-md p-6 bg-white shadow-md text-gray-600">
					<div className="mb-8 text-center">
						<h1 className="my-3 text-3xl font-bold">Sign in</h1>
						<p className="text-sm text-gray-400">
							Sign in to access your account
						</p>
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
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Home;
