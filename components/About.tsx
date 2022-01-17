import { Flex, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
const AboutStyles = styled(Flex)`
  min-height: 100vh;
`;

export default function About() {
  return <AboutStyles>
      <Heading size={'5xl'} id="About">

          About1
      </Heading>
  </AboutStyles>;
}
