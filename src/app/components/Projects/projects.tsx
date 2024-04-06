"use client";
import React, { useCallback, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Fondamento } from "next/font/google";

import { ChevronLeft, ChevronRight } from "lucide-react";
import config from "./config";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";

const FondamenTo = Fondamento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-headland-one",
});

const Projects = () => {
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef?.current?.swiper?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef?.current?.swiper?.slideNext();
  }, []);

  return (
    <div id="projects" className="[&>*]:mx-4">
      <div className="flex justify-between my-4">
        <span className="w-[500px] text-[40px] font-medium">PROJECTS</span>
        <span className="font-medium [&>*]:m-1 [&>*]:text-[30px] ">
          <Button variant="outline" size="icon" onClick={handlePrev}>
            <ChevronLeft className="h-10 w-10" />
          </Button>
          <Button variant="outline" size="icon" onClick={handleNext}>
            <ChevronRight className="h-10 w-10" />
          </Button>
        </span>
      </div>
      <div>
        <Swiper
          ref={sliderRef}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            1536: {
              slidesPerView: 3,
            },
          }}
        >
          {config.map((element) => (
            <SwiperSlide key={element.id} className="mr-0">
              <a
                href={element?.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Card className="w-[500px] h-[350px] m-4 bg-slate-100 hover:cursor-pointer">
                  <CardHeader>
                    <p
                      className={`${FondamenTo.className} text-teal-600 font-medium my-auto text-2xl text-justify`}
                    >
                      {element.name}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Image src={element.image} alt="Card Image" />
                  </CardContent>
                </Card>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
