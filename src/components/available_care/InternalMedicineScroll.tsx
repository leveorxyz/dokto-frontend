import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import InternalMedicineCard from "./InternalMedicineCard";

type PropTypes = {
  listData: {
    id: number,
    title: string,
    data: string,
  }[];
};

const InternalMedicineScroll = ({ listData }: PropTypes) => (

  <Box pb="12">
    <Grid
      templateColumns={{
        sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)",
      }}
      gap={[3, 3, 8, 24, 24]}
    >
      {listData
        .map(({
          id, title, data,
        }) => (
          <InternalMedicineCard
            key={id}
            title={title}
            data={data}
          />
        ))}
    </Grid>
  </Box>
);

export default InternalMedicineScroll;
