import { connectDatabase } from "@/server/config/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
const userSchema = require("@/server/models/users");
import { NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

export async function POST(request: NextApiRequest, response: NextApiResponse) {
  await connectDatabase();

  try {
    if (request.body) {
      return NextResponse.json({
        message: "Request body is empty",
        body: request.body,
      });
    }
    const { name, email, password } = request.body;
    const user = request.body;
    console.log(name);
    if (!user.name || !user.email || !user.password) {
      return NextResponse.json(
        { message: "name, email and password are required" },
        { status: 400 }
      );
    }
    const existedUser = await userSchema.findOne({ email: user.email });
    if (existedUser) {
      return NextResponse.json(
        { message: "user already found", user: existedUser },
        { status: 200 }
      );
    }
    const newUser = new userSchema(user);
    await newUser.save();

    return NextResponse.json(
      { message: "user created", user: newUser },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Internal server error!" },
      { status: 500 }
    );
  }
}
