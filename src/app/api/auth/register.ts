import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    //validation
    console.log({ email, password });
  }
  catch (error) {
    console.log(error);
  }

  return NextResponse.json({ message: "success" });
}