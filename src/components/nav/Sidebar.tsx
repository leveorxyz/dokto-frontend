import {
  Flex,
  Box,
  Link as ChakraLink,
  Image,
} from "@chakra-ui/react";
import { useLocation, Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import authAtom from "../../atoms/auth.atom";
import { callSidebarAtom } from "../call/atoms";
import routes from "../../router/routes";
import Bar from "./Bar";

const Sidebar = () => {
  const location = useLocation();
  const authState = useRecoilValue(authAtom);
  const isCallSideBarDisabled = useRecoilValue(callSidebarAtom);

  return (
    <Flex
      justifyContent="flex-start"
      direction="column"
      height="calc(100vh - 4rem)"
      overflowY="scroll"
      overflowX="hidden"
      bg="white"
      pointerEvents={isCallSideBarDisabled ? "none" : "all"}
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {routes
        .filter((route) => (route.showInDashboard && (authState?.user?.userType === "PATIENT" ? route.path !== "/calls" : true)))
        .filter(({ allowedRoles }) => (allowedRoles ? allowedRoles.includes(authState.user?.userType ?? "") : true))
        .map((route) => (
          <ChakraLink
            as={Link}
            to={route.path}
            key={route.path}
            _hover={{
              textDecoration: "none",
            }}
            _focus={{
              boxShadow: "none",
            }}
          >
            <Flex
              wrap="nowrap"
              py={3}
              px={2}
              my={2}
              mx={6}
              bg={location.pathname.includes(route.path) ? "brand.dark" : "transparent"}
              color={location.pathname.includes(route.path) ? "white" : "black"}
              cursor="pointer"
              _hover={{
                bgColor: location.pathname.includes(route.path) ? "brand.dark" : "gray.100",
                color: location.pathname.includes(route.path) ? "white" : "brand.dark",
                textDecoration: "none",
              }}
              rounded="lg"
            >
              {route.icon && (
              <Image
                m={1}
                mr={2}
                src={route.icon}
                alt={route.displayName}
                boxSize="1.2rem"
              />
              )}
              <Box>
                {route.displayName}
              </Box>
            </Flex>
          </ChakraLink>
        ))}
    </Flex>
  );
};

export default function SidebarContainer({ children }: {children: React.ReactNode}) {
  return (
    <Box>
      <Bar showUpperMenu={false} />
      <Flex wrap="nowrap" justifyContent="flex-end" position="relative">
        <Box w="15rem" position="fixed" top="4rem" left={0}>
          <Sidebar />
        </Box>
        <Box w="calc(100% - 15rem)" minH="100vh" bgColor="#F7F7FC">
          {children}
        </Box>
      </Flex>
    </Box>
  );
}
