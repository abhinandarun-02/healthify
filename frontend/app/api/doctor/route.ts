export const dynamic = "force-dynamic"

import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";

export async function GET(req: NextRequest) {
  try {
    const session = await getCurrentUser();

    if (!session) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const page = req.nextUrl.searchParams.get("page");

    let specialityCode = req.nextUrl.searchParams.get("speciality");
    const specialityMap = new Map([
      ["all", undefined],
      ["der", "Dermatology"],
      ["ort", "Orthopedics"],
      ["neu", "Gastroenterology"],
      ["gas", "Gastroenterology"],
      ["ped", "Pediatrics"],
      ["psy", "Psychology"],
      ["uro", "Urology"],
      ["nep", "Nephrology"],
      ["ent", "ENT"],
    ]);

    const speciality = specialityCode ? specialityMap.get(specialityCode) : undefined;

    const language = req.nextUrl.searchParams.get("language");
    const appointment = req.nextUrl.searchParams.get("appointment");
    const gender = req.nextUrl.searchParams.get("gender");

    const doctors = await prisma.doctor.findMany({
      where: {
        speciality: speciality ? { equals: speciality } : undefined,
        gender: gender ? { equals: gender } : undefined,
      },
    });

    return NextResponse.json(doctors);
  } catch (error) {
    console.log("[DOCTOR_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
