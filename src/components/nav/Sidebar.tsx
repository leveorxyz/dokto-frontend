import {
  Flex,
  Box,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useLocation, Link } from "react-router-dom";

import routes from "../../router/routes";

const Sidebar = () => {
  const location = useLocation();
  return (
    <Flex
      justifyContent="flex-start"
      direction="column"
      minHeight="100vh"
      overflowY="scroll"
      overflowX="hidden"
      bg="gray.100"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {routes
        .filter((route) => route.showInDashboard && route.showInSideLink)
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
            <Box
              py={3}
              px={6}
              my={2}
              mx={6}
              bg={location.pathname.includes(route.path) ? "brand.darkPink" : "transparent"}
              color={location.pathname.includes(route.path) ? "white" : "black"}
              cursor="pointer"
              _hover={{
                bg: location.pathname.includes(route.path) ? "brand.darkPink" : "white",
                color: location.pathname.includes(route.path) ? "white" : "brand.darkPink",
                textDecoration: "none",
              }}
              rounded="lg"
            >
              {route.displayName}
            </Box>
          </ChakraLink>
        ))}
    </Flex>
  );
};

export default function SidebarContainer({ children }: {children: React.ReactNode}) {
  return (
    <Flex wrap="nowrap" justifyContent="flex-end" position="relative" minHeight="100vh">
      <Box w="15rem" position="fixed" top={0} left={0}>
        <Sidebar />
      </Box>
      <Box w="calc(100% - 15rem)" bgColor="#E5E5E5">
        {children}
      </Box>
    </Flex>
  );
}
