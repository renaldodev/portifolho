import styled from "@emotion/styled";
import { useEffect } from "react";

const LoaderText = styled.p`
  z-index: 100;
  color: red;
  background: pink;
`;
interface ILoaderProps {
  finnesheLoading: () => void;
}

export default function Loader({ finnesheLoading }: ILoaderProps) {
  useEffect(() => {
    const t = setInterval(() => finnesheLoading(), 5000);
    return () => clearInterval(t);
  }, []);
  return <LoaderText>Loading now</LoaderText>;
}
