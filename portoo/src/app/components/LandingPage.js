"use client";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { SunIcon } from "../assets/SunIcon";
import { MoonIcon } from "../assets/MoonIcon";
import { FaFigma, FaGithub, FaTwitter } from "react-icons/fa";
import { EscButton } from "../assets/EscButton";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export const LandingPage = (props) => {
  const [showNavBar, setShowNav] = useState(false);

  const sideBar = () => {
    setShowNav(!showNavBar);
    console.log("Hi");
  };
  return (
    <div className="dark:bg-black">
      <div className="max-w-screen-lg lg:w-[600px] m-auto">
        <header className="flex  w-4/5 mx-auto justify-between py-[16px] lg:w-full p-[16px] items-center relative ">
          <div className="text-[30px] fo font-extrabold">TOM</div>
          <div className="flex gap-[24px] content-center lg:hidden">
            <div className="flex gap-[24px] content-center m-auto">
              <div>About</div>
              <div>Work</div>
              <div>Testimonials</div>
              <div>Contact</div>
            </div>
            <div className="flex gap-[16px] content-center">
              <button onClick={props.toggleDarkMode}>
                {props.isDark ? <MoonIcon /> : <SunIcon />}
              </button>
              <button className="px-[16px] py-[6px] rounded-[12px] bg-black text-white dark:bg-white dark:text-black">
                Download CV
              </button>
            </div>
          </div>
          <button
            className="hidden lg:block absolute right-0"
            onClick={sideBar}
          >
            <RxHamburgerMenu className="text-[30px]" />
          </button>
          <div className="hidden lg:block">
            <div
              className={`fixed top-0 left-[100%] w-[320px] h-screen transition duration-500 ease-in-out bg-white dark:bg-black dark:text-white ${
                showNavBar ? styles.open : ""
              }`}
            >
              <div className="p-[16px] flex justify-between">
                <div className="text-[30px] font-extrabold">TOM</div>
                <button onClick={sideBar}>
                  <EscButton />
                </button>
              </div>
              <div className="border border-l-0 border-r-0 flex flex-col gap-[16px] p-[16px] ">
                <div>About</div>
                <div>Work</div>
                <div>Testimonials</div>
                <div>Contact</div>
              </div>
              <div className="flex justify-between p-[16px] gap[16px]">
                <div>Switch theme</div>
                <button onClick={props.toggleDarkMode}>
                  {props.isDark ? <MoonIcon /> : <SunIcon />}
                </button>
              </div>
              <button className="w-[90%] ml-[16px] px-[16px] py-[6px] rounded-[12px] bg-black text-white dark:bg-white dark:text-black">
                Download CV
              </button>
            </div>
          </div>
        </header>
        <div className="w-4/5 mx-auto">
          <container className="flex  py-[96px] items-center gap-[48px] lg:flex-col-reverse lg:mt-[100px]">
            <div className="flex-1  flex flex-col gap-[100px] justify-between">
              <div>
                <div className="text-[60px] text-bold">Hi, I’m TOM 👋</div>
                <div>
                  I specialize in full stack development, particularly with
                  React.js and Node.js. My main goal is to create exceptional
                  digital experiences that are fast, visually appealing, and
                  accessible to everyone. With over 7 years of experience in web
                  development, I continue to find joy in crafting innovative
                  solutions and designs.
                </div>
              </div>
              <div className="">
                <div className="flex m-auto items-center gap-[10px] pb-[8px]">
                  <img src="Icon.png" className="h-[20px] w-[20px]" />
                  <div>Ulaanbaatar, Mongolia</div>
                </div>
                <div className="flex m-auto items-center gap-[10px] pl-[5px]">
                  <img src="green dot.png" className="h-[10px] " />
                  <div>Available for new projects</div>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <FaGithub className="text-[24px] " />
                <FaTwitter className="text-[24px]" />
                <FaFigma className="text-[24px]" />
              </div>
            </div>
            <div className="flex-1 items-center flex justify-center">
              <img
                className="shadow-[50px_40px_0px_0px_#00000024] dark:shadow-[50px_40px_0px_0px_#374151] w-[70%]"
                src="TOMPIC1.png"
              />
            </div>
          </container>
        </div>
      </div>
    </div>
  );
};
