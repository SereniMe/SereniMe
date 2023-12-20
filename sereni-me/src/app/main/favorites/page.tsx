"use client";

import FavActivity from "@/components/FavActivity";
import FavAudio from "@/components/FavAudio";
import FavVideo from "@/components/FavVideo";
import {useEffect, useState} from "react";

type favorite = {
	type: string;
	id: string;
};
const FavoritePage = () => {
	const [favorites, setFavorites] = useState([{}] as favorite[]);
	const fetchData = async () => {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/api/profiles/user`,
			{
				method: "GET",
			}
		);
		const responseJson = await response.json();
		console.log(responseJson.data.favorites);

		setFavorites(responseJson.data.favorites);
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<main className="flex flex-col w-full justify-center mx-[10rem] gap-10 pt-20">
			<div className="flex flex-col gap-5">
				<h1>Videos</h1>
				<div className="flex gap-5">
					{favorites &&
						favorites.map((fav, i) => {
							if (fav.type == "video") {
								return (
									<div key={i}>
										<FavVideo id={fav.id} />
									</div>
								);
							}
						})}
				</div>
			</div>
			<div className="flex flex-col gap-5">
				<h1>Audios</h1>
				<div className="flex gap-5">
					{favorites &&
						favorites.map((fav, i) => {
							if (fav.type == "audio") {
								return <div key={i}>{<FavAudio id={fav.id} />}</div>;
							}
						})}
				</div>
			</div>
		</main>
	);
};

export default FavoritePage;
