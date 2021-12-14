import {
  Box, Flex, Image,
} from "@chakra-ui/react";

import { SpacedContainer } from "../common/Containers";
import Card from "./Card";
import WelcomeCard from "./WelcomeCard";
import MyProfile from "./MyProfile";
import { row1, row2 } from "./DashboardData/Doctor";

const Row1 = () => (
  <Flex wrap="wrap">
    {row1
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
);

const Row2 = () => (
  <Flex wrap="wrap">
    {row2
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
);

const DashboardHome = () => (
  <SpacedContainer mx={4}>
    <Box py="4" color="#11142D" fontSize="2xl" fontWeight="semibold" mx={6}>Dashboard</Box>
    <Flex wrap={["wrap-reverse", "wrap-reverse", "wrap-reverse", "wrap", "wrap"]}>

      <Box w="85%">
        <WelcomeCard
          description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor."
          readMoreLink="#"
          img={null}
        />
        <Row1 />
        <Row2 />
      </Box>

      <Box flexGrow={1} px={3}>
        <MyProfile />
      </Box>

    </Flex>
  </SpacedContainer>
);

export default DashboardHome;
