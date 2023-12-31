import { getAudio } from "@/db/models/audio";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

type AudioRespone<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

export const GET = async (
  _request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  const objId = new ObjectId(id);

  const audio = await getAudio({ _id: objId });

  return NextResponse.json<AudioRespone<unknown>>(
    {
      statusCode: 200,
      message: `Response from GET /api/audios/${id}`,
      data: audio,
    },
    { status: 200 }
  );
};
