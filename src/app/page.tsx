"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import SideBar from "./components/SideBar";
import Skill from "./components/Skill";
import Details from "./components/Details";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [nav, setNav] = useState<string>("home");
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
        <div className="container w-[100%] xl:!w-[90%] relative flex flex-col md:flex-row items-start justify-center gap-5">
          <Navbar className="block md:hidden mt-10" nav={nav} setNav={setNav} />
          <SideBar />
          <div className="w-[100%] md:w-[70%] h-auto mt-[10px] md:!mt-[25px] ">
            <Navbar className="hidden md:block" nav={nav} setNav={setNav} />
            <div className="rounded-2xl bg-white ">
              <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
                {nav === "home" && <Details />}
                {nav === "resume" && <Resume />}

                {nav === "skill" && <Skill />}

                {nav === "contact" && <Contact />}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
