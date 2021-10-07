import { Grid, Box, Container } from "@chakra-ui/react";
import React from "react";

import AboutDoctorCard from "./AboutDoctorCard";

const AboutDoctor = () => (
  <div>
    <Box maxW="100%" px={[6, 6, 32, 32, 32]} py={5}>
      <Container maxW="container.2xl">
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)",
          }}
          gap={6}
        >
          <AboutDoctorCard image="https://source.unsplash.com/collection/42413461/500x300" text="Your best virtual healthcare" />
          <AboutDoctorCard image="https://source.unsplash.com/collection/42413461/500x300" text="World class doctors, hospitals and pharmacies" />
          <AboutDoctorCard image="https://source.unsplash.com/collection/42413461/500x300" text="Get optimum treatment" />
        </Grid>
      </Container>
    </Box>
  </div>
);

export default AboutDoctor;
