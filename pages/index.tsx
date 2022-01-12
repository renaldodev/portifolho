import type { NextPage } from "next";
import { Text, Heading } from "@chakra-ui/react";
import ParticlesBaner from "../components/ParticlesBaner";
import Banner, { BannerImage } from "../components/Banner";

const Home: NextPage = () => {
  return (
    <>
      <Banner justify={"center"} align={"center"}>
        <BannerImage
          src={"https://i.ibb.co/yWJgtWm/keyboard-with-hands.jpg"}
          layout="fill"
        />
        <Text>Renaldo mateus</Text>
        <Heading color="whiteAlpha.800" size="3xl" fontWeight={"extrabold"}>
          Renaldo Mateus
        </Heading>
        <ParticlesBaner />
      </Banner>
    </>
  );
};

export default Home;
