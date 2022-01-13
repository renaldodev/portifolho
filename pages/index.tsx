import type {NextPage } from "next";
import { Text, Heading } from "@chakra-ui/react";
import Link from "next/link";
import ParticlesBaner from "../components/ParticlesBaner";
import Banner, { BannerImage } from "../components/Banner";
import Hero from "@components/Hero";
const Home: NextPage = () => {
  return (
    <>
      <Banner align={'center'}>
        <ParticlesBaner />
        <Hero/>
      </Banner>
    </>
  );
};

export default Home;
