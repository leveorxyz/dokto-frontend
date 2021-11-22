import React from "react";
import {
  Flex,
  Box,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import routes from "../../router/routes";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div>
      <Flex d="flex" direction="column" h="100%" justifyContent="space-around">
        {routes
          .filter((route) => route.showInDashboard)
          .map((route) => (
            <Box
              key={route.displayName}
              p={6}
              color={(location.pathname === route.path) ? "brand.darkPink" : "black"}
              cursor="pointer"
              _hover={{ bgColor: "brand.darkPink", color: "white" }}
            >
              {route.displayName}
            </Box>
          ))}
      </Flex>
    </div>
  );
};
export default Sidebar;
