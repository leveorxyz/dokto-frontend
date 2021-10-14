import React from "react";
import {
  Box, Heading, Grid, Center,
} from "@chakra-ui/react";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaRegHospital, FaCapsules, FaStethoscope } from "react-icons/fa";
import OurServicesCard from "./OurServicesCard";
import { SpacedContainer } from "../common/Containers";

const facts = [
  {
    id: "people",
    Icon: IoChatbubbleOutline,
    title: (
      <>
        <b>Consulation</b>
      </>
    ),
    description: (
      <>
        Consulation with a
        <br />
        trusted doctor
      </>
    ),
  },
  {
    id: "globe",
    Icon: FaStethoscope,
    title: (
      <>
        <b>Doctor</b>
      </>
    ),
    description: (
      <>
        Thousands of doctors
        <br />
        with specific or general
        <br />
        expertise
      </>
    ),
  },
  {
    id: "business",
    Icon: FaRegHospital,
    title: (
      <>
        <b>Hospital</b>
      </>
    ),
    description: (
      <>
        Look for the hospital
        <br />
        closest to your
        <br />
        location
      </>
    ),
  },
  {
    id: "pharmacy",
    Icon: FaCapsules,
    title: (
      <>
        <b>Online pharmacy</b>
      </>
    ),
    description: (
      <>
        Find a drug that
        <br />
        matches your diseases,
        <br />
        or buy it directly
      </>
    ),
  },
];

export default function OurServices() {
  return (
    <div>
      <Box w="100%" bg="gray.100" py="100">
        <SpacedContainer>
          <Center>
            <Heading as="h2" fontWeight="bold" fontSize="4xl" mb="4">Lorem ipsum dolor sit amet</Heading>
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(4, 1fr)", base: "repeat(1, 1fr)",
              }}
              gap={6}
            >
              {facts.map(({
                id, Icon, title, description,
              }) => (
                <OurServicesCard
                  key={id}
                  icon={(
                    <Box
                      padding={4}
                      bg="cyan.500"
                      rounded="full"
                      w="min-content"
                    >
                      <Icon size={28} />
                    </Box>
        )}
                  title={title}
                  description={description}
                />
              ))}
            </Grid>
          </Center>
        </SpacedContainer>
      </Box>
    </div>
  );
}
