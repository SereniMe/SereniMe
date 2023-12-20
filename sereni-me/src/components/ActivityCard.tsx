"use client";

import {useScrollBlock} from "@/utils/scrollToggle";
import {ObjectId} from "mongodb";
import Image from "next/image";
import {useState} from "react";
import {activity} from "./MainActivities";

type props = {
	activity: activity;
};

const handleLike = (id: string) => {
	//add to favorites
	console.log(id);
};

const ActivityCard = (props: props) => {
	const id = props.activity.thumbnail.split("/");

	const [play, setPlay] = useState(false);
	const [liked, setLiked] = useState(false);

	const [blockScroll, allowScroll] = useScrollBlock();

	let cardClass = "";
	if (liked) {
		cardClass =
			"flex flex-col w-[16rem] h-[20rem] object-cover overflow-hidden rounded-xl gap-3 shadow-lg shadow-yellow-700 pb-4 justify-between hover:cursor-pointer border-solid dark:border-yellow-500 dark:bg-amber-950 dark:bg-opacity-40 border-2 bg-violet-200 bg-opacity-60 border-yellow-500";
	} else {
		cardClass =
			"flex flex-col w-[16rem] h-[20rem] object-cover overflow-hidden rounded-xl gap-3 shadow-lg shadow-[#00000077] pb-4 justify-between hover:cursor-pointer border-solid dark:border-amber-900 dark:bg-amber-950 dark:bg-opacity-40 border-2 bg-violet-200 bg-opacity-60 border-violet-500";
	}
	return (
		<div className={cardClass}>
			{play == true ? (
				<div>
					<button
						onClick={() => {
							setPlay(false);
							allowScroll();
						}}
						className="fixed top-0 left-0 right-0 bottom-0 border-none m-4 p-0 overflow-hidden z-30 w-10 h-10 text-4xl invert"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							shapeRendering="geometricPrecision"
							textRendering="geometricPrecision"
							imageRendering="optimizeQuality"
							fillRule="evenodd"
							clipRule="evenodd"
							viewBox="0 0 512 512"
						>
							<path
								fillRule="nonzero"
								d="M512 256c0 70.684-28.658 134.695-74.981 181.019C390.695 483.342 326.684 512 256 512c-70.691 0-134.695-28.658-181.019-74.981C28.658 390.695 0 326.691 0 256S28.658 121.305 74.981 74.981C121.305 28.658 185.309 0 256 0c70.684 0 134.695 28.658 181.019 74.981C483.342 121.305 512 185.309 512 256zm-203.996-74.996c16.956-29.411-6.608-43.961-23.788-27.542l-95.915 84.235c-15.318 15.31-15.318 21.288 0 36.606l95.915 84.235c17.26 16.303 40.686 2.086 23.788-27.55L263.456 256l44.548-74.996zm102.987 229.987C450.648 371.334 475.19 316.518 475.19 256c0-60.526-24.542-115.334-64.199-154.991C371.334 61.352 316.518 36.81 256 36.81c-60.526 0-115.334 24.542-154.991 64.199C61.352 140.666 36.81 195.474 36.81 256c0 60.526 24.542 115.334 64.199 154.991C140.666 450.648 195.474 475.19 256 475.19c60.518 0 115.334-24.542 154.991-64.199z"
							/>
						</svg>
					</button>
					{/* <video
						className="fixed top-0 left-0 right-0 bottom-0 w-full h-full border-none m-0 p-0 overflow-hidden z-20"
						preload="auto"
						controls
						autoPlay
					>
						<source
							src={`https://drive.google.com/uc?export=download&id=${video[5]}`}
							type="video/mp4"
						/>
					</video> */}
				</div>
			) : (
				""
			)}

			<img
				src={`https://drive.google.com/uc?export=view&id=${id[5]}`}
				width={400}
				height={400}
				alt="CardImage"
				className=" hover:scale-110 transition ease-in-out duration-200 object-cover h-[10rem]"
				onClick={() => {
					if (!play) {
						setPlay(true);
						blockScroll();
					}
				}}
			/>

			<h1
				className="px-4"
				onClick={() => {
					if (!play) {
						setPlay(true);
						blockScroll();
					}
				}}
			>
				{props.activity.name}
			</h1>
			<div className="flex justify-between pr-4">
				<p className="px-4 w-4/5">{props.activity.tags.join(", ")}</p>
				<button
					className="px-2 py-1 text-black z-10"
					onClick={() => {
						handleLike(props.activity._id as string);
						setLiked(!liked);
					}}
				>
					{liked && (
						<Image
							src={"/heartred.png"}
							alt=""
							width={200}
							height={200}
							className="w-6 h-6"
						/>
					)}
					{/* filter: invert(39%) sepia(67%) saturate(1577%) hue-rotate(331deg) brightness(136%) contrast(107%); */}
					{!liked && (
						<Image
							src={"/heart.png"}
							alt=""
							width={200}
							height={200}
							className="invert w-6 h-6"
						/>
					)}
				</button>
			</div>
		</div>
	);
};

export default ActivityCard;
