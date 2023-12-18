import { ActivityResponse } from "@/app/api/activities/[id]/route";
import { getRecommendedActivities } from "@/db/models/activities";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  const objId = new ObjectId(id);

  const activities = await getRecommendedActivities(objId);

  return NextResponse.json<ActivityResponse<unknown>>(
    {
      statusCode: 200,
      message: `Response from GET /api/activities/${id}/recommend`,
      data: activities,
    },
    { status: 200 }
  );
};
