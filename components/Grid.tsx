import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { SparklesCore } from "./ui/Sparkles";
import { ContainerScroll } from "./ui/ContainerScroll";

const Grid = () => {
  return (
    <section id="about" className="relative">
      <div className="w-full h-full absolute rounded-[35%] overflow-hidden inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFC0CB"
        />
      </div>
      <ContainerScroll>
        <BentoGrid className="w-full py-20 max-w-7xl">
          {gridItems.map((item, i) => (
            <BentoGridItem
              key={i}
              id={item.id}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          ))}
        </BentoGrid>
      </ContainerScroll>
    </section>
  );
};

export default Grid;
