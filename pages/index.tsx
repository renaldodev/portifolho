import type {NextPage } from "next";
import { Text, Heading } from "@chakra-ui/react";
import Link from "next/link";
import ParticlesBaner from "../components/ParticlesBaner";
import Banner, { BannerImage } from "../components/Banner";
const Home: NextPage = () => {
  return (
    <>
      <Banner justify={"center"} align={"center"}>
        <ParticlesBaner />
        <BannerImage
          src={"https://i.ibb.co/GsGfFYp/keyboard-with-hands.jpg"}
          layout="fill"
        />
        <Text>Renaldo mateus</Text>
        <Heading color="whiteAlpha.800" size="3xl" fontWeight={"extrabold"}>
          Renaldo Mateus
        </Heading>
      </Banner>
      <Link href="/about">Abaut</Link>
    </>
  );
};

export default Home;
