import styled from "@emotion/styled";
import { Stack, Link } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
const EmailStyles = styled(Stack)`
  z-index: 99;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  &::after {
    content: "";
    width: 1px;
    height: 90px;
    background: #e6f1ff;
  }

  p {
    transform: rotate(90deg);
    cursor: pointer;
    font-size: 14px;
    margin-bottom: 135px;
    &:hover {
      color: #aefeff;
      transform: rotate(90deg) translateX(3px);
    }
  }
`;

export default function Email() {
  return (
    <EmailStyles mr="-70px" display={['none',null,null,'flex']}>
      <Heading as="p">renaldomateus77.dev@gmail.com</Heading>
    </EmailStyles>
  );
}
