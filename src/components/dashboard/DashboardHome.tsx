import {
  Box, Flex, Image,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import { SpacedContainer } from "../common/Containers";

import Card from "./Card";
import routes from "../../router/routes";
import authAtom from "../../atoms/auth.atom";

const DashboardHome = () => {
  const authState = useRecoilValue(authAtom);
  return (
    <SpacedContainer py={12} mx={12}>
      <Box pb="10" color="#11142D" fontSize="4xl" fontWeight="bold" mx={6}>Dashboard</Box>
      <Flex wrap="wrap">
        {routes
          .filter((route) => route.showInDashboard)
          .filter(({ allowedRoles }) => (allowedRoles ? allowedRoles.includes(authState.user?.userType ?? "") : true))
          .slice(1)
          .map(({
            displayName, path, icon,
          }) => (
            <Card
              key={path}
              icon={<Image src={icon} />}
              title={displayName}
              path={path}
            />
          ))}
      </Flex>
    </SpacedContainer>
  );
};

export default DashboardHome;
