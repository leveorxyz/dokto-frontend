import { Box, Grid } from "@chakra-ui/react";
import TestimonialCard from "./TestimonialCard";

type PropTypes = {
  listData: {
    id: number,
    title: string,
    data: string,
    rating: string,
    patientType: string,
  }[];
};

const InternalMedicineScroll = ({ listData }: PropTypes) => (
  <Box pb="12">
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)", sm: "repeat(1, 1fr)", md: `repeat(${listData.length}, 1fr)`, lg: `repeat(${listData.length}, 1fr)`,
      }}
      gap={[6, 6, 12, 24, 36]}
    >
      {listData
        .map(({
          id, ...rest
        }) => (
          <TestimonialCard
            key={id}
            {...rest}
          />
        ))}
    </Grid>
  </Box>
);

export default InternalMedicineScroll;
