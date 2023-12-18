import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getProfile, updateProfile, deleteProfile } from "@/db/models/profiles";

type ProfileResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

const profileInputSchema = z.object({
  fullName: z.string(),
  address: z.string(),
  phone: z.string(),
  activities: z.array(z.string()),
  favorites: z.array(z.string()),
  interests: z.array(z.string()),
  userId: z.string(),
  reminder: z.string(),
});

export const GET = async (
  _request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  // const data = await request.json();
  const objectId = new ObjectId(/*data._id*/ id);
  const profile = await getProfile(objectId);
  return NextResponse.json<ProfileResponse<unknown>>(
    {
      statusCode: 200,
      message: "Response from GET /api/profiles",
      data: profile,
    },
    {
      status: 200,
    }
  );
};

export const PUT = async (
  request: NextRequest
  // { params }: { params: { id: string } }
) => {
  try {
    // const id = params.id;
    const data = await request.json();
    const parsedData = profileInputSchema.safeParse(data);
    //!
    if (!parsedData.success) {
      throw parsedData.error;
    }
    //!
    const updateProfileData = {
      ...parsedData.data,
      userId: new ObjectId(parsedData.data.userId),
    };
    const objectId = new ObjectId(data._id);
    const profile = await getProfile(objectId);
    const updatedProfile = await updateProfile(objectId, updateProfileData);
    return NextResponse.json<ProfileResponse<unknown>>(
      {
        statusCode: 200,
        message: "Response from PUT /api/profiles",
        data: updatedProfile,
      },
      {
        status: 200,
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

export const DELETE = async (
  request: NextRequest
  // { params }: { params: { id: string } }
) => {
  try {
    // const id = params.id;
    const data = await request.json();
    const objectId = new ObjectId(data._id);
    const profile = await getProfile(objectId);
    const deletedProfile = await deleteProfile(objectId);
    return NextResponse.json<ProfileResponse<unknown>>(
      {
        statusCode: 200,
        message: "Response from DELETE /api/profiles/",
        data: profile,
      },
      {
        status: 200,
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
