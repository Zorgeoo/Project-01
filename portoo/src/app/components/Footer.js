import { Button } from "./Button";
import { LuCopy } from "react-icons/lu";
import { GoMail } from "react-icons/go";
import { HiOutlinePhone } from "react-icons/hi";
import { FiTwitter } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className="dark:bg-black">
      <div className="max-w-screen-lg  lg:w-[600px] m-auto px-[400px]">
        <container className="flex flex-col gap-[48px] px-[80px] py-[96px] items-center">
          <Button title="Get in Touch" />
          <div>
            What is next? Feel free to reach out to me if you are looking for a
            developer, have a query, or simply want to connect.
          </div>
          <div>
            <div className="flex items-center justify-center text-[36px] gap-2">
              <GoMail />
              <div className="font-semibold">tom@pinecone.mn</div>
              <LuCopy />
            </div>
            <div className="flex items-center justify-center text-[36px] gap-2">
              <HiOutlinePhone />
              <div className="font-semibold">+976 88112233</div>
              <LuCopy />
            </div>
          </div>
          <div>
            <div>You may also find me on these platforms!</div>
            <div className="mt-[8px] flex items-center justify-center gap-[10px] text-[20px]">
              <FiGithub className="text-[36px]" />
              <FiTwitter />
              <FaFigma />
            </div>
          </div>
        </container>
      </div>
      <div className="flex items-center justify-center px-[80px] py-[24px] bg-gray-100 gap-[20px] dark:bg-[#111827]">
        <FaRegCopyright />
        <div>2024 | Greetings with ❤️️ from Ulaanbaatar</div>
      </div>
    </div>
  );
};
