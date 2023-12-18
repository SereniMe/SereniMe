import AudioCard from "@/components/AudioCard";
import VideoCard from "@/components/VideoCard";
import {getAudios} from "@/db/models/audio";
import {getVideos} from "@/db/models/video";
import {ObjectId} from "mongodb";

type video = {
	_id?: ObjectId | string;
	name: string;
	videoUrl: string;
	tags: string[];
	thumbnail: string;
};

type audio = {
	_id?: ObjectId | string;
	name: string;
	audioUrl: string;
	tags: string[];
	imageUrl: string;
};

const Main = async () => {
	const videos = (await getVideos()) as video[];
	const audios = (await getAudios()) as audio[];

	return (
		<main className="flex flex-col w-full justify-center mx-[10rem] gap-8">
			<div className="w-full flex flex-col justify-center gap-5">
				<h1 className="text-4xl">Today's Dailies</h1>
				<h1 className="text-2xl">Videos</h1>
				<div className="flex justify-start w-full gap-10 flex-wrap">
					{videos &&
						videos.map((video, i) => {
							video._id = video._id?.toString();
							return (
								<div key={i}>
									<VideoCard video={video} />
								</div>
							);
						})}
				</div>
			</div>

			<div className="w-full flex flex-col justify-center gap-5">
				<h1 className="text-2xl">Audios</h1>
				<div className="flex justify-start w-full gap-10 flex-wrap">
					{videos &&
						audios.map((audio, i) => {
							audio._id = audio._id?.toString();

							return (
								<div key={i}>
									<AudioCard audio={audio} />
								</div>
							);
						})}
				</div>
			</div>
		</main>
	);
};

export default Main;
