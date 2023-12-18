import Provider from "@/components/Provider";
import Navbar from "@/components/NavbarMain";
import Footer from "@/components/Footer";

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
