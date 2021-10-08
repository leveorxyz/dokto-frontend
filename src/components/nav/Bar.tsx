import React, { useState } from "react";
import {
  Flex, Box, Image, Button, IconButton, Center, ButtonGroup,
} from "@chakra-ui/react";
import { IoMenu, IoClose } from "react-icons/io5";

import routes from "../../router/routes";
import NavItem from "./NavItem";
import logoSVG from "../../static/logo.svg";
import { SpacedContainer } from "../common/Containers";
import SocialIcons from "../common/SocialIcons";
import UpperMenu, { UpperMenuActions } from "./UpperMenu";

function Logo() {
  return (
    <Box>
      <Image src={logoSVG} alt="logo" boxSize="3rem" />
    </Box>
  );
}

function AuthButtons() {
  return (
    <ButtonGroup colorScheme="cyan" isAttached isRounded>
      <Button>Login</Button>
      <Button style={{
        borderLeftColor: "black",
        borderLeftWidth: "1px",
        borderLeftStyle: "solid",
      }}
      >
        Register
      </Button>
    </ButtonGroup>
  );
}

type MobileProps = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileMenu({ setIsMenuOpen }: MobileProps) {
  return (
    <Flex direction="column" minHeight="90vh" justifyContent="space-around" display={["flex", "flex", "none", "none"]}>
      {routes.map((route) => (
        <NavItem
          key={route.path}
          title={route.displayName}
          href={route.path}
          setIsMenuOpen={setIsMenuOpen}
        />
      ))}

      <Center>
        <UpperMenuActions />
      </Center>
      <Center>
        <SocialIcons />
      </Center>

      <Center>
        <AuthButtons />
      </Center>
    </Flex>
  );
}

type MenuProps = {
  isMenuOpen: boolean;
} & MobileProps;

function Menu({ setIsMenuOpen, isMenuOpen }: MenuProps) {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Logo />
      <Flex direction="row" display={["none", "none", "flex", "flex"]}>
        {routes.map((route) => (
          <NavItem
            key={route.path}
            title={route.displayName}
            href={route.path}
          />
        ))}
      </Flex>
      <Box display={["none", "none", "block", "block"]}>
        <AuthButtons />
      </Box>
      <Box display={["flex", "flex", "none", "none"]}>
        <IconButton
          aria-label="Open Menu"
          colorScheme="cyan"
          icon={isMenuOpen ? <IoClose size="1.5em" /> : <IoMenu size="1.5em" />}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </Box>
    </Flex>
  );
}

export default function MenuBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <SpacedContainer py={{ base: 2 }}>
      <UpperMenu />
      <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
    </SpacedContainer>
  );
}
