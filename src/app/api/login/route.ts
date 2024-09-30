import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    console.log({ username, password});
  }
  catch (error) {
    console.log(error);
  }

  return NextResponse.json({ message: "success" });
}