import styled from "@emotion/styled";
import { Stack, Link } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/react";
const HeroStyles = styled(Stack)``;

export default function Hero() {
  return (
    <HeroStyles mr="-70px">
      <Heading fontSize={"md"} color={'brand.700'}>Hi, my name is</Heading>
      <Text fontSize={'7xl'} color={'brand.400'} fontWeight={'extrabold'}>Renaldo Mateus.</Text>
      <Text  fontSize={'7xl'} fontWeight={'extrabold'} >I build things for the web.</Text>
      <Text maxW={'md'}>
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products
      </Text>
    </HeroStyles>
  );
}
