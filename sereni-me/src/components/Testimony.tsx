import Image from "next/image";
import React from "react";
import Container from "@/components/Container";

const Testimonials = () => {
	return (
		<Container>
			<div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
				<div className="lg:col-span-2 xl:col-auto">
					<div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
						<p className="text-2xl leading-normal ">
							Share a real <Mark>testimonial</Mark>
							that hits some of your benefits from one of your popular customer.
						</p>

						<Avatar
							image="/monk.jpeg"
							name="MeditationMaster20"
							title="VP Sales at Google"
						/>
					</div>
				</div>
				<div className="">
					<div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
						<p className="text-2xl leading-normal ">
							Make sure you only pick the <Mark>right sentence</Mark>
							to keep it short and simple.
						</p>

						<Avatar
							image="/monk.jpeg"
							name="Monk"
							title="Lead marketer at Netflix"
						/>
					</div>
				</div>
				<div className="">
					<div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
						<p className="text-2xl leading-normal ">
							This is the most <Mark>awesome</Mark> Stress Relief Website
							I&apos;ve seen. I would use this anytime.
						</p>

						<Avatar
							image="/monk.jpeg"
							name="Zen"
							title="Co-founder of Acme Inc"
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};

function Avatar(props: {image: string; name: string; title: string}) {
	return (
		<div className="flex items-center mt-8 space-x-3">
			<div className="flex-shrink-0 overflow-hidden rounded-full">
				<Image
					src={props.image}
					width="400"
					height="400"
					alt="Avatar"
					className="h-14 w-14 object-cover"
				/>
			</div>
			<div>
				<div className="text-lg font-medium">{props.name}</div>
				<div className="text-gray-600 dark:text-gray-400">{props.title}</div>
			</div>
		</div>
	);
}

function Mark(props: {children: string}) {
	return (
		<>
			{" "}
			<mark className="text-[#032332] bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-[#5E7A8B] dark:bg-[#5E7A8B] dark:text-indigo-200">
				{props.children}
			</mark>{" "}
		</>
	);
}

export default Testimonials;
