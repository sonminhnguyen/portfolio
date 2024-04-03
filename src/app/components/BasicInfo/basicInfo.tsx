import React from "react";
import Image from "next/image";

import image from "./assets/ITdev.png";
import Skills from "./skills";
import Services from "./services";

const BasicInfo = () => {
  return (
    <div id="portfolio" className="[&>*]:mx-4">
      <div className="text-lg flex relative z-1">
        <Image
          src={image}
          alt="Picture of the author"
          width={500}
          height={500}
          priority
        />
        <div className="my-auto text-justify mx-4 mr-8">
        I'm Son, a web developer specialising in frontend and backend technologies. 
        With a focus on creating elegant and functional websites, I bring creativity and technical expertise to every project. 
        In addition, I can also work with data, build some models, and create Windows applications by implementing C# (Winfows's Form). 
        So, let's build something amazing together.
        </div>
        <div className="absolute w-full h-4/5 top-12 bg-slate-600 z-0 opacity-20 rounded-lg"></div>
      </div>
      <div>
        <Skills />
        <Services />
      </div>
    </div>
  );
};

export default BasicInfo;
