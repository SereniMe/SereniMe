import { NextRequest, NextResponse } from "next/server";
import { getUserById } from "@/db/models/userLogin";

type UserResponse<T> = {
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

  const user = await getUserById(id);

  return NextResponse.json<UserResponse<unknown>>({
    statusCode: 200,
    message: `Response from GET /api/users/${id}`,
  });
};
