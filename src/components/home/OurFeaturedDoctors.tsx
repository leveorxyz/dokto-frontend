import React from "react";
import {
  Grid,
} from "@chakra-ui/react";
import OurDoctorsCard from "./OurDoctorsCard";

const OurFeaturedDoctors = () => (
  <div>
    <Grid
      templateColumns={{
        sm: "repeat(1, 1fr)", md: "repeat(5, 1fr)", lg: "repeat(5, 1fr)", base: "repeat(1, 1fr)",
      }}
      gap={{
        sm: "15", md: "6", lg: "6", xl: "6", base: "16",
      }}
    >
      <OurDoctorsCard />
      <OurDoctorsCard />
      <OurDoctorsCard />
      <OurDoctorsCard />
      <OurDoctorsCard />
    </Grid>
  </div>
);

export default OurFeaturedDoctors;
