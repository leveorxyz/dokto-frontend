import {
  Flex, Box, Grid, GridItem, Heading, Image,
} from "@chakra-ui/react";

import { SpacedContainer } from "../common/Containers";
import Card from "./Card";
import WelcomeCard from "./WelcomeCard";
import MyProfile from "./MyProfile";
import Calendar from "./Calendar";
import { row1, row2 } from "./DashboardData/Doctor";
import events from "./DashboardData/CalendarEvents";
import EventsList from "./EventsList";
import Banner from "../../static/DoctorDashboardIcons/Banner.png";

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
  <SpacedContainer mx={4} pb={12}>
    <Box py="4" color="#11142D" fontSize="2xl" fontWeight="semibold">Dashboard</Box>
    <Grid
      templateColumns="repeat(17, 1fr)"
      gap={6}
    >
      <GridItem colStart={1} colEnd={14} rowStart={1} rowEnd={4}>
        <WelcomeCard
          description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor."
          readMoreLink="#"
          img={Banner}
        />
      </GridItem>

      <GridItem colStart={14} colEnd={18} rowStart={1} rowEnd={4}>
        <MyProfile />
      </GridItem>

      <GridItem colStart={1} colEnd={14} rowStart={4} rowEnd={10}>
        <Row1 />
        <Row2 />
      </GridItem>

      <GridItem colStart={14} colEnd={18} rowStart={4} rowEnd={10}>
        <Box p={6} bg="#2E3192" rounded="lg" w="100%">
          <Heading as="h3" fontSize="xl" fontWeight="bold" color="white">
            My Appointments
          </Heading>
          <Calendar events={events} />
          <EventsList events={events} />
        </Box>
      </GridItem>

    </Grid>
  </SpacedContainer>
);

export default DashboardHome;
