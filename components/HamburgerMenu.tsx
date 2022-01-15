import { useState} from "react";


import { Button, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ButtonIcon = styled.div<{ isopen?: number }>`
  height: 3px;
  position: relative;
  background: #aefeff;
  border-radius: 50%;
  width: 80%;
  
 &, &::before,&::after {
   transition: all 300ms ease-in-out;
 }

  ${(props) =>
    props.isopen === 1 &&
    css`
      transform-origin: 50% 50%;
      transform: translateX(-70px) rotateX(-360deg);
      background: transparent;
    `}
  &::before,&::after {
    position: absolute;
    content: "";
    height: 3px;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    background: #aefeff;
    width: 70%;
  }

  &::after {
    ${(props) =>
      props.isopen === 1
        ? css`
            transform: rotate(-45deg) translate(50px,50px) rotateX(360deg);
            border-radius: 4px;
            width: 100%;
          `
        : css`
            transform: translateY(10px) rotateX(-360deg);
          `}

   
  }
  &::before {
    ${(props) =>
      props.isopen === 1
        ? css`
            transform: rotate(45deg) translate(50px,-50px) rotateX(360deg);
            border-radius: 4px;
            width: 100%;
          `
        : css`
            transform: translateY(-10px) rotateX(-360deg);
          `}
  }
`;

const StylesButton = styled(Button)`
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  &:hover {
    background: none;
  }
`;

export default function HamburgerMenuButtom() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StylesButton
      display={[null, null, null, "none"]}
      _focus={{outlineColor:'brand.800'}}
      onClick={() => setIsOpen(!isOpen)}
    >
      <ButtonIcon isopen={isOpen ? 1 : 0} />
    </StylesButton>
  );
}
