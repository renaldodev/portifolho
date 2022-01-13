import {ReactNode, useEffect} from 'react'
import styled from "@emotion/styled";
import {
  Flex,
  Box,
  Link as LinkChakra,
  Image,
  Menu,
  MenuItem,
  MenuDivider,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import { Router } from 'next/router';
const HeadStyles = styled(Flex)`
  a{
      cursor: pointer;
      border:1px solid red
  }
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
 nav li:focus{
    border:1px solid #AEFEFF;
    background: transparent;
 }

`;

interface IHeadProps{
    hash?:Router
}

interface ILinkItemPros{
    children:ReactNode,
    textLight?:string
   href:string
   isActive?:boolean
}
const LinkItem=({children,textLight,href,isActive}:ILinkItemPros)=>{
        return(
        <MenuItem as="li" border={isActive?'1px solid #AEFEFF':'transparent'}>
            <Link href={href}>
              <LinkChakra as='span' display={'flex'} alignItems={'center'}>
                <Heading fontSize={"sm"} color={"brand.600"}>
                  {textLight!}
                </Heading>
                {children}
              </LinkChakra>
            </Link>
          </MenuItem>
    )
}

export default function Head({hash}:IHeadProps) {
    
  return (
    <HeadStyles px="40px" zIndex={'100'}>
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" maxW={"20"} />
      </Link>
      <Box as={'nav'}>
        <Menu>
         <LinkItem textLight='01.' href='/#About' isActive={hash?.asPath==='/#About'}>
            About
         </LinkItem>
         <LinkItem textLight='02.' href='/#Project' isActive={hash?.asPath==='/#Project'}>
            Project
         </LinkItem>
         <LinkItem textLight='03.' href='/#Contact' isActive={hash?.asPath==='/#Contact'}>
            Contact
         </LinkItem>
        </Menu>
      </Box>
    </HeadStyles>
  );
}
