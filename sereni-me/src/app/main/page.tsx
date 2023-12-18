import VideoCard from "@/components/VideoCard";
import {getVideos} from "@/db/models/video";

const Main = async () => {
	const videos = await getVideos();

	return (
		<main className="flex flex-col w-full justify-center mx-[10rem] gap-8">
			<h1>Welcome Back, Name</h1>

			<div className="w-full flex flex-col justify-center gap-5">
				<h1>Today's Dailies</h1>
				<h1 className="text-3xl">Videos</h1>
				<div className="flex justify-start w-full gap-10 flex-wrap">
					{videos &&
						videos.map((video) => (
							<div key={video._id.toString()}>
								<VideoCard video={video} />
							</div>
						))}
				</div>
			</div>
		</main>
	);
};

export default Main;
