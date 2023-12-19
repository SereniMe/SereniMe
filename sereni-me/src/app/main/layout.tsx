import Provider from "@/components/Provider";
import Navbar from "@/components/NavbarMain";
import Footer from "@/components/Footer";

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<Provider>
			<Navbar />
			<main className="flex flex-col flex-1 max-w-6xl w-full  ">
				<video
					className="fixed w-auto min-w-full h-[90dvh] overflow-hidden object-cover max-w-none -z-10 opacity-10"
					preload="auto"
					muted
					autoPlay
					loop
				>
					<source
						src={`https://drive.google.com/uc?export=download&id=1mQV8dwFNdKVDUKO5_ngxLpch9fJb8w_J`}
						type="video/mp4"
					/>
				</video>
				{children}
			</main>

			<Footer />
		</Provider>
	);
}
