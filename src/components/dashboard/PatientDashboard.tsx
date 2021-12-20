import {
  Flex,
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Divider,
  Button,
} from "@chakra-ui/react";
import format from "date-fns/format";

import { SpacedContainer } from "../common/Containers";
import WelcomeCard from "./WelcomeCard";
import Appointments from "./Appointments";

import Banner from "../../static/PatientDashboard/Banner.png";
import Appointment from "../../static/PatientDashboard/Appointment.png";

export default function PatientDashboard() {
  return (
    <SpacedContainer mx={4}>
      <Heading as="h2" py="4" color="#11142D" fontSize="2xl" fontWeight="semibold">Dashboard</Heading>
      <Grid
        gridTemplateColumns="repeat(12, 1fr)"
        gridTemplateRows="repeat(2, 1fr)"
        minH="30vh"
        gap={6}
      >
        <GridItem rowSpan={2} colSpan={[12, 12, 7, 8, 9]}>
          <WelcomeCard
            description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor."
            readMoreLink="#"
            img={Banner}
          />
        </GridItem>

        <GridItem rowSpan={1} colSpan={[6, 6, 5, 4, 3]} bg="#DCEBFB" rounded="lg" p={3}>
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

        <GridItem rowSpan={1} colSpan={[6, 6, 5, 4, 3]} bg="#6672FB" color="white" rounded="lg" p={3}>
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
      </Grid>

      <Grid
        templateColumns="repeat(24, 1fr)"
        gap={6}
        my={6}
        minHeight="50vh"
      >
        <GridItem colSpan={[24, 24, 12, 8, 9]} bg="white" color="white" rounded="lg">
          <Box p={6}>
            <Text color="brand.darkPink" fontWeight="semibold">Previous Appointments</Text>
          </Box>
          <Divider />
          <Appointments />
        </GridItem>

        <GridItem colSpan={[24, 24, 12, 8, 9]} bg="white" color="white" rounded="lg">
          <Box p={6}>
            <Text color="brand.darkPink" fontWeight="semibold">Latest Messages</Text>
          </Box>
          <Divider />
        </GridItem>

        <GridItem colSpan={[24, 24, 12, 8, 6]} color="white" rounded="lg">
          <Flex direction="column" justify="center" p={6} w="100%" rounded="lg">
            <Image src={Appointment} alt="Book an appointment" width="100%" height="auto" fit="contain" />

            <Button
              bg="brand.darkPink"
              _hover={{ opacity: 0.9 }}
              py={[6, 6, 6, 6, 8]}
            >
              QUICKLY BOOK A DOCTOR
            </Button>

            <Box mt={2} fontSize="sm" color="black" textAlign="center">
              Our Doctors and specialists are waiting
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </SpacedContainer>
  );
}
