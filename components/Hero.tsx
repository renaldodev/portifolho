import styled from "@emotion/styled";
import { Stack,Box,Divider} from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/react";
const HeroStyles = styled(Stack)`
 margin-top: 120px;
`;

export default function Hero() {
  return (
    <HeroStyles mt={['15px']} >
      <Heading fontSize={"md"} color={'brand.700'}>Hi, my name is</Heading>
      <Box lineHeight={['45px','60px','70px']}>
      <Text fontSize={['4xl','5xl','6xl']} color={'brand.400'} fontWeight={'extrabold'}>Renaldo Mateus.</Text>
      <Text  fontSize={['5xl','6xl','7xl']} fontWeight={'extrabold'}>I build things for the web.</Text>
      </Box>
      <Text maxW={'lg'}>
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products
      </Text>
    </HeroStyles>
  );
}
