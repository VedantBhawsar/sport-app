import type { NextApiRequest, NextApiResponse } from "next";
const userSchema = require("@/server/models/users");

type ResponseData = {
  message: string;
};
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
