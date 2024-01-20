import { connectDatabase } from "@/server/config/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

export async function GET(request: any) {
  await connectDatabase();
  return NextResponse.json(
    { message: "Api working succesfully!" },
    { status: 200 }
  );
}
