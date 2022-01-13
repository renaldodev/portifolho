import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Image, Flex, Box } from "@chakra-ui/react";
import anime from "animejs";

type StyledLoadType={
    isMounted?:boolean
}

const StyledLoader = styled(Box)<StyledLoadType>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  .wrapper {
    max-width: 150px;
    width: 100%;
    opacity: ${props => (props.isMounted? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
    
    }
  }
`;
interface ILoaderProps {
  fineshLoading: () => void;
}

export default function Loader({ fineshLoading }: ILoaderProps) {
    const [isMounted, setIsMounted] = useState(false);
  const animate = () => {
    const tl = anime.timeline({
      complete: () => fineshLoading(),
    });
    tl.add({
      targets: ".wrapper",
      duration: 1500,
      rotate: "360deg",
    }).add({
        targets: '.wrapper',
        delay:1000,
        duration: 1500,
        easing: 'easeInOutQuart',
        rotate: "-360deg",
      }).add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);
  return (
    <StyledLoader className="loader" bgColor={"brand.900"} isMounted={isMounted}>
      <div className="wrapper">
        <Image src={`/Infinity.svg`} alt="logo" />
      </div>
    </StyledLoader>
  );
}
