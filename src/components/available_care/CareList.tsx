/* eslint-disable max-len */
import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";
import CareListData from "./CareListData";
import CareListCard from "./CareListCard";

const CareList = () => (
  <div>
    <SpacedContainer>
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)",
        }}
        gap={20}
        mb="20"
      >
        <CareListCard listData={CareListData.slice(0, 6)} />
        <CareListCard listData={CareListData.slice(6, 12)} />
        <CareListCard listData={CareListData.slice(12, 18)} />
      </Grid>
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)",
        }}
        gap={20}
        mb="20"
      >
        <CareListCard listData={CareListData.slice(18, 25)} />
        <CareListCard listData={CareListData.slice(25, 31)} />
        <CareListCard listData={CareListData.slice(31, CareListData.length)} />
      </Grid>
      <Box fontSize="md" color="gray" textAlign="center" px="2" mb="20">
        *Some services may require additional or in-person follow-up consultation with a specialized practitioner, which may not be available online.
        <br />
        Please sign in to your account access the available services.
      </Box>
    </SpacedContainer>
  </div>
);

export default CareList;
