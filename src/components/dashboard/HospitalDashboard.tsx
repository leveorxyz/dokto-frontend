import {
  Flex,
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import format from "date-fns/format";

import { SpacedContainer } from "../common/Containers";
import WelcomeCard from "./WelcomeCard";
import Calendar from "./Calendar";

import patients from "../../static/HospitalDashboard/patients.png";
import calendar from "../../static/HospitalDashboard/calendar.png";
import money from "../../static/HospitalDashboard/money.png";
import news from "../../static/HospitalDashboard/news.png";
import bars from "../../static/HospitalDashboard/bars.png";
import pie from "../../static/HospitalDashboard/pie.png";
import graph from "../../static/HospitalDashboard/graph.png";
import donut from "../../static/HospitalDashboard/donut.png";

export default function HospitalDashboard() {
  return (
    <SpacedContainer mx={4}>
      <Heading as="h2" py="4" color="#11142D" fontSize="2xl" fontWeight="semibold">Dashboard</Heading>
      <Grid
        gridTemplateColumns="repeat(4, 1fr)"
        gridTemplateRows="repeat(3, 1fr)"
        minH="50vh"
        gap={6}
      >
        <GridItem rowSpan={2} colSpan={3}>
          <WelcomeCard
            description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor."
            readMoreLink="#"
            img={null}
          />
        </GridItem>

        <GridItem rowSpan={1} colSpan={1} bg="#DCEBFB" rounded="lg" p={3}>
          <Flex
            direction="column"
            justifyContent="space-around"
            alignItems="flex-end"
            w="100%"
            h="100%"
          >
            <Text fontWeight={300}>{format(new Date(), "hh:MM a")}</Text>
            <Text fontSize="lg" fontWeight="semibold" color="brand.darkPink">Good Evening</Text>
          </Flex>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1} bg="#6672FB" color="white" rounded="lg" p={3}>
          <Flex
            direction="column"
            justifyContent="space-around"
            w="100%"
            h="100%"
          >
            <Text fontSize="xs">Alert</Text>
            <Flex
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="lg">Temperature</Text>
              <Text fontSize="3xl" fontWeight="bold">37.5 C</Text>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1} bg="#6200EE" color="white" rounded="lg" p={3}>
          <Image boxSize="2rem" src={patients} />
          <Flex justify="space-between">
            <Box>
              <Text fontSize="3xl" fontWeight="semibold">85K+</Text>
              <Text fontSize="lg">Total Patients</Text>
            </Box>
            <Image h="100%" w="auto" src={bars} />
          </Flex>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg="#00C4B4" color="white" rounded="lg" p={3}>
          <Image boxSize="2rem" src={calendar} />
          <Flex justify="space-between">
            <Box>
              <Text fontSize="3xl" fontWeight="semibold">232</Text>
              <Text fontSize="lg">New Appointments</Text>
            </Box>
            <Image h="100%" w="auto" src={pie} />
          </Flex>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg="#4707FF" color="white" rounded="lg" p={3}>
          <Image boxSize="2rem" src={money} />
          <Flex justify="space-between">
            <Box>
              <Text fontSize="3xl" fontWeight="semibold">232+</Text>
              <Text fontSize="lg">Total Payments</Text>
            </Box>
            <Image h="100%" w="auto" src={graph} />
          </Flex>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg="#07E1FF" color="white" rounded="lg" p={3}>
          <Image boxSize="2rem" src={news} />
          <Flex justify="space-between">
            <Box>
              <Text fontSize="3xl" fontWeight="semibold">500</Text>
              <Text fontSize="lg">New Articles</Text>
            </Box>
            <Image h="100%" w="auto" src={donut} />
          </Flex>
        </GridItem>
      </Grid>

      <Grid
        templateColumns="repeat(8, 1fr)"
        gap={6}
        my={6}
        minHeight="50vh"
      >
        <GridItem colSpan={3} bg="white" color="white" rounded="lg" p={3} />
        <GridItem colSpan={3} bg="white" color="white" rounded="lg" p={3} />
        <GridItem colSpan={2} color="white" rounded="lg">
          <Box bg="#2E3192" p={6} w="100%" rounded="lg">
            <Heading as="h4" fontSize="xl" fontWeight="semibold" mb={4}>Calendar</Heading>
            <Calendar events={[]} />
          </Box>
        </GridItem>
      </Grid>
    </SpacedContainer>
  );
}
