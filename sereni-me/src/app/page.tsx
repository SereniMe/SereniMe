"use client";
import Faq from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";
import SectionTitle from "@/components/Section";
import Testimonials from "@/components/Testimony";
import Video from "@/components/Video";

export default function Home() {
	return (
		<Provider>
			<Navbar />
			<Hero />
			<SectionTitle
				pretitle="Watch a video"
				title="Learn how to fullfil your needs"
			>
				This section is to highlight a promo or demo video of SereniMe. Analysts
				says a landing page with video has 3% more conversion rate. So,
				don&apos;t forget to add one. Just like this.
			</SectionTitle>
			<Video />
			<SectionTitle
				pretitle="Testimonials"
				title="Here's what our customers said"
			>
				Testimonails is to highlight our popular customers.
			</SectionTitle>
			<Testimonials />
			<SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
				Answer FAQs
			</SectionTitle>
			<Faq />
			<Footer />
		</Provider>
	);
}
