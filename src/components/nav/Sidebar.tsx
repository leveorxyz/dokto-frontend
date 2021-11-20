import React from "react";
import {
  Flex,
  Box,
} from "@chakra-ui/react";

import routes from "../../router/routes";

const Sidebar = () => (
  <div>
    <Flex d="flex" direction="column" h="100%" justifyContent="space-around">
      {routes
        .filter((route) => route.showInDashboard)
        .map((route) => (
          <Box
            key={route.displayName}
            p={6}
            cursor="pointer"
            _hover={{ bgColor: "brand.darkPink", color: "white" }}
          >
            {route.displayName}
          </Box>
        ))}
    </Flex>
  </div>
);

export default Sidebar;
