"use client";
import React from "react";
import { IconContext } from "react-icons";
import { DiNodejs } from "react-icons/di";
import { RiReactjsFill, RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiGraphql,
  SiAmazonaws,
  SiDocker,
} from "react-icons/si";

const Skills = () => {
  return (
    <IconContext.Provider
      value={{ color: "tear", size: "5em", className: "global-class-name" }}
    >
      <div className="flex">
        <div className="w-[500px] text-[40px] mt-8 font-medium ">
          SKILLS
        </div>
        <div className="[&>*]:my-4">
          <div className="flex grid-flow-row-dense [&>*]:mx-2 ">
            <RiJavascriptFill />
            <BiLogoTypescript />
            <DiNodejs />
            <RiReactjsFill />
            <FaPython />
            <p className="font-medium text-[50px]">C# C++</p>
          </div>
          <div className="flex grid-flow-row-dense [&>*]:mx-2	">
            <SiMysql />
            <SiMongodb />
            <BiLogoPostgresql />
            <SiGraphql />
          </div>
          <div className="flex grid-flow-row-dense [&>*]:mx-2	">
            <SiAmazonaws />
            <SiDocker />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Skills;
