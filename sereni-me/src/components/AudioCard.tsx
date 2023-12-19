"use client";
import {CafeScene} from "@/app/(3dscenes)/CafeScene";
import {FarmScene} from "@/app/(3dscenes)/FarmScene";
import {ForestCampScene} from "@/app/(3dscenes)/ForestCampU";
import {LighthouseScene} from "@/app/(3dscenes)/LighthouseSceneU";
import {StreetScene} from "@/app/(3dscenes)/StreetScene";
import {WinterScene} from "@/app/(3dscenes)/WinterScene";
import {useScrollBlock} from "@/utils/scrollToggle";
import {ObjectId} from "mongodb";
import Image from "next/image";
import {useState} from "react";

type props = {
	audio: {
		_id?: string | undefined | ObjectId;
		name: string;
		audioUrl: string;
		tags: string;
		imageUrl: string;
	};
};

const AudioCard = (props: props) => {
	const [play, setPlay] = useState(false);
	const [blockScroll, allowScroll] = useScrollBlock();
	const audio = props.audio.audioUrl.split("/");
	console.log(props.audio.imageUrl);
	const id = props.audio.imageUrl.split("/");

	return (
		<div
			className="flex flex-col w-[16rem] h-[20rem] object-cover overflow-hidden rounded-lg gap-3 shadow-lg shadow-[#6a99ac77] pb-4 justify-between hover:cursor-pointer	"
			onClick={() => {
				if (!play) {
					setPlay(true);
					blockScroll();
				}
			}}
		>
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
					<div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full border-none m-0 p-0 overflow-hidden z-20">
						{props.audio.name == "Thunderstorm" && <WinterScene />}
						{props.audio.name == "City Streets" && <StreetScene />}
						{props.audio.name == "Beach Sounds" && <LighthouseScene />}
						{props.audio.name == "Forest Sound" && <ForestCampScene />}
						{props.audio.name == "Cozy Winter Fireplace" && <WinterScene />}
						{props.audio.name == "Gentle Rain" && <WinterScene />}
						{props.audio.name == "Farm" && <FarmScene />}
						{props.audio.name == "Cafe Ambience" && <CafeScene />}
						<div className=" -translate-y-[10rem] w-[25rem] flex flex-col items-center bg-[#292828b9] rounded-2xl translate-x-[40dvw] px-10 py-4 shadow-md shadow-teal-500">
							<h1 className="px-4 text-2xl">{props.audio.name}</h1>
							<p className="px-4">{props.audio.tags}</p>
							<audio controls autoPlay className="z-40 w-full" loop>
								<source
									src={`https://docs.google.com/uc?id=${audio[5]}`}
								></source>
							</audio>
						</div>
					</div>
				</div>
			) : (
				""
			)}
			<Image
				src={`https://drive.google.com/uc?export=view&id=${id[5]}`}
				width={400}
				height={400}
				alt="CardImage"
				className=" hover:scale-110 transition ease-in-out duration-200 object-cover h-[10rem]"
			/>
			<h1 className="px-4">{props.audio.name}</h1>
			<p className="px-4">{props.audio.tags}</p>
		</div>
	);
};

export default AudioCard;
