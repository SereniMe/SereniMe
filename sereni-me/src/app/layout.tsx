import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "SereniMe",
	description: "Your portal for Stress Relief",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body
				className="min-h-screen w-[99dvw] bg-[#f5f5f5]
		  dark:bg-gray-900"
			>
				<main className="">{children}</main>
			</body>
		</html>
	);
}
