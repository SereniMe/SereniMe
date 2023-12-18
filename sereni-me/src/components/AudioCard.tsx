import Image from "next/image";

type props = {
	audio: {
		name: string;
		videoUrl: string;
		tags: string[];
		thumbnail: string;
	};
};

const AudioCard = (props: props) => {
	return (
		<div className="flex flex-col w-[16rem] object-cover overflow-hidden rounded-lg gap-3 shadow-lg shadow-[#6a99ac77] pb-4 ">
			<Image
				src="/med.jpg"
				width={400}
				height={400}
				alt="CardImage"
				className=" hover:scale-110 transition ease-in-out duration-200"
			/>
			<h1 className="px-4">Title</h1>
			<p className="px-4">tags</p>
			<p className="px-4">Audio</p>
		</div>
	);
};

export default AudioCard;
