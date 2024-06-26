"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { LampContainer } from "@/components/ui/Lamp";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <TracingBeam>
        <div className="w-full">
          <FloatingNav
            navItems={navItems}
            className="w-full max-w-full top-0 !rounded-none space-x-12"
          />
          <Hero />
          <Grid />
          <RecentProjects />
          <Clients />
          <LampContainer>
            <Experience />
          </LampContainer>

          <Approach />
          <Footer />
        </div>
      </TracingBeam>
    </main>
  );
};

export default Home;
