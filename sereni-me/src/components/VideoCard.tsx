"use client";

import {ObjectId} from "mongodb";
import Image from "next/image";
import {useState} from "react";
import Video from "./Video";

type props = {
	video: {
		_id: ObjectId;
		name: string;
		videoUrl: string;
		tags: string[];
		thumbnail: string;
	};
};
const VideoCard = (props: props) => {
	const id = props.video.thumbnail.split("/");

	const [play, setPlay] = useState(false);

	return (
		<div
			className="flex flex-col w-[16rem] h-[20rem] object-cover overflow-hidden rounded-lg gap-3 shadow-lg shadow-[#6a99ac77] pb-4 justify-between hover:cursor-pointer"
			onClick={() => setPlay(true)}
		>
			{play == true && (
				<Video source="https://www.youtube.com/embed/XhW_ZsFZZIk?si=DQezYMnhWbJOOV1D&autoplay=1" />
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
