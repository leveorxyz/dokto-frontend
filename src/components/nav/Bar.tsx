import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Grid,
  GridItem,
  Box,
  Image,
  Button,
  IconButton,
  Center,
  Icon,
  Menu as ChakraMenu,
  MenuButton,
  MenuList,
  MenuItem,
  Link as ChakraLink,
  useDisclosure,
} from "@chakra-ui/react";
import {
  IoMenu, IoClose, IoPersonCircleOutline, IoLogOut, IoChevronDown,
} from "react-icons/io5";
import { useRecoilState } from "recoil";

import routes from "../../router/routes";
import NavItem from "./NavItem";
import logoSVG from "../../static/Dokto.png";
import { FullWidthContainer } from "../common/Containers";
import SocialIcons from "../common/SocialIcons";
import UpperMenu, { UpperMenuActions } from "./UpperMenu";
import authAtom, { AuthStateType } from "../../atoms/auth.atom";
import LoginModal from "../login/LoginModal";

function NavButtons({ openLoginModal }: {openLoginModal: () => void}) {
  const [authState, setAuthState] = useRecoilState<AuthStateType>(authAtom);

  return (
    <Flex
      direction={["column", "column", "row", "row"]}
      alignItems="center"
      h="100%"
      py={4}
      borderLeftWidth={[0, 0, 2, 2, 2]}
      borderLeftColor="black"
    >
      {!authState.isLoggedIn && (
        <>
          <NavItem href="/patient-registration" title="Patient Registration" />
        </>
      )}
      <Box
        as={Button}
        px={6}
        bg="brand.dark"
        color="white"
        rounded="full"
        _hover={{ bg: "brand.dark", color: "white" }}
        onClick={authState.isLoggedIn ? () => {} : openLoginModal}
      >
        <Box mr={6}>
          {authState.isLoggedIn ? authState.user.email : "Login"}
        </Box>

        <Box>
          <Icon as={IoPersonCircleOutline} fontSize="1.2rem" />
        </Box>
      </Box>
      {authState.isLoggedIn && (
      <Box
        as={Button}
        px={6}
        bg="brand.dark"
        color="white"
        rounded="full"
        _hover={{ bg: "brand.dark", color: "black" }}
        onClick={() => setAuthState({ isLoggedIn: false, user: null })}
      >
        <Box mr={6}>
          Logout
        </Box>

        <Box>
          <Icon as={IoLogOut} fontSize="1.2rem" />
        </Box>
      </Box>
      )}
    </Flex>
  );
}

type MobileProps = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openLoginModal: () => void;
}

function MobileMenu({ setIsMenuOpen, openLoginModal }: MobileProps) {
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
        <NavButtons openLoginModal={openLoginModal} />
      </Center>
    </Flex>
  );
}

type MenuProps = {
  isMenuOpen: boolean;
} & MobileProps;

function Menu({ setIsMenuOpen, isMenuOpen, openLoginModal }: MenuProps) {
  return (
    <Grid templateColumns="1.5fr 8.5fr" templateRows="1fr" gap={0} alignItems="center">
      <GridItem
        display="flex"
        bg="brand.dark"
        h="100%"
        w="auto"
        alignItems="center"
        justifyContent="center"
      >
        <ChakraLink as={Link} to="/" height="75%" p={3}>
          <Image src={logoSVG} height="100%" alt="logo" fit="contain" />
        </ChakraLink>
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
          <Center p={4}>
            <ChakraMenu>
              <MenuButton
                fontSize={["xl", "xl", "md", "md"]}
                fontWeight={[800, 800, 400, 500, 500]}
                bg="transparent"
                _hover={{ bg: "rgba(255, 255, 255, 0.3)" }}
                _focus={{ bg: "rgba(255, 255, 255, 0.3)" }}
                _active={{ bg: "rgba(255, 255, 255, 0.5)" }}
                as={Button}
                rightIcon={<IoChevronDown />}
              >
                Useful Info
              </MenuButton>
              <MenuList>
                {
                  [
                    { title: "FAQs", href: "/faqs" },
                    { title: "T&Cs", href: "/terms-and-conditions" },
                    { title: "Privacy Policy", href: "/privacy-policy" },
                    { title: "HIPAA Policy", href: "/hipaa_policy" },
                  ].map(({ title, href }) => (
                    <MenuItem key={href} as={Link} to={href}>
                      {title}
                    </MenuItem>
                  ))
                }
              </MenuList>
            </ChakraMenu>
          </Center>
        </Flex>

        <Box display={["none", "none", "block", "block"]}>
          <NavButtons openLoginModal={openLoginModal} />
        </Box>

        <Box display={["flex", "flex", "none", "none"]}>
          <IconButton
            aria-label="Open Menu"
            colorScheme="brand.dark"
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
  const {
    isOpen: isLoginModalOpen,
    onOpen: openLoginModal,
    onClose: closeLoginModal,
  } = useDisclosure();

  return (
    <FullWidthContainer pt={{ base: 2 }}>
      <UpperMenu />
      <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} openLoginModal={openLoginModal} />
      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} openLoginModal={openLoginModal} />}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </FullWidthContainer>
  );
}
