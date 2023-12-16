"use client";
import Faq from "@/components/FAQ";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimony";
import Video from "@/components/Video";

export default function Home() {
	return (
		<main>
			<Hero />
			<Video />
			<Testimonials />
			<Faq />
		</main>
	);
}
