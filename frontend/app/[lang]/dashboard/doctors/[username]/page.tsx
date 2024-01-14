import { redirect } from "next/navigation";

import prisma from "@/lib/prisma";
import { Doctor } from "@prisma/client";
import Header from "./_components/header";


const DoctorPage = async ({
  params,
}: {
  params: { lang: string; username: string };
}) => {
  const doctor: Doctor | null = await prisma.doctor.findUnique({
    where: { username: params.username },
  });

  if (!doctor) redirect("/dashboard");

  return (
    <div className="relative min-h-screen">
      <div>
        <Header {...doctor} />
      </div>
    </div>
  );
};

export default DoctorPage;
