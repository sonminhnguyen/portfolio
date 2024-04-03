"use client";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="flex">
      <div className="min-w-[500px] text-[40px] mt-8 font-medium ">
        SERVICES
      </div>
      <div className="[&>*]:my-4 [&>*]:mx-2 ">
        <div className="">
          <p className="font-medium text-[30px]">WEB DEVELOPER</p>
          <p className="my-auto text-lg text-justify 2xl:mr-[150px]">This is one of my strongest skills. I can use JavaScript, TypeScript, NodeJS, and ReactJS to build wonderful websites. 
            Some side languages that I can basically use are NextJS and NestJS. 
            Talking about libraries, I can use several like SASS, TailwindCSS, BootStrap, knexJS, Socket.io, JWT, Firebase, Redux, etc. 
            Moreover, I am able to implement some platforms, such as Docker, Kubernities, and AWS. </p>
        </div>
        <div className="">
          <p className="font-medium text-[30px]">DATA ENGINEER</p>
          <p className="my-auto text-lg text-justify">I can use Python and its libraries to manipulate data and build it into models that fit the required criteria.</p>
        </div>
        <div className="">
          <p className="font-medium text-[30px]">WINDOWS APPLICATION DEVELOPER</p>
          <p className="my-auto text-lg text-justify">I am able to implement applications by using C# (Windows Forms) and its tools.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
