import { ActivityResponse } from "@/app/api/activities/[id]/route";
import { getRecommendedActivities } from "@/db/models/activities";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const userId = request.headers.get("x-user-id");
    if (!userId) throw new Error(`Cookies not found`);
    const objId = new ObjectId(userId);
    const activities = await getRecommendedActivities(objId);

    return NextResponse.json<ActivityResponse<unknown>>(
      {
        statusCode: 200,
        message: `Response from GET /api/activities/`,
        data: activities,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
};
