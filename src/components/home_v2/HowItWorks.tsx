import React from "react";
import {
  Box, Grid,
} from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";
import DescriptionHowItWorks from "./DescriptionHowItWorks";

const HowItWorks = () => (
  <div>
    <SpacedContainer>
      <Grid>
        <Box />
        <DescriptionHowItWorks />
      </Grid>
    </SpacedContainer>
  </div>
);

export default HowItWorks;
