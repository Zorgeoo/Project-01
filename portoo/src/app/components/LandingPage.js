import Image from "next/image";
import styles from "./Navbar.module.css";
import { SunIcon } from "../assets/SunIcon";
import { MoonIcon } from "../assets/MoonIcon";

export const LandingPage = (props) => {
  return (
    <div className="dark:bg-black">
      <div className="w-[1440px] m-auto">
        <header className="flex  w-4/5  mx-auto justify-between content-center py-[16px] lg:w-full p-[16px] items-center ">
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
          <img src="bar.png" className="hidden lg:block" />
          {/* <div className="hidden w-11/12 sm:block">
                    <div className="text-[30px] font-extrabold" >ZORGOO</div>
                    <div></div>
                    <div></div>
                </div> */}
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
              <img src="Links.png" className="w-[120px] h-[40px]" />
            </div>
            <div className="flex-1 items-center flex justify-end">
              <img className=" " src="TOMPIC1" />
            </div>
          </container>
        </div>
      </div>
    </div>
  );
};
