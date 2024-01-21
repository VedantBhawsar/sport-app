import { connectDatabase } from "@/server/config/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
const userSchema = require("@/server/models/users");
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: any, response: any) {
  await connectDatabase();
  const { name, email, password } = await request.json();
  try {
    if (!request.body) {
      return NextResponse.json({
        message: "Request body is empty",
      });
    }
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "name, email and password are required" },
        { status: 400 }
      );
    }
    const existedUser = await userSchema.findOne({ email: email });
    if (existedUser) {
      return NextResponse.json(
        { message: "user already found", user: existedUser },
        { status: 200 }
      );
    }

    const saltRounds = await bcrypt.genSalt(5);

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new userSchema({
      name,
      email,
      password: hashedPassword,
    });
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
