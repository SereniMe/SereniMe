import { NextResponse } from "next/server";
import { getVideos } from "@/db/models/video";

type VideoResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

export const GET = async () => {
  const videos = await getVideos();

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
