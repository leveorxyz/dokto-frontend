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
  IoMenu, IoClose, IoPersonCircleOutline, IoChevronDown, IoLogIn,
} from "react-icons/io5";
import { useRecoilValue, useSetRecoilState } from "recoil";

import routes from "../../router/routes";
import NavItem from "./NavItem";
import logoSVG from "../../static/Dokto.png";
import { FullWidthContainer } from "../common/Containers";
import SocialIcons from "../common/SocialIcons";
import UpperMenu, { UpperMenuActions } from "./UpperMenu";
import authAtom, { AuthStateType } from "../../atoms/auth.atom";
import LoginModal from "../login/LoginModal";
import loginModalAtom from "../../atoms/loginModal.atom";

function NavButtons({ openLoginModal }: {openLoginModal: () => void}) {
  const authState = useRecoilValue<AuthStateType>(authAtom);

  return (
    <Flex
      direction={["column", "column", "row", "row"]}
      alignItems="center"
      h="100%"
      pr={4}
      borderLeftWidth={[0, 0, 2, 2, 2]}
      borderLeftColor="black"
    >
      {!authState.isLoggedIn && (
        // <NavItem href="/patient-registration" title="Patient Registration" />
        <Link to="/patient-registration">
          <Box
            as={Button}
            px={6}
            mx={[0, 0, 4, 4, 4]}
            bg="brand.darkPink"
            color="white"
            rounded="full"
            _hover={{ bg: "brand.dark", color: "white" }}
          >
            <Box mr={4}>
              Patient Registration
            </Box>

            <Box d="flex" justifyContent="center">
              <Icon as={IoLogIn} fontSize="1.5rem" />
            </Box>
          </Box>
        </Link>
      )}
      <Link to="/dashboard">
        <Box
          as={Button}
          px={6}
          bg="brand.dark"
          color="white"
          rounded="full"
          ml={2}
          _hover={{ bg: "brand.dark", color: "white" }}
          onClick={authState.isLoggedIn ? () => {} : openLoginModal}
        >
          <Box d="flex" justifyContent="center">
            <Icon as={IoPersonCircleOutline} fontSize="1.2rem" />
          </Box>

          <Box ml={4}>
            {authState.isLoggedIn ? authState.user.fullName : "Login"}
          </Box>

        </Box>
      </Link>
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
    <Flex alignItems="center" height="4rem" wrap="nowrap">
      <Flex
        flexShrink={0}
        flexGrow={0}
        bg="brand.dark"
        h="100%"
        w="15rem"
        alignItems="center"
        justifyContent="center"
      >
        <ChakraLink
          as={Link}
          to="/"
          height="75%"
          px={3}
          _hover={{ boxShadow: "none", outline: "none" }}
          _focus={{ boxShadow: "none", outline: "none" }}
        >
          <Image src={logoSVG} height="100%" alt="logo" fit="contain" />
        </ChakraLink>
      </Flex>

      <Flex
        w="100%"
        h="100%"
        bg="primary.light"
        justifyContent="space-between"
        alignItems="center"
        pr={[3, 3, 3, 8, 8]}
      >
        <Flex direction="row" justifyContent="space-around" grow={1} display={["none", "none", "flex", "flex"]}>
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
                    { title: "Terms of Use", href: "/terms-and-conditions" },
                    { title: "Privacy Policy", href: "/privacy-policy" },
                    { title: "HIPAA Policy", href: "/hipaa_policy" },
                    { title: "Cookies Policy", href: "/cookies-policy" },
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
      </Flex>
    </Flex>
  );
}

type MenuBarProps = {
  showUpperMenu?: boolean;
};

export default function MenuBar({ showUpperMenu }: MenuBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const setLoginModalState = useSetRecoilState(loginModalAtom);
  const {
    isOpen: isLoginModalOpen,
    onOpen: openLoginModal,
    onClose: closeLoginModal,
  } = useDisclosure();

  setLoginModalState({ isLoginModalOpen, openLoginModal, closeLoginModal });

  return (
    <Box position="sticky" top={0} left={0} zIndex={999}>
      <FullWidthContainer>
        {showUpperMenu && <UpperMenu />}
        <Menu
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
          openLoginModal={openLoginModal}
        />
        {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} openLoginModal={openLoginModal} />}
        <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      </FullWidthContainer>
    </Box>
  );
}

MenuBar.defaultProps = {
  showUpperMenu: true,
};
