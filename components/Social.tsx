import styled from "@emotion/styled";
import { Stack,Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaDiscord, FaInstagram,FaTwitter } from "react-icons/fa";

const SocialStyles = styled(Stack)`
  a svg{
     margin-bottom :20px ;
     width: 22px;
     height: 22px;
     &:hover{
       fill:#AEFEFF;
       transform: translateY(-3px);
     }
  }

   align-items: center;
   position: fixed;
   bottom: 0;
   left: 0;
  &::after{
    content: "";
    width: 1px;
    height: 90px;
    background: #e6f1ff
    
  }
`;

export default function Social() {
  const social = [
    { icon: <FaGithub />, link: "https://github.com"},
    { icon: <FaTwitter />, link: "https://twitter.com"},
    { icon: <FaLinkedinIn />, link: "https://linkdin.com" },
    { icon: <FaDiscord />, link: "https://discord.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
  ];
  return <SocialStyles ml="40px">
      {social.map(item=>(
       <Link href={item.link} key={item.link}>{item.icon}</Link>
      ))}
  </SocialStyles>;
}
