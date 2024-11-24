import React from "react";

const Resume = () => {
  return (
    <>
      <div className="mt-5 !w-full">
        <div className="!flex !items-center justify-start pb-5">
          <h3 className="font-lexend-bold lg:text-heading text-mheading">
            Resume
          </h3>
          <div className=" ml-10 w-[10rem] bg-red-500 h-[.1rem]" />
        </div>

        <div className="flex items-center gap-4 mt-5 lg:flex-row flex-col w-full">
          <div className="w-[30rem]">
            <h3 className="text-3xl text-black font-medium">Eduction</h3>
            <div
              className="rounded-lg mt-5 p-5 flex flex-col items-start gap-3"
              style={{ background: "rgb(255, 244, 244)" }}
            >
              <span className="text-tiny  text-gray-lite ">2019-2023</span>
              <h3 className="text-xl "> BS - Computer Science</h3>
              <p className="">Virtual University, Lahore, Pakistan</p>
            </div>
            <div
              className="rounded-lg mt-5 p-5 flex flex-col items-start gap-3"
              style={{ background: "rgb(255, 244, 244)" }}
            >
              <span className="text-tiny  text-gray-lite ">2017 – 2019</span>
              <h3 className="text-xl ">BA - Urdu</h3>
              <p className="">Allama Iqbal University Islamabad, Pakistan</p>
            </div>
            <div
              className="rounded-lg mt-5 p-5 flex flex-col items-start gap-3"
              style={{ background: "rgb(255, 244, 244)" }}
            >
              <span className="text-tiny  text-gray-lite ">2015 – 2017</span>
              <h3 className="text-xl ">FSC - Computer Science</h3>
              <p className="">Karwan Model College Kohat, Pakistan</p>
            </div>
          </div>
          <div className="w-[30rem]">
            <h3 className="text-3xl text-black font-medium">Experience</h3>
            <div
              className="rounded-lg mt-5 p-5 flex flex-col items-start gap-3"
              style={{ background: "rgb(238, 245, 250)" }}
            >
              <span className="text-tiny text-gray-lite   ">
                NOV 6-2024 - Present
              </span>
              <h3 className="text-xl ">Full Stack Developer</h3>
              <p className="">Cipher Developer, Lahore, Punjab</p>
            </div>
            <div
              className="rounded-lg mt-5 p-5 flex flex-col items-start gap-3"
              style={{ background: "rgb(238, 245, 250)" }}
            >
              <span className="text-tiny text-gray-lite   ">
                NOV 6-2023 - NOV 6-2024
              </span>
              <h3 className="text-xl ">MERN Stack Developer</h3>
              <p className="">Cipher Developer, Lahore, Punjab</p>
            </div>

            <div
              className="rounded-lg mt-5 p-5 flex flex-col items-start gap-3"
              style={{ background: "rgb(238, 245, 250)" }}
            >
              <span className="text-tiny text-gray-lite   ">
                AUG 1-2022 - AUG 27-2023
              </span>
              <h3 className="text-xl ">Front End Developer</h3>
              <p className="">IT GURO, Peshawer, Punjab</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
