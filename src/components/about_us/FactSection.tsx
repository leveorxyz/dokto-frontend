import React from "react";
import { Box, Heading, Grid } from "@chakra-ui/react";
import { IoBusiness, IoPeople, IoGlobe } from "react-icons/io5";

import IconCard from "../common/IconCard";

const facts = [
  {
    id: "people",
    Icon: IoPeople,
    title: (
      <>
        <b>5,000+</b>
        &nbsp;providers offering world-class, professional care
      </>
    ),
  },
  {
    id: "globe",
    Icon: IoGlobe,
    title: (
      <>
        <b>2,000</b>
        &nbsp;patients globally trust Dokto for accessible, affordable virtual healthcare
      </>
    ),
  },
  {
    id: "business",
    Icon: IoBusiness,
    title: (
      <>
        Safe, secure, state-of-the-art technology, compliant with HIPAA requirements
      </>
    ),
  },
];

export default function AboutUsFacts() {
  return (
    <Box bg="cyan.500" py={12}>
      <Box mx={[3, 3, "10%", "10%"]}>
        <Heading pb="14" color="white" fontSize="4xl">Dokto Facts</Heading>
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)",
          }}
          gap={6}
        >
          {facts.map(({ id, Icon, title }) => (
            <IconCard
              key={id}
              icon={<Box as={Icon} size={200} color="cyan.500" />}
              title={title}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
