import React from "react";
import {
  Box, Grid, Image,
} from "@chakra-ui/react";

import Card from "./Card";
import cardsData from "./cardsData";

const DashboardHome = () => (
  <div>
    <Box py={12} bg="rgba(255, 255, 255, 0.35)">
      <Box mx={[3, 3, "10%", "10%"]}>
        <Box pb="10" color="#11142D" fontSize="4xl" fontWeight="bold">Dashboard</Box>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)", sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(5, 1fr)",
          }}
          gap={12}
        >
          {cardsData.map(({ id, Icon, title }) => (
            <Card
              key={id}
              icon={<Image src={Icon} />}
              title={title}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  </div>
);

export default DashboardHome;
