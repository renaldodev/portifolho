import { Container, Box } from "@chakra-ui/react";
import { Router } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import styled from '@emotion/styled'
import Loader from "./Loader";
import Social from "./Social";
import Email from "./Email";

interface ILayoutProps {
  children: ReactNode;
  location: Router;
}

const LayoutStyles=styled(Box)`

`

export default function Layout({ children, location }: ILayoutProps) {
  const isHome = location.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);
  return (
    <LayoutStyles >
      {isLoading && isHome ? (
        <Loader fineshLoading={() => setIsLoading(false)} />
      ) : (
        <Container as="main" maxW={'container.lg'}>
          <Social/>
          <Email/>
          {children}
          </Container>
      )}
    </LayoutStyles>
  );
}
