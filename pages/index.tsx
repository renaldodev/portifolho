import type {NextPage } from "next";
import ParticlesBaner from "../components/ParticlesBaner";
import Banner from "../components/Banner";
import Hero from "@components/Hero";
import About from "@components/About";
import Project from "@components/Project";
import Contact from "@components/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Banner>
        <ParticlesBaner />
        <Hero/>
      </Banner>
      <About/>
      <Project/>
      <Contact/>
    </>
  );
};

export default Home;
