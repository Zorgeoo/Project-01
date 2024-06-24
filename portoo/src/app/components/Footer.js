import { Button } from "./Button"
import { FaCopy } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="">
            <container className="flex flex-col gap-[48px] px-[80px] py-[96px] items-center">
                <Button title="Get in Touch" />
                <div>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</div>
                <div>
                    <div className="flex items-center justify-center text-[36px] gap-2">
                        <IoMdMail />
                        <div>tom@pinecone.mn</div>
                        <FaCopy />
                    </div>
                    <div className="flex items-center justify-center text-[36px] gap-2">
                        <FaPhone />
                        <div>+976 88112233</div>
                        <FaCopy />
                    </div>
                </div>
                <div>
                    <div>You may also find me on these platforms!</div>
                    <div className="flex items-center justify-center gap-[10px] text-[20px]">
                        <FaGithub />
                        <FaTwitter />
                        <FaFigma />
                    </div>
                </div>
            </container>
            <div className="flex items-center justify-center px-[80px] py-[24px] bg-gray-100 gap-[20px]">
                <FaRegCopyright />
                <div>2024 | Greetings with ❤️️ from Ulaanbaatar</div>
            </div>
        </div>
    )
}