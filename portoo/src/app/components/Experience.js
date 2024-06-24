import { Button } from "./Button";
import { ExperienceCard } from "./ExperienceCard"
const data = [{ date: "Hello", title: "Hide", list: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "jdhLorem ipsum dolor sit amet, consectetur adipiscing elit.cbdjhbvc", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."] }, { date: "pro", title: "medium", list: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."] }, { date: "easy", title: "eazy", list: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.",] }]
export const Experience = () => {
    return (
        <div className="bg-gray-50  py-[96px]" >
            <container className="flex flex-col gap-[48px] items-center w-4/5 mx-auto">
                <Button className="" title="Experience" />
                <div className="self-center pb-[16px]">Here is a quick summary of my most recent experiences:</div>
                <div className="flex flex-col gap-[48px]">
                    {data.map((item) => (
                        <ExperienceCard list={item.list} date={item.date} title={item.title} />
                    ))}
                </div>
            </container >
        </div >
    )
}