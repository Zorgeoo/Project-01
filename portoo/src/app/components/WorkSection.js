import { Container } from "postcss";
import { Button } from "./Button";
import { WorkCard } from "./WorkCard";

export const WorkSection = () => {
  return (
    <div className="dark:bg-black">
      <div className="py-[96px] w-[1440px]  lg:w-[600px] m-auto">
        <container className=" w-4/5 mx-auto flex items-center flex-col gap-[48px]">
          <Button title="Work" />
          <div>Some of the noteworthy projects I have built:</div>
          <WorkCard source="ubcab.png" title="UBCab" />
          <WorkCard source="mentorhub.png" reverse title="MentorHub" />
          <WorkCard source="itoim.png" title="Itoim" />
        </container>
      </div>
    </div>
  );
};
