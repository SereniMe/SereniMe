import MainAudios from "@/components/MainAudios";
import MainVideos from "@/components/MainVideos";

type props = {
	params: {};
	searchParams: {[key: string]: string | string[] | undefined};
};

const Main = async (props: props) => {
	const searchParams = props.searchParams as {find: string};
	console.log(searchParams);

	if (searchParams.find == "Home") {
		return (
			<main className="flex flex-col w-full justify-center mx-[10rem] gap-10">
				<div className="w-full flex flex-col justify-center gap-7">
					<h1 className="text-4xl">Today's Daily Activities</h1>
					<h1 className="text-3xl">Videos</h1>
					<h1 className="text-xl">For Stress & Anxiety</h1>
					<MainVideos query="Stress " />
					<h1 className="text-xl">For Inner peace</h1>
					<MainVideos query="Inner Peace" />
					<h1 className="text-xl">For Focus</h1>
					<MainVideos query="Focus" />
				</div>

				<div className="w-full flex flex-col justify-center gap-5">
					<h1 className="text-3xl">Audios</h1>
					<h1 className="text-xl">For Stress & Anxiety</h1>
					<MainAudios query="Stress " />
					<h1 className="text-xl">For Inner Peace</h1>
					<MainAudios query="Inner Peace" />
					<h1 className="text-xl">For Focus</h1>
					<MainAudios query="Focus" />
				</div>
			</main>
		);
	}
};

export default Main;
