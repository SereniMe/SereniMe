import {getVideos, getVideosByTags} from "@/db/models/video";
import {ObjectId} from "mongodb";
import VideoCard from "./VideoCard";

type video = {
	_id?: ObjectId | string;
	name: string;
	videoUrl: string;
	tags: string;
	thumbnail: string;
};

const MainVideos = async ({query}: {query: string}) => {
	let renderVid;

	if (query == "Home") {
		const videos = (await getVideos()) as video[];
		renderVid = videos.slice(0, 4);
	}
	if (query == "Stress ") {
		const videos = await getVideosByTags({tags: "Stress and Anxiety"});
		renderVid = videos;
	}
	if (query == "Inner Peace") {
		const videos = await getVideosByTags({tags: "Inner Peace"});
		renderVid = videos;
	}
	if (query == "Focus") {
		const videos = await getVideosByTags({tags: "Focus"});
		renderVid = videos;
	}
	return (
		<div className="flex justify-start w-full gap-10 flex-wrap">
			{renderVid &&
				renderVid.map((video, i) => {
					video._id = video._id?.toString();
					return (
						<div key={i}>
							<VideoCard video={video} />
						</div>
					);
				})}
		</div>
	);
};

export default MainVideos;
