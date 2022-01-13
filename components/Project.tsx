import { Flex, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
const ProjectStyles = styled(Flex)`
  min-height: 100vh;
`;
export default function Project() {
  return <ProjectStyles>
      <Heading size={'5xl'} id="Project">
          Project2
      </Heading>
  </ProjectStyles>;
}
