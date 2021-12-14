import {
  Box, Flex, Image,
} from "@chakra-ui/react";

import { SpacedContainer } from "../common/Containers";

import Card from "./Card";
import { Row1, Row2 } from "./DashboardData/Doctor";

const DashboardHome = () => (
  <SpacedContainer mx={12}>
    <Box pb="10" color="#11142D" fontSize="2xl" fontWeight="bold" mx={6}>Dashboard</Box>
    <Flex wrap="wrap">
      {Row1
        .map(({
          title, path, icon,
        }) => (
          <Card
            key={path}
            icon={<Image src={icon} />}
            title={title}
            path={path}
          />
        ))}
    </Flex>
    <Flex wrap="wrap">
      {Row2
        .map(({
          title, path, icon,
        }) => (
          <Card
            key={path}
            icon={<Image src={icon} />}
            title={title}
            path={path}
          />
        ))}
    </Flex>
  </SpacedContainer>
);

export default DashboardHome;
