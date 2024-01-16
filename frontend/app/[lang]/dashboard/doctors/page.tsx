import React from "react";
import { Sidebar } from "./_components/sidebar";
import { DoctorCard } from "./_components/card";
import prisma from "@/lib/prisma";
import { Locale } from "@/i18n-config";

const Page = async ({
  params,
  searchParams,
}: {
  params: { lang: Locale };
  searchParams: {
    speciality: string | null;
    page: string | null;
    gender: string | null;
    language: string | null;
    appointmentType: string | null;
  };
}) => {
  const { speciality: specialtiyCode, gender: genderCode } = searchParams;

  const specialityMap = new Map([
    ["all", undefined],
    ["der", "Dermatology"],
    ["ort", "Orthopedics"],
    ["neu", "Neurology"],
    ["gas", "Gastroenterology"],
    ["ped", "Pediatrics"],
    ["psy", "Psychology"],
    ["uro", "Urology"],
    ["nep", "Nephrology"],
    ["ent", "ENT"],
    ["car", "Cardiology"],
  ]);

  const genderMap = new Map([
    ["all", undefined],
    ["male", "Male"],
    ["female", "Female"],
    ["other", "Other"],
  ]);

  const speciality = specialtiyCode
    ? specialityMap.get(specialtiyCode)
    : undefined;

  const gender = genderCode ? genderMap.get(genderCode) : undefined;

  const doctors = await prisma.doctor.findMany({
    where: {
      speciality: speciality ? { equals: speciality } : undefined,
      AND: { gender: gender ? { equals: gender } : undefined },
    },
  });

  return (
    <section className="px-8 mt-24">
      <div className="flex gap-4 relative">
        <Sidebar />
        <div className="w-full space-y-4">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor = {doctor} lang = {params.lang} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
