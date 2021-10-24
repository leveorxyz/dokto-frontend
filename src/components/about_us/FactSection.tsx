import React from "react";
import {
  Box, Heading, Grid, Image,
} from "@chakra-ui/react";
import People from "../../static/Group 97.svg";
import Business from "../../static/office-svgrepo-com 1.svg";
import Globe from "../../static/globe.svg";

import IconCard from "../common/IconCard";

const facts = [
  {
    id: "people",
    Icon: People,
    title: (
      <>
        <b>5,000+</b>
        &nbsp;providers offering world-class, professional care
      </>
    ),
  },
  {
    id: "globe",
    Icon: Globe,
    title: (
      <>
        <b>2,000</b>
        &nbsp;patients globally trust Dokto for accessible, affordable virtual healthcare
      </>
    ),
  },
  {
    id: "business",
    Icon: Business,
    title: (
      <>
        Safe, secure, state-of-the-art technology, compliant with HIPAA requirements
      </>
    ),
  },
];

export default function AboutUsFacts() {
  return (
    <Box bg="#008FBA" py={12}>
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
              icon={<Image src={Icon} />}
              title={title}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
