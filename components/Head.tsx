import { ReactNode, useEffect } from "react";
import styled from "@emotion/styled";
import {
  Flex,
  Box,
  Link as LinkChakra,
  Image,
  Menu,
  MenuItem,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import { Router } from "next/router";
const HeadStyles = styled(Flex)`
  backdrop-filter: blur(20px);
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  nav li:focus {
    border: 1px solid #aefeff;
    background: transparent;
  }
`;

interface IHeadProps {
  hash: Router;
}

interface ILinkItemPros {
  children: ReactNode;
  textLight?: string;
  href: string;
  isActive?: boolean;
}
const LinkItem = ({ children, textLight, href, isActive }: ILinkItemPros) => {
  return (
    <MenuItem as="li" border={isActive ? "1px solid #AEFEFF" : "transparent"}>
      <Link href={href}>
        <LinkChakra as="span" display={"flex"} alignItems={"center"}>
          <Heading fontSize={"sm"} color={"brand.600"}>
            {textLight!}
          </Heading>
          {children}
        </LinkChakra>
      </Link>
    </MenuItem>
  );
};

export default function Head({ hash }: IHeadProps) {
  const isHome = hash?.asPath === "/";
  useEffect(() => {
    if (isHome) {
      return;
    }
    const id = hash.asPath.slice(2);
    const el = document.getElementById(id);
    setTimeout(() => {
      if (el) {
        el.scrollIntoView();
        el.focus();
      }
    }, 1000);
  }, [hash?.asPath]);
  return (
    <HeadStyles px="40px" zIndex={"100"}>
      <Link href="/">
        <LinkChakra>
          <Image src="/logo.svg" alt="Logo" maxW={"60px"} />
        </LinkChakra>
      </Link>
      <Box as={"nav"}>
        <Menu>
          <LinkItem
            textLight="01."
            href="/#About"
            isActive={hash?.asPath === "/#About"}
          >
            About
          </LinkItem>
          <LinkItem
            textLight="02."
            href="/#Project"
            isActive={hash?.asPath === "/#Project"}
          >
            Project
          </LinkItem>
          <LinkItem
            textLight="03."
            href="/#Contact"
            isActive={hash?.asPath === "/#Contact"}
          >
            Contact
          </LinkItem>
        </Menu>
      </Box>
    </HeadStyles>
  );
}
