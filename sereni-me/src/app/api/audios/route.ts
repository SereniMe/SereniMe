import { addAudio, deleteAudio, getAudio, getAudios } from "@/db/models/audio";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

type AudioResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

const audioInputSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be string",
  }),
  audioUrl: z.string({
    required_error: "Url is required",
    invalid_type_error: "Url must be string",
  }),
  tags: z.array(
    z.string({
      required_error: "At least one tag is required",
      invalid_type_error: "Each tag must be string",
    })
  ),
});

export const GET = async (_request: NextRequest) => {
  const audios = await getAudios();

  // console.log("INSIDE GET /api/audios");
  // console.log("x-audio-id", request.headers.get("x-audio-id"));
  // console.log("x-audio-name", request.headers.get("x-audio-name"));
  // console.log("x-audio-audioUrl", request.headers.get("x-audio-audioUrl"));
  // console.log("x-audio-tags", request.headers.get("x-audio-tags"));
  // console.log("x-custom-value", request.headers.get("x-custom-value"));

  return NextResponse.json<AudioResponse<unknown>>(
    {
      statusCode: 200,
      message: "Response from GET /api/audios",
      data: audios,
    },
    { status: 200 }
  );
};

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();
    const parsedData = audioInputSchema.safeParse(data);

    if (!parsedData.success) throw parsedData.error;

    const audio = await addAudio(parsedData.data);

    return NextResponse.json<AudioResponse<unknown>>(
      {
        statusCode: 201,
        message: "Response from POST /api/audios",
        data: audio,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errPath = error.issues[0].path[0];
      const errMessage = error.issues[0].message;

      return NextResponse.json<AudioResponse<never>>(
        {
          statusCode: 400,
          error: `${errPath} - ${errMessage}`,
        },
        { status: 400 }
      );
    }

    if (error instanceof Error) {
      return NextResponse.json<AudioResponse<never>>(
        {
          statusCode: 400,
          error: `${error.message}`,
        },
        { status: 400 }
      );
    }

    return NextResponse.json<AudioResponse<never>>(
      {
        statusCode: 500,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
};

export const DELETE = async (request: NextRequest) => {
  try {
    const data = await request.json();
    const objId = new ObjectId(data._id);

    const audio = await getAudio({ _id: objId });

    const deletedAudio = await deleteAudio(objId);

    return NextResponse.json<AudioResponse<unknown>>(
      {
        statusCode: 200,
        message: "Response from DELETE /api/audos",
        data: audio,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errPath = error.issues[0].path[0];
      const errMessage = error.issues[0].message;

      return NextResponse.json<AudioResponse<never>>(
        {
          statusCode: 400,
          error: `${errPath} - ${errMessage}`,
        },
        { status: 400 }
      );
    }

    if (error instanceof Error) {
      return NextResponse.json<AudioResponse<never>>(
        {
          statusCode: 400,
          error: `${error.message}`,
        },
        { status: 400 }
      );
    }

    return NextResponse.json<AudioResponse<never>>(
      {
        statusCode: 500,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
};
