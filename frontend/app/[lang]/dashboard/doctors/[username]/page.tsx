import prisma from "@/lib/prisma";
import { Doctor } from "@prisma/client";
import { redirect } from "next/navigation";

const DoctorPage = async ({
  params,
}: {
  params: { lang: string; username: string };
}) => {
  const doctor: Doctor | null = await prisma.doctor.findUnique({
    where: { username: params.username },
  });

  if (!doctor) redirect("/dashboard");
  return <div>{JSON.stringify(doctor)}</div>;
};

export default DoctorPage;
