import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../globals.css";
import Provider from "@/components/Provider";
import Navbar from "@/components/NavbarMain";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "SereniMe",
	description: "Your portal for Stress Relief",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<Provider>
			<Navbar />
			<main className="flex flex-col flex-1 max-w-6xl w-full  ">
				{children}
			</main>
			<Footer />
		</Provider>
	);
}
