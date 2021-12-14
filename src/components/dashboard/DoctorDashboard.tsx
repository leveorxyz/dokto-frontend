import {
  Box, Flex, Image,
} from "@chakra-ui/react";

import { SpacedContainer } from "../common/Containers";
import Card from "./Card";
import WelcomeCard from "./WelcomeCard";
import { Row1, Row2 } from "./DashboardData/Doctor";

const DashboardHome = () => (
  <SpacedContainer mx={4}>
    <Box py="4" color="#11142D" fontSize="2xl" fontWeight="semibold" mx={6}>Dashboard</Box>
    <WelcomeCard
      description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor."
      readMoreLink="#"
      img={null}
    />
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
