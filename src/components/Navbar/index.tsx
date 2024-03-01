"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "../Hamburger";

const navItems = ["Work", "Studio", "Contact"];
const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <nav className="w-full h-28 border-b bg-cream">
        <div className="w-full h-full flex justify-between items-center px-5 py-4 relative z-[10] overflow-hidden bg-cream">
          <motion.div
            className={`${
              active ? "opacity-0" : "opacity-100"
            } transition duration-300`}
          >
            <Image
              src={"/sundown-logo.svg"}
              alt="Sundown Studio"
              width={120}
              height={120}
              priority
            />
          </motion.div>
          <div className="relative">
            <div className="mobile-nav overflow-hidden">
              <div className="wrapper-mobile-div  relative overflow-hidden">
                <div
                  className="w-32 flex md:hidden h-12 cursor-pointer items-center pr-5 justify-end border border-[#D3CEC8] rounded-full relative z-[9999] bg-cream "
                  onClick={() => setActive(!active)}
                >
                  <div className="flex justify-between items-center w-full pl-4">
                    <Hamburger />
                    <h1 className="text-blackish">Menu</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {active && (
            <motion.div className="slide-in-nav block md:hidden absolute  top-0 left-0 w-full h-screen ">
              <motion.div
                initial={{ y: "-100%" }}
                animate={{
                  y: "0",
                  transition: { duration: 0.4 },
                  display: "block",
                }}
                exit={{ y: "-100%", transition: { duration: 0.3 } }}
                className="h-full w-full bg-black opacity-35 z-[] absolute top-0 left-0"
              />
              <motion.div
                initial={{ y: "-100%" }}
                animate={{
                  y: "0",
                  transition: { duration: 0.5 },
                }}
                exit={{
                  y: "-100%",
                  transition: { duration: 0.6 },
                  transitionEnd: { display: "none" },
                }}
                //   onAnimationEnd={}

                className="nav-items w-full h-[50vh] bg-cream z-[3] flex items-end pt-28 pr-4 justify-center flex-col  absolute top-0 left-0 rounded-bl-[30px] rounded-br-[30px] leading-none"
              >
                {navItems.map((nav, i) => (
                  <div className="pb-3 " key={i}>
                    <Link
                      href={`/${nav.toLowerCase()}`}
                      key={i}
                      className=" text-[56px] sm:text-[80px] font_m  font-bold  "
                    >
                      {nav.toUpperCase()}
                    </Link>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
