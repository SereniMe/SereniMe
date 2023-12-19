import {createUser} from "@/db/models/userRegister";
import Link from "next/link";
import {redirect} from "next/navigation";
import React from "react";

const RegistPage: React.FC = () => {
	const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

	const handleSubmit = async (data: FormData) => {
		"use server";
		// try {

		console.log(data);

		const inputData = {
			name: data.get("name") as string,
			username: data.get("username") as string,
			email: data.get("email") as string,
			password: data.get("password") as string,
		};

		const newUser = await createUser(inputData);
		console.log(newUser);

		return redirect("/signin");
		// } catch (error) {
		// 	console.log(error);
		// }
	};
	return (
		<>
			<div className="min-h-screen flex flex-row justify-center items-center joined rounded-md drop-shadow-lg">
				{/* Picture Section */}

				<div className="flex flex-row w-full justify-center items-center">
					<section className="w-[403px] h-full hidden md:block object-cover relative">
						<Link
							href={"/"}
							className=" m-2 text-xl absolute z-50  hover:shadow-md rounded-3xl px-3 text-black"
						>
							⪡ Back to Home
						</Link>
						<img
							src="https://images.unsplash.com/photo-1562751362-404243c2eea3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Picture"
							className="w-full h-full object-cover"
						/>
					</section>

					{/* Login Form Section */}
					<div className="w-full max-w-md p-6 bg-white shadow-md text-gray-600">
						<div className="mb-8 text-center">
							<h1 className="my-3 text-3xl font-bold">
								Create your SereniMe Account
							</h1>
						</div>
						<form action={handleSubmit} className="space-y-6">
							<div>
								<label htmlFor="name" className="block mb-2 text-sm">
									Name
								</label>
								<input
									required
									type="name"
									name="name"
									id="name"
									className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
								/>
							</div>

							<div>
								<label htmlFor="username" className="block mb-2 text-sm">
									Username
								</label>
								<input
									required
									type="username"
									name="username"
									id="username"
									className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
								/>
							</div>
							<div className="space-y-4">
								<div>
									<label htmlFor="email" className="block mb-2 text-sm">
										Email address
									</label>
									<input
										required
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
									</div>
									<input
										required
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
										Sign up
									</button>
								</div>
								<p className="px-6 text-sm text-center text-gray-400">
									Already have an account? {"  "}
									<Link
										href="/signin"
										className="hover:underline text-blue-500"
									>
										Sign in
									</Link>
									.
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
export default RegistPage;
