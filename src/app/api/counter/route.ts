import { NextRequest, NextResponse } from "next/server";

export async function GET(requets: NextRequest) {
  return NextResponse.json({ count: 100 });
}
