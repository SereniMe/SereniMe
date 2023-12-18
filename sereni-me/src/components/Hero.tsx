"use client";

import {ForestCampScene} from "@/app/(3dscenes)/ForestCamp";
import {LighthouseScene} from "@/app/(3dscenes)/LighthouseScene";
import {useTheme} from "next-themes";

const Hero = () => {
	const {theme, setTheme} = useTheme();
	return (
		<>
			<div className="w-[99dvw] h-[100dvh]">
				<div className="mb-8 absolute z-[1] w-[95%] h-[85%] flex justify-center flex-col gap-8 items-center">
					<h1 className="text-4xl font-bold leading-snug tracking-tight text-black lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white w-[70%]">
						Feeling overwhelmed? We can help you find your calm again.
					</h1>
					<p className="py-5 text-xl leading-normal text-black lg:text-xl xl:text-2xl dark:text-gray-300 w-[70%]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempora,
						earum exercitationem, consectetur, aperiam ipsam nihil molestias
						minus magnam hic rem repellat ipsum perspiciatis itaque sit autem
						blanditiis debitis ad.
					</p>

					<div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
						<a
							href="/"
							target="_blank"
							rel="noopener"
							className="px-8 py-4 text-lg font-medium text-center text-white bg-[#6A99AC] rounded-md "
						>
							Start your journey to mental wellness today
						</a>
					</div>
				</div>
				{theme == "dark" ? <ForestCampScene /> : <LighthouseScene />}
			</div>
		</>
	);
};

export default Hero;
