import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getProfiles, addProfile } from "@/db/models/profiles";

type ProfileResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

const profileInputSchema = z.object({
  fullName: z.string().default(""),
  address: z.string().default(""),
  phone: z.string().default(""),
  activities: z.array(z.string()).default([]),
  favorites: z.array(z.string()).default([]),
  interests: z.array(z.string()).default([]),
  reminder: z.string().default(""),
  userId: z.string().default(""),
});

export const GET = async (_request: NextRequest) => {
  const profiles = await getProfiles();
  return NextResponse.json<ProfileResponse<unknown>>(
    {
      statusCode: 200,
      message: "Response from GET /api/profiles",
      data: profiles,
    },
    {
      status: 200,
    }
  );
};

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.formData();

    const formData = {
      fullName: data.get("fullName"),
      address: data.get("address"),
      phone: data.get("phone"),
      activities: data.get("activities"),
      favorites: data.get("favorites"),
      interests: data.get("interests"),
      reminder: data.get("reminder"),
      userId: data.get("userId"),
    };

    const parsedData = profileInputSchema.safeParse(formData);
    //!
    console.log(parsedData);

    if (!parsedData.success) {
      console.log("not success");

      throw parsedData.error;
    }
    //!
    const newProfileData = {
      ...parsedData.data,
      userId: new ObjectId(parsedData.data.userId),
    };
    const newProfile = await addProfile(newProfileData);
    /*
		"data": {
		    "acknowledged": true,
		    "insertedId": "657fbd8a277b4e4ecfd626ca"
		}
		*/
    return NextResponse.json<ProfileResponse<unknown>>(
      {
        statusCode: 201,
        message: "Response from POST /api/profiles",
        data: newProfile,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errPath = error.issues[0].path[0];
      const errMessage = error.issues[0].message;
      return NextResponse.json<ProfileResponse<never>>(
        {
          statusCode: 400,
          error: `${errPath} - ${errMessage}`,
        },
        { status: 400 }
      );
    }
    if (error instanceof Error) {
      console.log(error);

      return NextResponse.json<ProfileResponse<never>>(
        {
          statusCode: 400,
          error: `${error.message}`,
        },
        { status: 400 }
      );
    }
    return NextResponse.json<ProfileResponse<never>>(
      {
        statusCode: 500,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
};
