import { getActivity } from "@/db/models/activities";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

type ActivityResponse<T> = {
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

  const activity = await getActivity({ _id: objId });

  return NextResponse.json<ActivityResponse<unknown>>(
    {
      statusCode: 200,
      message: `Response from GET /api/activities/${id}`,
      data: activity,
    },
    { status: 200 }
  );
};
