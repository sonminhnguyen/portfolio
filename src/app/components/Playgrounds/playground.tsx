import React from "react";
import Image from "next/image";
import photography from "./assets/photography.jpeg";
import music from "./assets/music.jpeg";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Dancing_Script } from "next/font/google";
const DanScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

const Playgrounds = () => {
  return (
    <div id="playgrounds" className="flex flex-col [&>*]:my-4 mx-4 select-none">
      <div className="w-[500px] text-[40px] font-medium">PLAYGROUNDS</div>
      <div className="grid grid-cols-2 w-full m-auto">
        <div className="relative ">
          <div className="text-sky-100 font-bold text-7xl text-center 2xl:top-1/4 left-0 right-0 translate-y-2/4 absolute font-bold z-10">
            <div className={`${DanScript.className} font-bold text-7xl`}>
              Photography
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="secondary">Open</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Coming soon.</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <AspectRatio ratio={16 / 9} className="">
            <Image
              src={photography}
              alt="Photo by SonNguyen"
              fill
              sizes="500"
              className="rounded-md object-cover opacity-50"
            />
          </AspectRatio>
        </div>
        <div className="relative">
          <div className="text-sky-100 font-bold text-7xl text-center 2xl:top-1/4 left-0 right-0 translate-y-2/4 absolute font-bold z-10">
            <div
              className={`${DanScript.className} font-bold text-7xl select-none`}
            >
              Music
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="secondary">Open</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Coming soon.</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <AspectRatio ratio={16 / 9}>
            <Image
              src={music}
              alt="Music by SonNguyen"
              fill
              sizes="500"
              className="rounded-md object-cover opacity-50"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default Playgrounds;
