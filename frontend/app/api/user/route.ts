export const dynamic = "force-dynamic"

import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";

export async function GET(req: NextRequest) {
  try {
    const session = await getCurrentUser();
    const userId = req.nextUrl.searchParams.get("userId");

    if (!session) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    if (!userId) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { Patient: true },
    });

    if (!user?.Patient) {
      return new NextResponse("Patient not found", { status: 404 });
    }

    return NextResponse.json(user?.Patient);
  } catch (error) {
    console.log("[USER_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
