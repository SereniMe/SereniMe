"use client";

import Image from "next/image";
import {useState} from "react";

type props = {
	video: {
		name: string;
		videoUrl: string;
		tags: string[];
		thumbnail: string;
	};
};
const VideoCard = (props: props) => {
	const id = props.video.thumbnail.split("/");
	const video = props.video.videoUrl.split("view");

	const [play, setPlay] = useState(false);

	return (
		<div
			className="flex flex-col w-[16rem] h-[20rem] object-cover overflow-hidden rounded-lg gap-3 shadow-lg shadow-[#6a99ac77] pb-4 justify-between hover:cursor-pointer"
			onClick={() => setPlay(true)}
		>
			{play == true && (
				<iframe
					src={`${video[0]}preview`}
					frameBorder="0"
					width="100%"
					height="500px"
					allowFullScreen
				></iframe>
			)}
			{play == false && (
				<Image
					src={`https://drive.google.com/uc?export=view&id=${id[5]}`}
					width={400}
					height={400}
					alt="CardImage"
					className=" hover:scale-110 transition ease-in-out duration-200"
				/>
			)}

			<h1 className="px-4">{props.video.name}</h1>
			<p className="px-4 ">{props.video.tags}</p>
			<p className="px-4">Video</p>
		</div>
	);
};

export default VideoCard;
