import Image from "next/image";
import {CafeScene} from "./(3dscenes)/CafeScene";
import {WinterScene} from "./(3dscenes)/WinterScene";
import {LighthouseScene} from "./(3dscenes)/LighthouseScene";
import {ForestCampScene} from "./(3dscenes)/ForestCamp";
import {StreetScene} from "./(3dscenes)/StreetScene";

export default function Home() {
	return (
		<main>
			{/* <CafeScene /> */}
			{/* <WinterScene /> */}
			{/* <LighthouseScene /> */}
			{/* <ForestCampScene /> */}
			<StreetScene />
		</main>
	);
}
