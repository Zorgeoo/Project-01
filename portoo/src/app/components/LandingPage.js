import Image from "next/image"
import styles from "./Navbar.module.css"


export const LandingPage = () => {
    return (
        <div className="h-screen">
            <header className="flex border w-4/5 mx-auto justify-between content-center py-[16px] sm:w-full p-[16px] items-center">
                <div className="text-[30px] font-extrabold" >ZORGOO</div>
                <div className="flex border gap-[24px] content-center sm:hidden">
                    <div className="flex gap-[24px] content-center m-auto">
                        <div>About</div>
                        <div>Work</div>
                        <div>Testimonials</div>
                        <div>Contact</div>
                    </div>
                    <div className="flex gap-[16px] content-center">
                        <img src="Icon Button.png" className="w-[40px] h-[40px]" />
                        <button className="px-[16px] py-[6px] rounded-[12px] bg-black text-white">Download CV</button>
                    </div>
                </div>
                <img src="bar.png" className="hidden sm:block" />
                {/* <div className="hidden w-11/12 sm:block">
                    <div className="text-[30px] font-extrabold" >ZORGOO</div>
                    <div></div>
                    <div></div>
                </div> */}
            </header >
            <div>
                <container className="flex border h-[1000px] py-[96px] px-[80px] items-center gap-[48px] sm:flex-col-reverse sm:mt-[200px]">
                    <div className="flex-1 border flex flex-col gap-[48px]">
                        <div>
                            <div className="text-[60px]">Hi, I’m ZORGOO 👋</div>
                            <div>I specialize in full stack development, particularly with React.js and Node.js.
                                My main goal is to create exceptional digital experiences that are fast, visually appealing, and accessible to everyone. With over 7 years of experience in web development, I continue to find joy in crafting innovative solutions and designs.</div>
                        </div>
                        <div>
                            <div className="flex m-auto items-center gap-[10px]">
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
                    <div className="flex-1 border items-center flex justify-end">
                        <img src="Pic Container.png" />
                    </div>
                </container>
            </div>
        </div >
    )
}