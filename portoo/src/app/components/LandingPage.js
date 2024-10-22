"use client";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { SunIcon } from "../assets/SunIcon";
import { MoonIcon } from "../assets/MoonIcon";
import { FaFigma, FaGithub, FaTwitter } from "react-icons/fa";
import { EscButton } from "../assets/EscButton";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export const LandingPage = (props) => {
  const [showNavBar, setShowNav] = useState(false);

  const [data, setData] = useState([]);
  console.log("data", data);

  const sideBar = () => {
    setShowNav(!showNavBar);
    console.log("Hi");
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`http://localhost:3007/`);

        const data = await res.json();

        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="dark:bg-black overflow-hidden">
      <div className="max-w-screen-lg lg:w-[600px] m-auto px-[400px]">
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
            <div className="flex flex-1 flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h1 className=" text-4xl text-[#F9FAFB] lg:text-7xl font-bold dark:text-black">
                  Hi, I’m Tom
                </h1>
                <p>
                  I specialize in full stack development, particularly with
                  React.js and Node.js. My main goal is to create exceptional
                  digital experiences that are fast, visually appealing, and
                  accessible to everyone. With over 7 years of experience in web
                  development, I continue to find joy in crafting innovative
                  solutions and designs.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  {/* <img className="w-6 h-6 " src="/maps-icon.png" /> */}
                  {/* <MapsIcon color={state ? "black" : "#d1d5da"} /> */}
                  <p>Ulaanbaatar, Mongolia</p>
                </div>
                <div className="flex gap-2">
                  <img className="w-6 h-6" src="/green-icon.png" />
                  <p>Available for new projects</p>
                </div>
              </div>
              {/* <Links state={state} />cle */}
            </div>
            <div className="flex flex-1 justify-center lg:justify-end">
              <div className="h-[320px] w-[300px]">
                <img
                  className="h-full w-full object-cover shadow-[-20px_20px_8.0px_rgb(108,37,17)]"
                  src="/self-port.jpg"
                />
              </div>
            </div>
          </container>
        </div>
      </div>
    </div>
  );
};
