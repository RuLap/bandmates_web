import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.bandmates.ru/api/users", {
      headers: {
        'Content-Type': 'application/json'
      },
    });

    const data = await res.json();

    return NextResponse.json({ data });
  }
  catch (error) {
    console.log(error);
  }
}