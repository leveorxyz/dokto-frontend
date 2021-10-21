import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import MedicineList from "./MedicineList";
import InternalMedicineCard from "./InternalMedicineCard";

const InternalMedicineScroll = () => (
  <div>
    <Box pb="12">
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)",
        }}
        gap={6}
      >
        {MedicineList
          .map((list) => (
            <InternalMedicineCard
              key={list.id}
              title={list.title}
              data={list.data}
            />
          ))}
      </Grid>
    </Box>
  </div>
);

export default InternalMedicineScroll;
