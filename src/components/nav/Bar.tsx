import React, { useState } from "react";
import {
  Flex, Grid, GridItem, Box, Image, Button, IconButton, Center, Icon,
} from "@chakra-ui/react";
import { IoMenu, IoClose, IoPersonCircleOutline } from "react-icons/io5";
import { useRecoilValue } from "recoil";

import routes from "../../router/routes";
import NavItem from "./NavItem";
import logoSVG from "../../static/Dokto.png";
import { FullWidthContainer } from "../common/Containers";
import SocialIcons from "../common/SocialIcons";
import UpperMenu, { UpperMenuActions } from "./UpperMenu";
import authAtom, { AuthStateType } from "../../atoms/auth.atom";

function NavButtons() {
  const authState = useRecoilValue<AuthStateType>(authAtom);

  return (
    <Flex
      direction={["column", "column", "row", "row"]}
      alignItems="center"
      h="100%"
      py={4}
      borderLeftWidth={[0, 0, 2, 2, 2]}
      borderLeftColor="black"
    >
      <NavItem href="/patient-registration" title="Patient Registration" />
      <NavItem href="/provider-registration" title="Provider Registration" />
      <Box
        as={Button}
        px={6}
        bg="brand.darkPink"
        color="white"
        rounded="full"
        _hover={{ bg: "brand.pink", color: "black" }}
      >
        <Box mr={6}>
          {authState.isLoggedIn ? authState.user.email : "Login"}
        </Box>

        <Box>
          <Icon as={IoPersonCircleOutline} fontSize="1.2rem" />
        </Box>
      </Box>
    </Flex>
  );
}

type MobileProps = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileMenu({ setIsMenuOpen }: MobileProps) {
  return (
    <Flex direction="column" minHeight="90vh" justifyContent="space-around" display={["flex", "flex", "none", "none"]}>
      {routes
        .filter((route) => route.showInNavbar)
        .map((route) => (
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
        <NavButtons />
      </Center>
    </Flex>
  );
}

type MenuProps = {
  isMenuOpen: boolean;
} & MobileProps;

function Menu({ setIsMenuOpen, isMenuOpen }: MenuProps) {
  return (
    <Grid templateColumns="1.5fr 8.5fr" templateRows="1fr" gap={0} alignItems="center">
      <GridItem display="flex" bg="#7002C7" h="100%" w="100%" pr={3} alignItems="center" justifyContent="flex-end">
        <Image src={logoSVG} alt="logo" fit="cover" />
      </GridItem>

      <GridItem display="flex" w="100%" h="100%" bg="#3DE0FF" justifyContent="space-between" alignItems="center" pr={[3, 3, 3, "10%", "10%"]}>
        <Flex direction="row" justifyContent="space-around" grow={1} display={["none", "none", "flex", "flex"]} py={4}>
          {routes
            .filter((route) => route.showInNavbar)
            .map((route) => (
              <NavItem
                key={route.path}
                title={route.displayName}
                href={route.path}
              />
            ))}
        </Flex>

        <Box display={["none", "none", "block", "block"]}>
          <NavButtons />
        </Box>

        <Box display={["flex", "flex", "none", "none"]}>
          <IconButton
            aria-label="Open Menu"
            colorScheme="cyan"
            icon={isMenuOpen ? <IoClose size="1.5em" /> : <IoMenu size="1.5em" />}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default function MenuBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <FullWidthContainer py={{ base: 2 }}>
      <UpperMenu />
      <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
    </FullWidthContainer>
  );
}
