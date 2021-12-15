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
  <>
    {row1
      .map(({
        title, path, icon,
      }) => (
        <GridItem
          key={path}
          rowSpan={1}
          colSpan={1}
          bg="white"
          borderRadius="lg"
          cursor="pointer"
          boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
          _hover={{
            filter: "drop-shadow(15px 70px 90px rgba(164, 43, 173, 0.08))",
          }}
        >
          <Card
            icon={<Image src={icon} />}
            title={title}
            path={path}
          />
        </GridItem>
      ))}
  </>
);

const Row2 = () => (
  <>
    {row2
      .map(({
        title, path, icon,
      }) => (
        <GridItem
          key={path}
          rowSpan={1}
          colSpan={1}
          bg="white"
          borderRadius="lg"
          cursor="pointer"
          boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
          _hover={{
            filter: "drop-shadow(15px 70px 90px rgba(164, 43, 173, 0.08))",
          }}
        >
          <Card
            icon={<Image src={icon} />}
            title={title}
            path={path}
          />
        </GridItem>
      ))}
  </>
);

const DashboardHome = () => (
  <SpacedContainer mx={4} mb={13}>
    <Box py="4" color="#11142D" fontSize="2xl" fontWeight="semibold">Dashboard</Box>
    <Grid
      templateColumns="repeat(17, 1fr)"
      gap={6}
    >
      <GridItem
        colStart={1}
        colEnd={[18, 18, 10, 10, 13]}
        rowStart={1}
        rowEnd={4}
      >
        <WelcomeCard
          description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor."
          readMoreLink="#"
          img={Banner}
        />
      </GridItem>

      <GridItem
        colStart={[1, 1, 10, 10, 13]}
        colEnd={18}
        rowStart={[4, 4, 1, 1, 1]}
        rowEnd={[8, 8, 4, 4, 4]}
      >
        <MyProfile />
      </GridItem>

      <GridItem
        colStart={1}
        colEnd={[18, 18, 10, 10, 13]}
        rowStart={[8, 8, 4, 4, 4]}
        rowEnd={[26, 26, 12, 10, 10]}
      >
        <Grid
          h={["calc(60% - 1.5rem)", "calc(60% - 1.5rem)", "calc(60% - 1.5rem)", "calc(40% - 1.5rem)", "calc(40% - 1.5rem)"]}
          mb={6}
          gap={6}
          templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
          templateRows={["repeat(4, 1fr)", "repeat(4, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(1, 1fr)"]}
        >
          <Row1 />
        </Grid>
        <Grid
          h={["calc(40% - 1.5rem)", "calc(40% - 1.5rem)", "calc(40% - 1.5rem)", "calc(60% - 1.5rem)", "calc(60% - 1.5rem)"]}
          mt={6}
          gap={6}
          templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
          templateRows={["repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(1, 1fr)"]}
        >
          <Row2 />
        </Grid>
      </GridItem>

      <GridItem
        colStart={[1, 1, 10, 10, 13]}
        colEnd={18}
        rowStart={[26, 26, 4, 4, 4]}
        rowEnd={[34, 34, 12, 10, 10]}
        bg="#2E3192"
        p={6}
        rounded="lg"
        overflowX="scroll"
      >
        <Box w="100%">
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
