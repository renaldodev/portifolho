import { Container, Box } from "@chakra-ui/react";
import { Router } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { handleExternalLinks } from "@util/index";
import Loader from "./Loader";
import Social from "./Social";
import Email from "./Email";
import Head from "./Head";

interface ILayoutProps {
  children: ReactNode;
  location: Router;
}

const LayoutStyles = styled(Box)`
position: relative;
`;

export default function Layout({ children, location }: ILayoutProps) {
  const isHome = location.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    } 
    let id = location.asPath.slice(2);
    id = id.charAt(0).toUpperCase() + id.substring(1);
    console.log(id);
    const el = document.getElementById(id);
    setTimeout(() => {
      if (el) {
        el.scrollIntoView();
        el.focus();
      }
    }, 0);

    handleExternalLinks();
  }, [isLoading,location.asPath]);
  return (
    <LayoutStyles>
      {isLoading && isHome ? (
        <Loader fineshLoading={() => setIsLoading(false)} />
      ) : (
        <>
          <Head hash={location} />
          <Container
            as="main"
            maxW={["container.lg"]}
            px={["20px", "50px", "65px", null]}
          >
            <Social />
            <Email />
            {children}
          </Container>
        </>
      )}
    </LayoutStyles>
  );
}
