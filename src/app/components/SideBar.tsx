"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { MyData } from "@/sanity/schemaTypes/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "../../../public/images";

const getData = async () => {
  const result: MyData[] = await client.fetch(`*[_type=="myData"]`);
  return result?.[0];
};

const SideBar = () => {
  const [myData, setMyData] = useState<MyData | null>(null);

  // Fetch data when the component mounts
  useEffect(() => {
    getData().then((data) => {
      setMyData(data);
    });
  }, []); // Empty dependency array means this runs only once when the component mounts

  const getSanityFileUrl = (ref: string): string | undefined => {
    if (!ref) return undefined; // Return undefined instead of null
    const [fileId, extension] = ref.replace("file-", "").split("-");
    return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${fileId}.${extension}`;
  };

  console.log("mydata", myData);

  return (
    <div className=" w-[100%] lg:w-[30%] ">
      <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center  px-6 rounded-[20px] mt-[180px] md:mt-[170px]">
        {myData?.image && (
          <Image
            alt="avatar"
            src={urlFor(myData.image).url()}
            width={240}
            height={240}
            className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
          />
        )}
        <div className="pt-[100px] pb-8">
          <h1 className="mt-6 mb-1 text-3xl font-semibold ">{myData?.name}</h1>
          <h3 className="mb-4 text-[#7B7B7B] inline-block  px-5 py-1.5 rounded-lg ">
            {myData?.position}
          </h3>
          <div className="flex justify-center space-x-3">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#1C9CEA] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </span>
            </a>
            <a
              href="https://github.com/MrSohailAhmad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#613345] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]">
                {images.GitHub("w-5 stroke-black h-5")}
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-sohail-355a621b1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="socialbtn text-[#0072b1] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </span>
            </a>
          </div>
          <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] ">
            <div className="flex py-2.5 border-b border-[#E3E3E3] ">
              <span className="flex-shrink-0 socialbtn bg-white text-[#E93B81] shadow-md hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 320 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
                </svg>
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] ">Phone</p>
                <p className="break-all">
                  <a
                    className="hover:text-[#FA5252] lg:text-para text-mpara duration-300 transition"
                    href="tel:+923444912684"
                  >
                    {myData?.phone}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex py-2.5 border-b border-[#E3E3E3] ">
              <span className="flex-shrink-0 socialbtn bg-white text-[#6AB5B9]  shadow-md hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 384 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                </svg>
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] ">Location</p>
                <p className="break-all">{myData?.location}</p>
              </div>
            </div>
            <div className="flex py-2.5 border-b border-[#E3E3E3] ">
              <span className="flex-shrink-0 socialbtn bg-white  text-[#FD7590] shadow-md hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z" />
                </svg>
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] ">Email</p>
                <p className="break-all">
                  {" "}
                  <a
                    className="hover:text-[#FA5252] duration-300 transition"
                    href={`mailto:${myData?.email}`}
                  >
                    {myData?.email}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex py-2.5 undefined">
              <span className="flex-shrink-0 socialbtn bg-white text-[#C17CEB] shadow-md hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" />
                </svg>
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] ">Birthday</p>
                <p className=" break-all">{myData?.dob}</p>
              </div>
            </div>
          </div>
          <a
            href={
              myData?.pdfFile?.asset?._ref
                ? getSanityFileUrl(myData.pdfFile.asset._ref)
                : "#"
            }
            target="_blank"
            rel="noopener noreferrer"
            download={`Muhammad_Sohail_CV.pdf`}
            className="inline-flex cursor-pointer items-center mx-auto hover:text-white  duration-200 transition ease-linear hover:!bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] !bg-gray-400 px-8 py-3 text-lg text-white rounded-[35px] mt-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              width="30px"
              height="30px"
              viewBox="0 0 1024 1024"
            >
              <path d="M512 666.5L367.2 521.7l36.2-36.2 83 83V256h51.2v312.5l83-83 36.2 36.2L512 666.5zm-204.8 50.3V768h409.6v-51.2H307.2z" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
