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
    "Managing My Account",
  ];

  return (
    <Box w="100%" bg="gray.100">
      <SpacedContainer py={[12, 24, 24, 24]}>
        <Heading as="h2" fontWeight="bold" fontSize="4xl" pb="4">Quick Help</Heading>
        <Box fontSize="lg" color="gray.500">We are always happy to assist. You can find quick answers for any of the categories below in our Frequently Asked Questions section. If you do not find what you need, you can contact us below.</Box>
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
