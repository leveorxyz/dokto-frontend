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
    >
      {routes
        .filter((route) => route.showInDashboard)
        .map((route) => (
          <ChakraLink as={Link} to={route.path} key={route.path}>
            <Box
              p={6}
              m={2}
              bg={location.pathname === route.path ? "brand.darkPink" : "transparent"}
              color={location.pathname === route.path ? "white" : "black"}
              cursor="pointer"
              _hover={{
                bg: location.pathname === route.path ? "brand.darkPink" : "white",
                color: location.pathname === route.path ? "white" : "brand.darkPink",
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
    <Flex wrap="nowrap">
      <Box w="15rem">
        <Sidebar />
      </Box>
      <Box w="calc(100% - 15rem)">
        {children}
      </Box>
    </Flex>
  );
}
