import React from "react";
import { Box, Container, Grid } from "@chakra-ui/react";
import DescriptionSpecialityDoctor from "./DescriptionSpecialityDoctor";
import StatSpecialityDoctor from "./StatSpecialityDoctor";

const SpecialityDoctor = () => (
  <div>
    <Box maxW="100%" px={[2, 2, 32, 32, 32]} py={20}>
      <Container maxW="container.2xl">
        <Grid
          templateColumns={{
            sm: "repeat(1,1fr)", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)", base: "repeat(1, 1fr)",
          }}
          gap={7}
        >
          <Box><DescriptionSpecialityDoctor /></Box>
          <Box><StatSpecialityDoctor /></Box>
        </Grid>
      </Container>
    </Box>
  </div>
);

export default SpecialityDoctor;
