"use client";
import React, {
	Dispatch,
	FormEvent,
	SetStateAction,
	SyntheticEvent,
	useState,
} from "react";

const ActivityModal = ({
	setOpen,
}: {
	setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	const submitHandler = async () => {
		console.log(input);

		// setOpen(false);
		const inputForm = new FormData();
		inputForm.append("name", input.name);
		inputForm.append("content", input.content);
		inputForm.append("tags", input.tags.toString());
		inputForm.append("thumbnail", input.thumbnail);

		const response = await fetch(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/api/activities`,
			{
				method: "POST",
				body: inputForm,
			}
		);

		const responsejson = await response.json();
		console.log(responsejson);

		setOpen(false);
	};

	const [input, setInput] = useState({
		name: "",
		content: "",
		tags: [""],
		thumbnail: "",
	});

	const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
		setInput({...input, [e.currentTarget.name]: e.currentTarget.value});
	};

	const arrayChange = (e: any) => {
		if (e.target.checked) {
			setInput({...input, tags: [...input.tags, e.target.name]});
		}
	};
	return (
		<>
			<div className="flex justify-center items-center  dark:text-gray-100 w-screen h-screen bg-black m-0 p-0 absolute left-0 right-0 top-0 bottom-0 bg-opacity-50">
				<div>
					<section>
						<section
							// className="flex flex-col justify-center items-center bg-gradient-to-tr from-[#ccb0be] to-[#9389bd] bg-opacity-70 dark:bg-[#70605b] drop-shadow-sm rounded-lg "
							className="flex flex-col justify-center items-center bg-gradient-to-r from-20%-[#9389bd] via-500%-[#ccb0be] to-30%-[#9389bd] bg-opacity-70 dark:bg-[#70605b] drop-shadow-md rounded-lg "
						>
							<fieldset className="flex flex-col justify-center items-center gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
								<div className="space-y-2 col-span-full lg:col-span-1">
									<p className="font-large text-white">Add new Activity</p>
									<p className="">Please fill out the new information here.</p>
								</div>
								<form className="col-span-full " action={submitHandler}>
									<div className="col-span-full">
										<label htmlFor="name" className="text-sm">
											Name
										</label>
										<input
											id="name"
											type="text"
											name="name"
											value={input.name}
											onChange={changeHandler}
											className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
										/>
									</div>
									<div className="col-span-full">
										<label htmlFor="name" className="text-sm">
											Content
										</label>
										<input
											type="text"
											id="description"
											name="content"
											value={input.content}
											onChange={changeHandler}
											className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
										></input>
									</div>
									<div className="col-span-full">
										<input
											id="stress"
											name="Stress"
											type="checkbox"
											defaultChecked={false}
											value="Stress"
											onChange={arrayChange}
											className="mr-2 focus:ring focus:ring-gray-400 dark:border-gray-700 dark:text-white"
										/>
										<label htmlFor="stress" className="text-sm mr-5">
											Stress
										</label>

										<input
											id="anxiety"
											type="checkbox"
											name="Anxiety"
											defaultChecked={false}
											onChange={arrayChange}
											value="Anxiety"
											className="mr-2 focus:ring focus:ring-gray-400 dark:border-gray-700 dark:text-white"
										/>
										<label htmlFor="anxiety" className="text-sm mr-5">
											Anxiety
										</label>

										<input
											id="focus"
											name="Focus"
											value="Focus"
											onChange={arrayChange}
											type="checkbox"
											defaultChecked={false}
											className="mr-2 focus:ring focus:ring-gray-400 dark:border-gray-700 dark:text-white"
										/>
										<label htmlFor="focus" className="text-sm mr-5">
											Focus
										</label>

										<input
											id="innerPeace"
											name="Inner Peace"
											value="Inner Peace"
											onChange={arrayChange}
											type="checkbox"
											defaultChecked={false}
											className="mr-2 focus:ring focus:ring-gray-400 dark:border-gray-700 dark:text-white"
										/>
										<label htmlFor="innerPeace" className="text-sm mr-5">
											Inner Peace
										</label>

										{/* update button */}

										<div className="col-span-full">
											<label htmlFor="name" className="text-sm">
												Thumbnail (Google Drive Link)
											</label>
											<input
												id="name"
												type="text"
												name="thumbnail"
												value={input.thumbnail}
												onChange={changeHandler}
												className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
											/>
										</div>
										<div className="flex flex-col justify-center items-center">
											<button
												type="submit"
												className="mt-5 bg-black text-white hover:bg-gray-200 rounded-md text-[#F4B81F];font-bold py-2 px-4 hover:text-black hover:scale-110 transition-all active:scale-90 "
											>
												Add
											</button>
										</div>
									</div>
								</form>
							</fieldset>
						</section>
					</section>
				</div>
			</div>
		</>
	);
};

export default ActivityModal;
