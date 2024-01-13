import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight, Book, Video } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";
import image from "@/public/dashboard.png";

const Hero = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center mx-auto max-w-screen-xl xl:gap-16 lg:grid md:grid-cols-2 py-8 px-4 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Let&rsquo;s create more tools and ideas that brings us together.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Flowbite helps you connect with friends and communities of people
              who share your interests. Connecting with your friends and family
              as well as discovering new ones is easy with features like Groups.
            </p>
            <div className="w-full flex justify-center gap-4">
              <Button className="h-11 w-36 rounded-lg gap-2">
                <ArrowUpRight />
                Get started
              </Button>
              <Button variant="secondary" className="h-11 w-36 rounded-lg gap-2">
                <Book/>
                Learn More
              </Button>
            </div>
          </div>
          <Image
            className="w-full xl:px-6"
            src={image}
            alt="dashboard image"
            width={600}
            height={420}
          />
        </div>
      </section>
      {/* <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
              Start your free trial today
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              Try Flowbite Platform for 30 days. No credit card required.
            </p>
            <Button>Free trial for 30 days</Button>
          </div>
        </div>
      </section> */}
      <section className="bg-white dark:bg-gray-900">
        <h1 className="text-5xl font-bold text-center">Trusted By</h1>
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                Users
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                1000+
              </dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                Doctors
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">40+</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                Hospitals
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
};

export default Hero;
