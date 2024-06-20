"use client";
import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent?: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.9, 0.7] : [1, 1.05];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.8], [0, 20]);
  const scale = useTransform(scrollYProgress, [0, 0.8], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.8], [-100, 0]);

  return (
    <div
      className="flex  items-center justify-center  relative"
      ref={containerRef}
    >
      <div
        className="py-5 md:py-20 w-full relative ease-in-out"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      transition={{
        scale: {
          ease: "easeInOut",
        },
        rotate: {
          ease: "easeInOut",
        },
        translate: {
          ease: "easeInOut",
        },
      }}
      className="-mt-12  w-full p-2 md:p-6 ease-in-out"
    >
      <div className="h-full w-full rounded-2xl  md:rounded-2xl md:p-4 bg-transparent">
        {children}
      </div>
    </motion.div>
  );
};
