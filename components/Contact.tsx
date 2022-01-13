import { Flex, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
const ContactStyles = styled(Flex)`
  min-height: 100vh;
`;
export default function Contact() {
  return <ContactStyles>
      <Heading size={'5xl'} id="Contact">
          Contact3
      </Heading>
  </ContactStyles>;
}
