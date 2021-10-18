import React from "react";
import { Grid } from "@chakra-ui/react";
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
      >
        <CareListCard listData={CareListData.slice(18, 25)} />
        <CareListCard listData={CareListData.slice(25, 31)} />
        <CareListCard listData={CareListData.slice(31, CareListData.length)} />
      </Grid>
    </SpacedContainer>
  </div>
);

export default CareList;
