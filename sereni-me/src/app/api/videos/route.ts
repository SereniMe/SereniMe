import { NextRequest, NextResponse } from "next/server";
import { addVideo, getVideos } from "@/db/models/video";
import { z } from "zod";

type VideoResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

const videoInputSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  videoUrl: z.string({
    required_error: "Url is required",
    invalid_type_error: "Url must be a string",
  }),
});

export const GET = async (request: NextRequest) => {
  const videos = await getVideos();

  console.log("INSIDE GET /api/users");
  console.log("x-video-id", request.headers.get("x-video-id"));
  console.log("x-video-name", request.headers.get("x-video-name"));
  console.log("x-video-videoUrl", request.headers.get("x-video-videoUrl"));
  console.log("x-custom-value", request.headers.get("x-custom-value"));

  return NextResponse.json<VideoResponse<unknown>>(
    {
      statusCode: 200,
      message: "Response from GET /api/videos",
      data: videos,
    },
    {
      status: 200,
    }
  );
};

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();
    const parsedData = videoInputSchema.safeParse(data);

    if (!parsedData.success) throw parsedData.error;

    const video = await addVideo(parsedData.data);

    return NextResponse.json<VideoResponse<unknown>>(
      {
        statusCode: 201,
        message: "Response from POST /api/videos",
        data: video,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error);
      const errPath = error.issues[0].path[0];
      const errMessage = error.issues[0].message;

      return NextResponse.json<VideoResponse<never>>(
        {
          statusCode: 400,
          error: `${errPath} - ${errMessage}`,
        },
        { status: 400 }
      );
    }
    if (error instanceof Error) {
      return NextResponse.json<VideoResponse<never>>(
        {
          statusCode: 400,
          error: `${error.message}`,
        },
        { status: 400 }
      );
    }

    return NextResponse.json<VideoResponse<never>>(
      {
        statusCode: 500,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
};
