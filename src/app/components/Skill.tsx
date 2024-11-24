"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Skill as SkillType } from "@/sanity/schemaTypes/types";
import { hexToRgb } from "@/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const getData = async () => {
  const result: SkillType[] = await client.fetch(`*[_type=="skill"]`);
  return result;
};
const Skill = () => {
  const [myData, setMyData] = useState<SkillType[] | null>(null);

  // Fetch data when the component mounts
  useEffect(() => {
    getData().then((data) => {
      setMyData(data);
    });
  }, []); // Empty dependency array means this runs only once when the component mounts

  console.log("myData", myData);

  return (
    <div className=" flex items-start flex-col px-6">
      <div className="!flex !items-center justify-start pb-5">
        <h3 className="font-lexend-bold lg:text-heading text-mheading">
          Skill
        </h3>
        <div className=" ml-10 w-[10rem] bg-red-500 h-[.1rem]" />
      </div>

      <div className="flex items-start flex-col">
        {/* <div className="flex items-start justify-start flex-col w-full">
          <h4 className="text-3xl text-black font-medium mb-5">
            Working Skills
          </h4>
          <div className=" !w-full flex items-start gap-3 flex-col ">
            <div className="flex relative justify-between  flex-col w-full">
              <div className="p-2 flex items-start  justify-between h-full">
                <span className=" text-xl text-gray-lite font-semibold ">
                  Full Stack Development
                </span>
                <span className=" text-base font-semibold text-gray-lite pr-5 ">
                  80%
                </span>
              </div>
              <span className="w-[80%] absolute bg-gradient-to-r from-red-700/10 to-blue-900 h-full -z-1"></span>
            </div>
            <div className="flex relative justify-between flex-col w-full">
              <div className=" p-2 !flex overflow-hidden !items-center  justify-between h-full w-full z-[2]">
                <span className=" text-xl text-gray-lite font-semibold ">
                  MERN Stack Development
                </span>
                <span className=" text-base font-semibold !text-white text-gray-lite pr-5 ">
                  95%
                </span>
              </div>
              <span className="w-[100%] absolute bg-gradient-to-r from-red-700/10 to-blue-900 h-full -z-1"></span>
            </div>
          </div>
        </div> */}
        <div className="col-span-1 mt-5">
          <h4 className="text-3xl text-black font-medium mb-5">
            Working Skill & Knowledge
          </h4>
          <div className="flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap">
            {myData?.map((item: SkillType, idx: number) => (
              <div
                key={idx}
                style={{
                  backgroundColor: `rgba(${hexToRgb(item.color)}, 0.2)`,
                }}
                className={`resume-btn  w-auto flex flex-row  items-center justify-start gap-3`}
              >
                <Image
                  src={urlFor(item.skillIcon).url()}
                  alt={item.skill}
                  width={30}
                  height={30}
                />
                <span className="text-[13px] font-edu">{item.skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
