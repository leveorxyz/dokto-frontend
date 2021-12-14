import {
  Box, Flex, Heading, Image,
} from "@chakra-ui/react";

import { SpacedContainer } from "../common/Containers";
import Card from "./Card";
import WelcomeCard from "./WelcomeCard";
import MyProfile from "./MyProfile";
import Calendar from "./Calendar";
import { row1, row2 } from "./DashboardData/Doctor";
import events, { CalendarEvent } from "./DashboardData/CalendarEvents";
import EventsList from "./EventsList";

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

      <Box w={["100%", "100%", "100%", "60%", "75%"]}>
        <WelcomeCard
          description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor."
          readMoreLink="#"
          img={null}
        />
        <Row1 />
        <Row2 />
      </Box>

      <Box px={3} w={["100%", "100%", "100%", "40%", "25%"]}>
        <MyProfile />
        <Box p={6} my={6} bg="#2E3192" rounded="3xl">
          <Heading as="h3" fontSize="xl" fontWeight="bold" color="white">
            My Appointments
          </Heading>
          <Calendar events={events} />
          <EventsList events={events} />
        </Box>
      </Box>

    </Flex>
  </SpacedContainer>
);

export default DashboardHome;
