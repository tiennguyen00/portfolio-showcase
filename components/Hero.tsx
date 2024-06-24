import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <div className="pb-20 !pt-[8rem] relative">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}

      <div className="h-full max-h-[750px] w-full dark:bg-black-100 bg-white absolute top-0 left-0 flex items-center justify-center">
        <BackgroundBeams />

        {/* <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        /> */}
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless "
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Tien, a Next.js Developer based in VietNam.
          </p>

          <HoverBorderGradient
            containerClassName="min-w-[100px] px-4 py-2 bg-black-200 mt-4 rounded-lg"
            className="w-full bg-transparent"
          >
            <Link
              href={"#about"}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-2 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 text-center justify-center"
              )}
            >
              <FaLocationArrow size="26px" />
              <span className="text-2xl !cursor-pointer">Show my work</span>
            </Link>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
};

export default Hero;
