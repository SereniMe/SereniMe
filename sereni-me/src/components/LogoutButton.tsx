import {cookies} from "next/headers";
import {redirect} from "next/navigation";

const handleLogout = async () => {
	"use server";
	console.log("logging out");

	cookies().delete("token");
	redirect("/signin");
};

const LogoutButton = () => {
	return (
		<form action={handleLogout}>
			<button
				type="submit"
				className="w-full h-[2rem] text-left text-md ml-4 hover:text-[#5D7261] text-black"
			>
				Logout
			</button>
		</form>
	);
};

export default LogoutButton;
