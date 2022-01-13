import styled from "@emotion/styled";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";

export const BannerImage = styled(Image)`
  object-fit: cover;
  z-index:-1;
  transform: scale(1.1);
  filter: blur(5px);
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);

`;

const Banner = styled(Flex)`
  min-height: 100vh;
  position: relative;
  width: 100%;
`;

export default Banner;
