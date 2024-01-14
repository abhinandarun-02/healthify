import Image from "next/image";

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pb-16 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image 1"
            width={300}
            height={400}
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://images.pexels.com/photos/7578808/pexels-photo-7578808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Imaage 2"
            width={300}
            height={400}
          />
        </div>
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            We did not reinvent the wheel
          </h2>
          <p className="mb-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </p>
          <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
