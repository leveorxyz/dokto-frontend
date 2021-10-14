import React from "react";
import { Box, Heading, Grid } from "@chakra-ui/react";
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
      <SpacedContainer>
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
              icon={<Box as={Icon} size={40} color="black" />}
              title={title}
              description={description}
            />
          ))}
        </Grid>
      </SpacedContainer>
    </div>
  );
}
