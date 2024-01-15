import React from "react";
import { Sidebar } from "./_components/sidebar";
import { DoctorCard } from "./_components/card";
import { doctors } from "./_components/data";

const Page = () => {
  return (
    <section className="px-8 mt-24">
      <div className="flex gap-4 relative">
        <Sidebar />
        <div className="w-full space-y-4">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
