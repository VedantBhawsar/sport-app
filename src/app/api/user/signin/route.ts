import { connectDatabase } from "@/server/config/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
const userSchema = require("@/server/models/users");
import bcrypt from "bcrypt";
type ResponseData = {
  message: string;
};
import { NextResponse } from "next/server";

export async function POST(request: any, response: any) {
  await connectDatabase();
  const { email, password } = await request.json();
  try {
    if (!request.body) {
      return NextResponse.json({
        message: "Request body is empty",
      });
    }
    if (!email || !password) {
      return NextResponse.json(
        { message: "email and password are required" },
        { status: 400 }
      );
    }
    const existedUser = await userSchema.findOne({ email: email });
    if (!existedUser) {
      return NextResponse.json(
        { message: "user not found. Please Signup" },
        { status: 200 }
      );
    }
    const passwordMatch = await bcrypt.compare(password, existedUser.password);
    if (passwordMatch) {
      NextResponse.json({ message: "Incorrect password" }, { status: 401 });
    }
    return NextResponse.json(
      { message: "User Logged In", user: existedUser },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Internal server error!" },
      { status: 500 }
    );
  }
}
