import {
  Grid,
} from "@chakra-ui/react";
import DoctorCard from "./DoctorCard";

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
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
    </Grid>
  </div>
);

export default OurFeaturedDoctors;
