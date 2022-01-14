import styled from "@emotion/styled";
import { Flex, Link as LinkChakra } from "@chakra-ui/react";
import Link from "next/link";
import { websiteData } from "@settings/websiteData";
import { ReactNode } from "react";

const StylesNav = styled(Flex)`
  ol {
    display: flex;
    gap: 50px;
    align-items: center;
    list-style: none;
    counter-reset: links;
  }
  ol li a {
    color: ();
  }
  ol li:hover {
    a {
      color: #aefeff;
    }
  }
  ol li::before {
    counter-increment: links;
    content: counter(links) ".";
    color: #aefeff;
    font-family: "Space Mono" !important;
    font-size: 1.5rem;
    font-weight: 900;
  }
`;

const StyledNavLink = styled.li<{ isActive?: boolean}>`
  & a {
    color: ${(props) => (props.isActive ? "#aefeff" : "#a8b2d1")};
  }
`;

const NavLink = ({
  children,
  to,
  isActive,
}: {
  children: ReactNode;
  isActive?: boolean;
  to: string;
}) => (
  <StyledNavLink isActive={isActive}>
    <Link href={to}>{children}</Link>
  </StyledNavLink>
);

export default function Nav({ path }: { path: string }) {
  return (
    <StylesNav display={["none", null, null, "flex"]}>
      <ol>
        {websiteData.navLinks.map(({ name, href }, key) => (
          <NavLink key={key} to={href} isActive={href === path}>
            {name}
          </NavLink>
        ))}
      </ol>
    </StylesNav>
  );
}
