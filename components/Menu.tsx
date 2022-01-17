import styled from "@emotion/styled";
import { Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";
import {forwardRef } from "react";
import Nav from "./Nav";

const StylesMenu = styled(Flex)<{ isopen?: number }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(75vw, 400px);
  align-items: center;
  justify-content: center;
  z-index: 99;
  transition: all 300ms ease-in-out;
  ${(props) =>
    props.isopen === 1
      ? css`
          display: flex;
          transform: translate(0);
        `
      : css`
          display: none;
          transform: translateX(min(75vw, 400px));
          
        `}
`;

interface IMenuProps  {
  isopen: number;
  path:string
}
const Menu = forwardRef<HTMLDivElement,IMenuProps>(({isopen,path}, ref) => 
  (
    <StylesMenu
      bgColor={"brand.300"}
      boxShadow={"xl"}
      isopen={isopen}
      display={[null, null, null, "none"]}
      ref={ref}
    >
      <Nav path={path} isMobile={1}/>

    </StylesMenu>
  ));

Menu.displayName="Menu";

export default Menu;
