import React from "react";

export default function Features() {
  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
        <div className="flex flex-col items-center">
          <h4 className="text-lg sm:text-xl font-semibold text-secondary-foreground ">
            Accuracy rate
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-primary">
            92.5%
          </p>
          <p className="mt-1 text-gray-500">in diagnosis</p>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="text-lg sm:text-xl font-semibold text-secondary-foreground ">
            Startup businesses
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-primary">
            50K+
          </p>
          <p className="mt-1 text-gray-500">users with Healthify</p>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="text-lg sm:text-xl font-semibold text-secondary-foreground ">
            Happy customer
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-primary">
            85%
          </p>
          <p className="mt-1 text-gray-500">this year alone</p>
        </div>
      </div>
    </section>
  );
}
