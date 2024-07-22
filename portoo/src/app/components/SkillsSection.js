import { Button } from "./Button";
import { JsLogo, Jurag } from "../assets/JsLogo";
import { TSLogo } from "../assets/TSLogo";
import { React } from "../assets/React";
import { NextLogo } from "../assets/NextLogo";
import { NodeJs } from "../assets/NodeJs";
import { Express } from "../assets/Express";
import { Nest } from "../assets/Nest";
import { Socket } from "../assets/Socket";
import { Mongo } from "../assets/Mongo";
import { Sass } from "../assets/Sass";
import { Tw } from "../assets/Tw";
import { Figma } from "../assets/Figma";
import { Cypress } from "../assets/Cypress";
import { StoryBook } from "../assets/StoryBook";
import { Git } from "../assets/Git";

export const SkillsSection = () => {
  return (
    <div className="dark:bg-black">
      <div className="max-w-screen-lg lg:w-[600px] m-auto px-[400px]">
        <container className="py-[96px] flex flex-col items-center gap-[48px] w-4/5 mx-auto">
          <Button title="Skills" />
          <div>The skills, tools and technologies I am really good at:</div>
          <div className="grid grid-cols-8 gap-20 lg:grid-cols-3">
            <JsLogo />
            <TSLogo />
            <React />
            <NextLogo />
            <NodeJs />
            <Express />
            <Nest />
            <Socket />
            <Nest />
            <Mongo />
            <Sass />
            <Tw />
            <Figma />
            <Cypress />
            <StoryBook />
            <Git />
          </div>
        </container>
      </div>
    </div>
  );
};
