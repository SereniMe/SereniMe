import React from "react";

const UserPage: React.FC = () => {
	const handleEditProfile = async (formdata: FormData) => {
		"use server";
		console.log(formdata);

		const inputFormData = new FormData();

		inputFormData.append("fullName", formdata.get("name") as string);
		inputFormData.append("address", formdata.get("address") as string);
		inputFormData.append("phone", formdata.get("phone") as string);
		inputFormData.append(
			"interests",
			`${formdata.get("Stress") as string},${
				formdata.get("Anxiety") as string
			},${formdata.get("Focus") as string},${
				formdata.get("Inner Peace") as string
			}`
		);

		const response = await fetch(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/api/profiles/1`,
			{
				method: "PUT",
				body: inputFormData,
			}
		);

		console.log(await response.json());

		// const response2 = await fetch(
		//   `${process.env.NEXT_PUBLIC_SERVER_URL}/api/profiles`,
		//   {
		//     method: "GET",
		//   }
		// );

		// console.log(await response2.json());
	};
	return (
		<>
			<div className="flex flex-row justify-center space-x-2 rounded-lg drop-shadow-md ml-60 mt-20">
				{/* <div className="flex space-x-8"></div> */}
				<div className="flex flex-col justify-center max-w-xs p-6 shadow-md sm:px-12 bg-[#9389bd] bg-opacity-70 dark:bg-[#70605b] dark:bg-opacity-70 dark:text-gray-100">
					<img
						src="https://source.unsplash.com/150x150/?portrait?3"
						alt=""
						className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
					/>
					<div className="space-y-4 text-center divide-y dark:divide-gray-500">
						<div className="my-2 space-y-1">
							<h2 className="text-xl font-semibold sm:text-2xl">
								Leroy Jenkins
							</h2>
						</div>
						{/* tags */}
						<div className="flex-1">
							<div className="px-6 pt-4 pb-2">
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
									#photography
								</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
									#travel
								</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
									#winter
								</span>
							</div>
						</div>
					</div>
				</div>
				{/* form */}
				<div>
					<section className="flex flex-col justify-center items-center p-6 bg-[#9389bd] bg-opacity-80  dark:bg-[#70605b] dark:bg-opacity-60 drop-shadow-sm">
						<form
							className="container flex flex-col mx-auto space-y-12"
							action={handleEditProfile}
						>
							<section className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-[#70605b] dark:bg-opacity-70">
								<div className="space-y-2 col-span-full lg:col-span-1">
									<p className="font-medium">Personal Information</p>
									<p className="text-xs">
										Please fill out your new information here..
									</p>
								</div>
								<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
									<div className="col-span-full sm:col-span-3">
										<label htmlFor="name" className="text-sm">
											Name
										</label>
										<input
											id="name"
											name="name"
											type="text"
											className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-400 dark:text-white"
										/>
									</div>
									<div className="col-span-full">
										<label htmlFor="address" className="text-sm">
											Address
										</label>
										<input
											id="address"
											name="address"
											type="text"
											placeholder=""
											className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-400 dark:text-white"
										/>
									</div>
									<div className="col-span-full sm:col-span-2">
										<label htmlFor="phone" className="text-sm">
											Phone
										</label>
										<input
											id="phone"
											name="phone"
											type="text"
											placeholder=""
											className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-white"
										/>
									</div>
									<div className="col-span-full">
										<label htmlFor="interest" className="text-sm">
											Interest
										</label>
										<div className="flex items-center mt-5">
											<input
												id="stress"
												name="Stress"
												type="checkbox"
												className="mr-2 focus:ring focus:ring-gray-400 dark:border-gray-700 dark:text-white"
											/>
											<label htmlFor="stress" className="text-sm mr-5">
												Stress
											</label>

											<input
												id="anxiety"
												type="checkbox"
												name="Anxiety"
												className="mr-2 focus:ring focus:ring-gray-400 dark:border-gray-700 dark:text-white"
											/>
											<label htmlFor="anxiety" className="text-sm mr-5">
												Anxiety
											</label>

											<input
												id="focus"
												name="Focus"
												type="checkbox"
												className="mr-2 focus:ring focus:ring-gray-400 dark:border-gray-700 dark:text-white"
											/>
											<label htmlFor="focus" className="text-sm mr-5">
												Focus
											</label>

											<input
												id="innerPeace"
												name="Inner Peace"
												type="checkbox"
												className="mr-2 focus:ring focus:ring-gray-400 dark:border-gray-700 dark:text-white"
											/>
											<label htmlFor="innerPeace" className="text-sm mr-5">
												Inner Peace
											</label>
										</div>
										<button className="mt-5 bg-grey-800 hover:bg-gray-200 rounded-md text-white font-bold py-2 px-4 hover:text-black hover:scale-110 transition-all active:scale-90 ">
											Update
										</button>
									</div>
								</div>
							</section>
						</form>
					</section>
				</div>
			</div>
		</>
	);
};

export default UserPage;
