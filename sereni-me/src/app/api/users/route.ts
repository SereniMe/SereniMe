import { NextRequest, NextResponse } from "next/server";
import { createUser } from "@/db/models/userRegister";
import { z } from "zod";

type UserResponse<Type> = {
  statusCode: number;
  message?: string;
  error?: string;
  data?: Type;
};

const userInputRegister = z.object({
  name: z.string(), //.optional()
  username: z.string(), //.min()
  email: z.string().email(),
  password: z.string(), //.min(5)
});

// POST /api/users
export const POST = async (request: Request) => {
  try {
    const data = await request.json();
    const parsedData = userInputRegister.safeParse(data);
    if (!parsedData.success) {
      throw parsedData.error;
    }
    const newUser = await createUser(parsedData.data);
    return NextResponse.json<UserResponse<unknown>>(
      {
        statusCode: 201,
        message: "Succeed POST /api/users",
        data: newUser,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorPath = error.issues[0].path[0];
      const errorMessage = error.issues[0].message;
      return NextResponse.json<UserResponse<never>>(
        { statusCode: 400, error: `${errorPath} - ${errorMessage}` },
        { status: 400 }
      );
    }
    return NextResponse.json<UserResponse<never>>(
      { statusCode: 500, message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
