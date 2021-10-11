import React from "react";
import { Box, Heading, Grid } from "@chakra-ui/react";

import { SpacedContainer } from "../common/Containers";
import CustomBulletList from "../common/CustomBulletList";
import ArrowButton from "../common/buttons/ArrowButton";

export default function QuickHelp() {
  const listData = [
    "General Questions",
    "Excuse Notes & Medical Records",
    "Payment, Insurance & Billing",
    "Prescriptions & Pharmacy",
    "Troubleshooting",
    "Managing my Account",
  ];

  return (
    <Box w="100%" bg="gray.100">
      <SpacedContainer py={[12, 24, 24, 24]}>
        <Heading as="h2" fontWeight="bold" fontSize="4xl" pb="4">Quick Help</Heading>
        <Box fontSize="lg" color="gray.500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu enim vitae metus consectetur dictum vitae vel arcu. Nam rhoncus lacus vel fermentum posuere. Donec molestie sodales justo, sed fermentum diam finibus eu. Vestibulum vel ex id justo viverra interdum. Nunc id dictum orci. Morbi efficitur, mi nec pharetra maximus, est ligula finibus urna, vitae condimentum augue libero sed tellus. Nulla facilisi. Curabitur et commodo sapien. Aliquam cursus maximus elementum. Vivamus at interdum massa, non tempus arcu. Praesent elementum in ante a molestie.</Box>
        <Box py={12}>
          <Grid
            templateColumns={{
              sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)", base: "repeat(1, 1fr)",
            }}
            gap={6}
          >
            <CustomBulletList listData={listData.slice(0, 3)} />
            <CustomBulletList listData={listData.slice(3, listData.length)} />
          </Grid>
        </Box>
        <ArrowButton>FAQs</ArrowButton>
      </SpacedContainer>
    </Box>
  );
}
