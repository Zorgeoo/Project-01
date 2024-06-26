import { Button } from "./Button";

const data = [
  {
    text: "React",
  },
  {
    text: "Next.js",
  },
  {
    text: "TypeScript",
  },
  {
    text: "Nest.js",
  },
  {
    text: "PostgreSQL",
  },
  {
    text: "Tailwindcss",
  },
  {
    text: "Figma",
  },
  {
    text: "Cypress",
  },
  {
    text: "Storybook",
  },
  {
    text: "Git",
  },
];
export const WorkCard = (props) => {
  return (
    <div
      className={`flex drop-shadow-md rounded-[12px] overflow-hidden drop-shadow-md ${
        props.reverse ? "flex-row-reverse" : ""
      } lg:flex-col shadow-xl`}
    >
      <div className="flex-1 bg-gray-100  p-[48px] dark:bg-[]">
        <img className="pt-[15px]" src={props.source} />
      </div>
      <div className="flex-1 flex flex-col p-[48px] justify-around h-[500px] dark:bg-[#1f2937]">
        <div className="text-[20px] font-semibold">{props.title}</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </div>
        <div className="flex gap-[8px] flex-wrap text-[14px]">
          {data.map((item) => (
            <Button title={item.text} />
          ))}
        </div>
        <img src="Sharebutton.png" className="w-[36px] h-[36px]" />
      </div>
    </div>
  );
};
