"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [slot, setSlot] = useState<string>("");

  return (
    <div className="border flex items-center justify-center w-full">
      <Card className="max-w-[640px]">
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            fromDate={new Date(new Date().getTime() + 24 * 60 * 60 * 1000)}
            toDate={new Date(new Date().getTime() + 90 * 24 * 60 * 60 * 1000)}
            className="border rounded-lg"
          />
          <div className="mt-4">
            <span>Pick a Time</span>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {[
                "9:00 AM",
                "9:30 AM",
                "10:00 AM",
                "10:30 AM",
                "6:00 PM",
                "6:30 PM",
                "7:00 PM",
                "7:30 PM",
              ].map((time) => (
                <Slot
                  key={time}
                  time={time}
                  slot={slot}
                  date={date}
                  setSlot={setSlot}
                />
              ))}
            </div>
            <Button size="lg" className="w-full mt-4" disabled={!slot || !date}>
              Book Consultation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Booking;

const Slot = ({
  time,
  slot,
  date,
  setSlot,
}: {
  time: string;
  slot: string;
  date: Date | undefined;
  setSlot: (slot: string) => void;
}) => {
  return (
    <div
      className={cn(
        " cursor-pointer py-2 bg-card text-card-foreground font-medium border border-border rounded-lg flex justify-center text-[13px] text-center hover:border-primary",
        slot === time ? "bg-secondary border-primary" : "",
        !date
          ? "text-muted-foreground bg-gray-100 border-gray-500 hover:border-gray-500 cursor-default"
          : ""
      )}
      onClick={() => {
        if (date) setSlot(time);
      }}
    >
      <div className="flex flex-col">
        <span>{time}</span>

        <span>IST</span>
      </div>
    </div>
  );
};
