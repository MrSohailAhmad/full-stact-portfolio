"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent SSR issues
  }
  return (
    <div className="flex items-start justify-center">
      {" "}
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="container w-[100%] xl:w-[90%] relative flex flex-col md:flex-row items-start justify-center gap-5">
          <Navbar className="block md:hidden mt-10" />
          <SideBar />
          <div className="w-[100%] md:w-[70%] h-auto mt-[10px] md:!mt-[25px] ">
            <Navbar className="hidden md:block" />
            <div className="rounded-2xl bg-white ">
              <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
                <h3 className="font-lexend-bold lg:text-heading text-mheading pb-5">
                  About Me
                </h3>
                <div className="lg:grid grid-cols-12 items-center ">
                  <div className="col-span-12 space-y-2.5">
                    <div className="lg:mr-16">
                      <p className="text-gray-lite text-color-910 leading-7 lg:text-para md:text-mpara font-edu italic">
                        I am Creative Director and UI/UX Designer from Sydney,
                        Australia, working in web development and print media. I
                        enjoy turning complex problems into simple, beautiful
                        and intuitive designs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <section className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
                  <h3 className="text-[35px]  font-medium pb-5">What I do!</h3>
                  <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
                    <div
                      className="about-box bg-transparent"
                      style={{ background: "rgb(252, 244, 255)" }}
                    >
                      <img
                        alt="icon"
                        srcSet="/images/icons/icon-1.svg 1x, /images/icons/icon-1.svg 2x"
                        src="/images/icons/icon-1.svg"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        className="w-10 h-10 object-contain block"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                      <div className="space-y-2 break-all">
                        <h3 className=" text-xl font-semibold">Ui/Ux Design</h3>
                        <p className=" leading-8 text-gray-lite ">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam euismod volutpat.
                        </p>
                      </div>
                    </div>
                    <div
                      className="about-box dark:bg-transparent"
                      style={{ background: "rgb(254, 250, 240)" }}
                    >
                      <img
                        alt="icon"
                        srcSet="/images/icons/icon-2.svg 1x, /images/icons/icon-2.svg 2x"
                        src="/images/icons/icon-2.svg"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        className="w-10 h-10 object-contain block"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                      <div className="space-y-2 break-all">
                        <h3 className=" text-xl font-semibold">
                          App Development
                        </h3>
                        <p className=" leading-8 text-gray-lite ">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam euismod volutpat.
                        </p>
                      </div>
                    </div>
                    <div
                      className="about-box "
                      style={{ background: "rgb(252, 244, 255)" }}
                    >
                      <img
                        alt="icon"
                        srcSet="/images/icons/icon-3.svg 1x, /images/icons/icon-3.svg 2x"
                        src="/images/icons/icon-3.svg"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        className="w-10 h-10 object-contain block"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                      <div className="space-y-2 break-all">
                        <h3 className=" text-xl font-semibold">Photography</h3>
                        <p className=" leading-8 text-gray-lite ">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam euismod volutpat.
                        </p>
                      </div>
                    </div>
                    <div
                      className="about-box "
                      style={{ background: "rgb(255, 244, 244)" }}
                    >
                      <img
                        alt="icon"
                        srcSet="/images/icons/icon-4.svg 1x, /images/icons/icon-4.svg 2x"
                        src="/images/icons/icon-4.svg"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        className="w-10 h-10 object-contain block"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                      <div className="space-y-2 break-all">
                        <h3 className=" text-xl font-semibold">Photography</h3>
                        <p className=" leading-8 text-gray-lite ">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam euismod volutpat.
                        </p>
                      </div>
                    </div>
                    <div
                      className="about-box "
                      style={{ background: "rgb(255, 240, 248)" }}
                    >
                      <img
                        alt="icon"
                        srcSet="/images/icons/icon-5.svg 1x, /images/icons/icon-5.svg 2x"
                        src="/images/icons/icon-5.svg"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        className="w-10 h-10 object-contain block"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                      <div className="space-y-2 break-all">
                        <h3 className=" text-xl font-semibold">Managment</h3>
                        <p className=" leading-8 text-gray-lite ">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam euismod volutpat.
                        </p>
                      </div>
                    </div>
                    <div
                      className="about-box "
                      style={{ background: "rgb(243, 250, 255)" }}
                    >
                      <img
                        alt="icon"
                        srcSet="/images/icons/icon-6.svg 1x, /images/icons/icon-6.svg 2x"
                        src="/images/icons/icon-6.svg"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        className="w-10 h-10 object-contain block"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                      <div className="space-y-2 break-all">
                        <h3 className=" text-xl font-semibold">
                          Web Development
                        </h3>
                        <p className=" leading-8 text-gray-lite ">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam euismod volutpat.
                        </p>
                      </div>
                    </div>
                  </div>
                </section> */}
              {/* <section className="px-2 sm:px-5 md:px-10 lg:px-14 mb-10">
                  <h3 className="text-[35px]  font-medium pb-5">My Client!</h3>
                </section> */}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
