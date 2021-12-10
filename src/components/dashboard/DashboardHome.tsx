import {
  Box, Flex, Image,
} from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

import Card from "./Card";
import cardsData from "./cardsData";

const DashboardHome = () => (
  <SpacedContainer py={12} mx={12}>
    <Box pb="10" color="#11142D" fontSize="4xl" fontWeight="bold" mx={6}>Dashboard</Box>
    <Flex wrap="wrap">
      {cardsData.map(({
        id, Icon, title, path,
      }) => (
        <Card
          key={id}
          icon={<Image src={Icon} />}
          title={title}
          path={path}
        />
      ))}
    </Flex>
  </SpacedContainer>
);

export default DashboardHome;
