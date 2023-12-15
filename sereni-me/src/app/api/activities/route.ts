import {
  addActivity,
  deleteActivity,
  getActivities,
  getActivity,
} from "@/db/models/activities";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

type ActivityResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

const activityInputSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  content: z.string({
    required_error: "Content is required",
    invalid_type_error: "Content must be a string",
  }),
  tags: z.array(
    z.string({
      required_error: "At least one tag is required",
      invalid_type_error: "Each tag must be a string",
    })
  ),
  thumbnail: z.string({
    required_error: "Content is required",
    invalid_type_error: "Content must be a string",
  }),
});

export const GET = async (_request: NextRequest) => {
  const activities = await getActivities();

  // console.log("INSIDE GET /api/activities");
  // console.log("x-activity-id", request.headers.get("x-activity-id"));
  // console.log("x-activity-name", request.headers.get("x-activity-name"));
  // console.log("x-activity-content", request.headers.get("x-activity-content"));
  // console.log("x-activity-tags", request.headers.get("x-activity-tags"));
  // console.log("x-custom-value", request.headers.get("x-custom-value"));

  return NextResponse.json<ActivityResponse<unknown>>(
    {
      statusCode: 200,
      message: "Response from GET /api/activities",
      data: activities,
    },
    { status: 200 }
  );
};

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();
    const parsedData = activityInputSchema.safeParse(data);

    if (!parsedData.success) throw parsedData.error;

    const activity = await addActivity(parsedData.data);

    return NextResponse.json<ActivityResponse<unknown>>(
      {
        statusCode: 201,
        message: "Response from POST /api/activities",
        data: activity,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errPath = error.issues[0].path[0];
      const errMessage = error.issues[0].message;

      return NextResponse.json<ActivityResponse<never>>(
        {
          statusCode: 400,
          error: `${errPath} - ${errMessage}`,
        },
        { status: 400 }
      );
    }
    if (error instanceof Error) {
      return NextResponse.json<ActivityResponse<never>>(
        {
          statusCode: 400,
          error: `${error.message}`,
        },
        { status: 400 }
      );
    }

    return NextResponse.json<ActivityResponse<never>>(
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

    const activity = await getActivity({ _id: objId });

    const deletedActivity = await deleteActivity(objId);

    return NextResponse.json<ActivityResponse<unknown>>(
      {
        statusCode: 200,
        message: "Response from DELETE /api/activities",
        data: activity,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errPath = error.issues[0].path[0];
      const errMessage = error.issues[0].message;

      return NextResponse.json<ActivityResponse<never>>(
        {
          statusCode: 400,
          error: `${errPath} - ${errMessage}`,
        },
        { status: 400 }
      );
    }
    if (error instanceof Error) {
      return NextResponse.json<ActivityResponse<never>>(
        {
          statusCode: 400,
          error: `${error.message}`,
        },
        { status: 400 }
      );
    }

    return NextResponse.json<ActivityResponse<never>>(
      {
        statusCode: 500,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
};
