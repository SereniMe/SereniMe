import {ObjectId} from "mongodb";
import {getActivities} from "@/db/models/activities";
import ActivityCard from "./ActivityCard";

export type activity = {
	_id: ObjectId | string;
	name: string;
	content: string;
	tags: string[];
	thumbnail: string;
};

const MainActivities = async ({query}: {query: string}) => {
	let renderAct;

	if (query == "Home") {
		const activities = (await getActivities()) as activity[];
		console.log(activities);

		renderAct = activities.slice(0, 4);
	}
	// if (query == "Stress ") {
	// 	const activities = await getVideosByTags({tags: "Stress and Anxiety"});
	// 	renderAct = activities;
	// }
	// if (query == "Inner Peace") {
	// 	const activities = await getVideosByTags({tags: "Inner Peace"});
	// 	renderAct = activities;
	// }
	// if (query == "Focus") {
	// 	const videos = await getVideosByTags({tags: "Focus"});
	// 	renderAct = videos;
	// }
	return (
		<div className="flex justify-start w-full gap-10 flex-wrap">
			{renderAct &&
				renderAct.map((activity, i) => {
					activity._id = activity._id?.toString();
					return (
						<div key={i}>
							<ActivityCard activity={activity} />
						</div>
					);
				})}
		</div>
	);
};

export default MainActivities;
