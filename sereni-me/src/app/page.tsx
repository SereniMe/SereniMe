"use client";
import Faq from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimony";
import Video from "@/components/Video";
import {ThemeProvider} from "next-themes";

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
