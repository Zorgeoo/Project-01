import { Button } from "./Button";
import { Jurag } from "../assets/jurag";
export const SkillsSection = () => {
    const arr = new Array(16).fill(0);
    return (
        <div className="">
            <container className="py-[96px] flex flex-col items-center gap-[48px] w-4/5 mx-auto">
                <Button title="Skills" />
                <div>The skills, tools and technologies I am really good at:</div>
                <div className="grid grid-cols-8 gap-20 lg:grid-cols-3">
                    {arr.map((item) => (
                        <Jurag />
                    ))}
                </div>
            </container>
        </div>
    )
}