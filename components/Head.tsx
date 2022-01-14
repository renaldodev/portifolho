import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { Router } from "next/router";
import { Nav } from "@components/index";
import { useScrollDirection } from "@hooks/index";
import { DIRECTION } from "@hooks/useScrollDirection";
import { css } from "@emotion/react";

const HeadStyles = styled(Flex)<{
  directionscroll?: DIRECTION;
  shouldscroll?: boolean;
  headheight?: number;
}>`
 position: fixed;
 ${props=> !props.shouldscroll&& css`
    backdrop-filter: blur(20px);
    box-shadow:0 10px 30px -10px rgba(0,0,0,.3);
    background: "#021316";
 `}
 transition: all 300ms ease;
  width: 100%;
  top: 0;
  ${(props) =>
    !props.shouldscroll && props.directionscroll === DIRECTION.DOWN &&
    css`
      transform: translateY(${props.headheight!*-1}px);
    `}
  justify-content: space-between;
  align-items: center;
  
  ${(props) =>
    !props.shouldscroll &&props.directionscroll === DIRECTION.UP &&
    css`
      transform: translateY(0);
    `}
`;

export default function Head({ hash }: { hash: Router }) {
  const direction = useScrollDirection(null);
  const [shuldScollTo, setShuldScrollTo] = useState<boolean>();
  const ref = useRef<HTMLDivElement>(null);
  const headHeight = ref.current?.clientHeight;

  const handleScroll = () => {
    setShuldScrollTo(window.scrollY < headHeight! + 10);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [shuldScollTo]);
  return (
    <HeadStyles
      px="40px"
      zIndex={"100"}
      directionscroll={direction}
      shouldscroll={shuldScollTo}
      ref={ref}
      headheight={headHeight}
    >
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" maxW={"60px"} cursor="pointer" />
      </Link>
      <Nav path={hash.asPath} />
    </HeadStyles>
  );
}
