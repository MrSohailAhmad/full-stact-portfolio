import React from "react";
import { images } from "../../../public/images";

const Home = () => {
  return (
    <>
      <div className="!flex !items-center justify-start pb-5">
        <h3 className="font-lexend-bold lg:text-heading text-mheading">
          About Me
        </h3>
        <div className=" ml-10 w-[10rem] bg-red-500 h-[.1rem]" />
      </div>
      <div className="lg:grid grid-cols-12 items-center ">
        <div className="col-span-12 space-y-2.5">
          <div className="w-full">
            <p className="text-gray-lite text-[#44566c] text-color-910 leading-7 lg:text-para md:text-mpara font-edu italic">
              Full Stack Developer with expertise in both front-end and back-end
              technologies. Proficient in the MERN stack, including React.js,
              Next.js, Node.js, NestJS, and Express.js, as well as TypeScript
              for clean, efficient code. Skilled in database management using
              MongoDB, PostgreSQL, Firebase DB, Supabase, and advanced ORMs like
              Prisma, TypeORM, and Drizzle. Experienced in building scalable,
              responsive, and high-performance applications with tools like
              Sanity for content management. Focused on user-centric design,
              cross-functional collaboration, and delivering full-stack
              solutions that meet both technical and business requirements.
            </p>
          </div>
        </div>
      </div>
      <section className="mt-5">
        <h3 className="font-lexend-bold lg:text-heading text-mheading">
          My Skills
        </h3>
        <div className="flex items-center gap-4 mt-5 lg:flex-row flex-col">
          <div
            className="about-box bg-transparent"
            style={{ background: "rgb(252, 244, 255)" }}
          >
            <span>{images.FullStack("h-10 w-10")}</span>
            <div className="space-y-2 break-all">
              <h3 className=" text-xl font-semibold">Full Stack Developer</h3>
              <p className=" leading-8 text-gray-lite font-edu text-[#44566c] ">
                Experienced in building dynamic, responsive, and scalable web
                applications using modern frameworks like Next.js, React,
                Node.js, and MongoDB. Skilled in both front-end and back-end
                development, ensuring seamless integration and performance.
              </p>
            </div>
          </div>
          <div
            className="about-box cursor-pointer bg-transparent"
            style={{ background: "rgb(254, 250, 240)" }}
          >
            <span>{images.AI("h-10 w-10")}</span>
            <div className="space-y-2 break-all">
              <h3 className=" text-xl font-semibold">Learning AI</h3>
              <p className=" leading-8 text-gray-lite font-edu  text-[#44566c] ">
                Currently expanding expertise in Artificial Intelligence, with a
                focus on Generative AI, Agentic AI, and Robotic AI. Passionate
                about leveraging AI technologies to create innovative,
                user-centric solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
