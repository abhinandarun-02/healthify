import Image from "next/image";
import { Briefcase, Languages, MapPin, ShieldCheck, Star } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Doctor } from "@prisma/client";

export const DoctorCard = (data: Doctor) => {
  return (
    <div className="card flex py-3.5 px-6 w-full border border-border text-card-foreground">
      <div className="about w-full basis-2/3">
        <div className="flex gap-4 h-full items-center">
          <div className="flex mt-1">
            <Image
              className="rounded-lg h-36 w-36"
              src={data.image || ""}
              alt={data.name}
              width={320}
              height={320}
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-2xl text-card-dark">
              {data.name}
            </span>
            <div className="flex gap-2 items-center text-lg">
              <div>
                <p className="text-card-dark font-medium">{data.speciality}</p>
              </div>
              <div className="flex items-center">
                <MapPin />
                <p className="text-base">{data.location}</p>
              </div>
            </div>
            <div className="text-[13px] font-medium flex flex-col gap-1 text-sm mt-4">
              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5" />
                <p>{data.experience} YEARS OF EXPERIENCE</p>
              </div>
              {data.verified && (
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 fill-green-500" />
                  <p>VERIFIED PROFILE</p>
                </div>
              )}
              <div className="flex items-center gap-3">
                <Languages className="ml-1 h-4 w-4" />
                <div className="flex gap-0.5">
                  {data.languages.map((language, index) => (
                    <Badge key={index} className="bg-card-dark text-white">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="details flex flex-col basis-1/3 gap-2">
        <div className="w-full flex flex-col bg-accent rounded-lg p-2 gap-2">
          <div className="flex basis-full flex-wrap">
            <div className="basis-1/2">
              <span className="text-4xl font-medium">{data.rating}</span>
            </div>
            <div className="flex flex-col w-full basis-0 flex-grow">
              <div className="flex justify-center">
                <Star className="fill-yellow-500" />
                <Star className="fill-yellow-500" />
                <Star className="fill-yellow-500" />
                <Star className="fill-yellow-500" />
                <Star />
              </div>
              <span className="text-sm text-center">Patient Trust score</span>
            </div>
          </div>
          <div className="flex w-full text-sm">
            <div className="flex gap-1 items-center w-full flex-grow-1">
              <span className="text-card-dark font-medium">{data.reviews}</span>
              <span>Patient Reviews</span>
            </div>
            <div className="flex gap-1 items-center justify-center w-full flex-grow-1">
              <span className="text-card-dark font-medium">{data.endorsements}</span>
              <span>Peer Endrosments</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/dashboard/doctors/appointment/john" className={cn(buttonVariants({variant:"default"}))}>Book Appointment</Link>
          <Button className="">Contact</Button>
        </div>
      </div>
    </div>
  );
};
