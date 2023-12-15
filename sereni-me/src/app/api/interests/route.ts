import {
  addInterest,
  deleteInterest,
  getInterest,
  getInterests,
} from "@/db/models/interest";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

type InterestResponse<T> = {
  statusCode: number;
  message?: string;
  data?: T;
  error?: string;
};

const interestInputSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be string",
  }),
});

export const GET = async (_request: NextRequest) => {
  const interests = await getInterests();

  // console.log("INSIDE GET /api/interests");
  // console.log("x-interest-id", request.headers.get("x-interest-id"));
  // console.log("x-interest-name", request.headers.get("x-interest-name"));

  return NextResponse.json<InterestResponse<unknown>>(
    {
      statusCode: 200,
      message: `Response from GET /api/interests`,
      data: interests,
    },
    { status: 200 }
  );
};

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();
    const parsedData = interestInputSchema.safeParse(data);

    if (!parsedData.success) throw parsedData.error;

    const interest = await addInterest(parsedData.data);

    return NextResponse.json<InterestResponse<unknown>>(
      {
        statusCode: 201,
        message: `Response from POST /api/interests`,
        data: interest,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errPath = error.issues[0].path[0];
      const errMessage = error.issues[0].message;

      return NextResponse.json<InterestResponse<never>>(
        {
          statusCode: 400,
          error: `${errPath} - ${errMessage}`,
        },
        { status: 400 }
      );
    }

    if (error instanceof Error) {
      return NextResponse.json<InterestResponse<never>>(
        {
          statusCode: 400,
          error: `${error.message}`,
        },
        { status: 400 }
      );
    }

    return NextResponse.json<InterestResponse<never>>(
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

    const interest = await getInterest({ _id: objId });

    const deletedInterest = await deleteInterest(objId);

    return NextResponse.json<InterestResponse<unknown>>(
      {
        statusCode: 200,
        message: `Response from DELETE /api/interests`,
        data: interest,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errPath = error.issues[0].path[0];
      const errMessage = error.issues[0].message;

      return NextResponse.json<InterestResponse<never>>(
        {
          statusCode: 400,
          error: `${errPath} - ${errMessage}`,
        },
        { status: 400 }
      );
    }

    if (error instanceof Error) {
      return NextResponse.json<InterestResponse<never>>(
        {
          statusCode: 400,
          error: `${error.message}`,
        },
        { status: 400 }
      );
    }

    return NextResponse.json<InterestResponse<never>>(
      {
        statusCode: 500,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
};
