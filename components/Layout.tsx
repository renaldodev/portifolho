import { Container, Box } from "@chakra-ui/react";
import { Router } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Loader from "./Loader";
import Social from "./Social";
import Email from "./Email";
import Head from "./Head";

interface ILayoutProps {
  children: ReactNode;
  location: Router;
}

const LayoutStyles = styled(Box)``;

export default function Layout({ children, location }: ILayoutProps) {
  const isHome = location.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  useEffect(() => {
    if (isLoading) {
      return;
    }
    const handleExternalLinks = () => {
      const allLinks = Array.from(document.querySelectorAll('a'));
      if (allLinks.length > 0) {
        allLinks.forEach(link => {
          if (link.host !== window.location.host) {
            link.setAttribute('rel', 'noopener noreferrer');
            link.setAttribute('target', '_blank');
          }
        });
      }
    };
    handleExternalLinks()
  }, [isLoading]);
  return (
    <LayoutStyles>
      {isLoading && isHome ? (
        <Loader fineshLoading={() => setIsLoading(false)} />
      ) : (
        <>
          <Head hash={location} />
          <Container as="main" maxW={['container.lg']} px={['20px','50px','65px',null]}>
            <Social />
            <Email />
            {children}
          </Container>
        </>
      )}
    </LayoutStyles>
  );
}
