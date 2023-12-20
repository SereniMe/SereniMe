"use client";

import Link from "next/link";
import React, {Dispatch, FormEvent, SetStateAction, useState} from "react";

const AudioModal = ({
	setOpen,
}: {
	setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	const submitHandler = async (e: FormEvent) => {
		e.preventDefault();
		console.log(input);

		// setOpen(false);
		const inputForm = new FormData();
		inputForm.append("name", input.name);
		inputForm.append("audioUrl", input.audioUrl);
		inputForm.append("tags", input.tags.toString());
		inputForm.append("imageUrl", input.imageUrl);

		const response = await fetch(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/api/audios`,
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
		audioUrl: "",
		tags: "",
		imageUrl: "",
	});

	const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
		setInput({...input, [e.currentTarget.name]: e.currentTarget.value});
	};
	return (
		<>
			<div className="flex justify-center items-center  dark:text-gray-100 w-screen h-screen bg-black m-0 p-0 absolute left-0 right-0 top-0 bottom-0 bg-opacity-50">
				<div>
					<section>
						<form
							onSubmit={(e) => submitHandler(e)}
							// className="flex flex-col justify-center items-center bg-gradient-to-tr from-[#ccb0be] to-[#9389bd] bg-opacity-70 dark:bg-[#70605b] drop-shadow-sm rounded-lg "
							className="flex flex-col justify-center items-center bg-gradient-to-r from-20%-[#9389bd] via-500%-[#ccb0be] to-30%-[#9389bd] bg-opacity-70 dark:bg-[#70605b] drop-shadow-md rounded-lg "
						>
							<fieldset className="flex flex-col justify-center items-center gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
								<div className="space-y-2 col-span-full lg:col-span-1">
									<p className="font-large text-white">Add new Audio</p>
									<p className="">Please fill out the new information here.</p>
								</div>
								<div className="col-span-full ">
									<div className="col-span-full">
										<label htmlFor="name" className="text-sm">
											Name
										</label>
										<input
											id="name"
											type="text"
											name="name"
											onChange={changeHandler}
											className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900  pl-3"
										/>
									</div>
									<div className="col-span-full">
										<label htmlFor="name" className="text-sm">
											Audio Url (Google Drive Link)
										</label>
										<input
											id="name"
											name="audioUrl"
											onChange={changeHandler}
											type="text"
											className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900  pl-3"
										/>
									</div>
									<div className="col-span-full">
										<label htmlFor="name" className="text-sm">
											Tags
										</label>
										<input
											id="name"
											name="tags"
											onChange={changeHandler}
											type="text"
											className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900  pl-3"
										/>
									</div>
									<div className="col-span-full">
										<label htmlFor="name" className="text-sm">
											Thumbnail
										</label>
										<input
											id="name"
											name="imageUrl"
											onChange={changeHandler}
											type="text"
											className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900  pl-3"
										/>
									</div>
									<div className="col-span-full">
										{/* update button */}
										<div className="flex flex-col justify-center items-center">
											<button className="mt-5 bg-black text-white hover:bg-gray-200 rounded-md text-[#F4B81F];font-bold py-2 px-4 hover:text-black hover:scale-110 transition-all active:scale-90 ">
												Add
											</button>
										</div>
									</div>
								</div>
							</fieldset>
						</form>
					</section>
				</div>
			</div>
		</>
	);
};

export default AudioModal;
