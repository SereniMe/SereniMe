import {cookies} from "next/headers";

const handleEditProfile = async (formdata: FormData) => {
	"use server";
	console.log(formdata);

	const inputFormData = new FormData();

	inputFormData.append("fullName", formdata.get("name") as string);
	inputFormData.append("address", formdata.get("address") as string);
	inputFormData.append("phone", formdata.get("phone") as string);
	inputFormData.append(
		"interests",
		`${formdata.get("Stress") as string},${formdata.get("Anxiety") as string},${
			formdata.get("Focus") as string
		},${formdata.get("Inner Peace") as string}`
	);

	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/api/profiles/user`,
		{
			method: "PUT",
			body: inputFormData,
			headers: {
				Cookie: cookies().toString(),
			},
		}
	);

	console.log(await response.json());
};
const EditButton = ({
	form,
}: {
	form: {fullName: string; address: string; phone: string; interests: string};
}) => {
	const data = new FormData();
	data.append("fullName", form.fullName);
	data.append("address", form.address);
	data.append("phone", form.phone);
	data.append("interests", form.interests);
	return (
		<>
			<form action={() => handleEditProfile(data)}>
				<button className="mt-5 bg-grey-800 hover:bg-gray-200 rounded-md text-white font-bold py-2 px-4 hover:text-black hover:scale-110 transition-all active:scale-90 ">
					Update
				</button>
			</form>
		</>
	);
};

export default EditButton;
