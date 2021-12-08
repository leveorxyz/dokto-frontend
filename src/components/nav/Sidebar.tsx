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
      bg="white"
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
              bg={location.pathname.includes(route.path) ? "brand.dark" : "transparent"}
              color={location.pathname.includes(route.path) ? "white" : "black"}
              cursor="pointer"
              _hover={{
                bgColor: location.pathname.includes(route.path) ? "brand.dark" : "white",
                color: location.pathname.includes(route.path) ? "white" : "brand.dark",
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
      <Box w="calc(100% - 15rem)" bgColor="#F7F7FC">
        {children}
      </Box>
    </Flex>
  );
}
