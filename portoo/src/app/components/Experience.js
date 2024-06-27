import { Button } from "./Button";
import { ExperienceCard } from "./ExperienceCard";
const data = [
  {
    date: "Nov 2021 - Present",
    title: "Sr. Frontend Developer",
    list: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "jdhLorem ipsum dolor sit amet, consectetur adipiscing elit.cbdjhbvc",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    date: "Jul 2017 - Oct 2021",
    title: "Team Lead",
    list: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    date: "Dec 2015 - May 2017",
    title: "Full Stack Developer",
    list: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
  },
];
export const Experience = () => {
  return (
    <div className="dark:bg-[#111827]">
      <div className=" py-[96px]">
        <div className="max-w-screen-lg lg:w-[600px] m-auto">
          <container className="flex flex-col gap-[48px] items-center w-4/5 mx-auto">
            <Button className="" title="Experience" />
            <div className="self-center pb-[16px]">
              Here is a quick summary of my most recent experiences:
            </div>
            <div className="flex flex-col gap-[48px]">
              {data.map((item) => (
                <ExperienceCard
                  list={item.list}
                  date={item.date}
                  title={item.title}
                />
              ))}
            </div>
          </container>
        </div>
      </div>
    </div>
  );
};
