import {getVideoById} from "@/db/models/video";
import {ObjectId} from "mongodb";
import {NextRequest, NextResponse} from "next/server";

type VideoResponse<T> = {
	statusCode: number;
	message?: string;
	data?: T;
	error?: string;
};

export const GET = async (
	_request: NextRequest,
	{params}: {params: {id: string}}
) => {
	const id = params.id;
	const objId = new ObjectId(id);
	// console.log(id);

	const video = await getVideoById(objId);
	// console.log(video);

	return NextResponse.json<VideoResponse<unknown>>(
		{
			statusCode: 200,
			message: `Response from GET /api/users/${id}`,
			data: video,
		},
		{status: 200}
	);
};
