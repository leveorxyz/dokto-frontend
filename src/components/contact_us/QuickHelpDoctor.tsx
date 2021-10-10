import React from "react";
import {
  Box, Heading, Grid, ListItem, UnorderedList,
} from "@chakra-ui/react";

const QuickHelpDoctor = () => {
  const marginX = {
    sm: "6", md: "32", lg: "32", xl: "32", base: "6",
  };
  return (
    <div>
      <Box px={marginX} w="100%" py="10" bg="#e6e6e6">
        <Heading as="h2" fontWeight="bold" fontSize="4xl" mb="4" pt="100">Quick Help</Heading>
        <Box mb="16" fontSize="lg" color="gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu enim vitae metus consectetur dictum vitae vel arcu. Nam rhoncus lacus vel fermentum posuere. Donec molestie sodales justo, sed fermentum diam finibus eu. Vestibulum vel ex id justo viverra interdum. Nunc id dictum orci. Morbi efficitur, mi nec pharetra maximus, est ligula finibus urna, vitae condimentum augue libero sed tellus. Nulla facilisi. Curabitur et commodo sapien. Aliquam cursus maximus elementum. Vivamus at interdum massa, non tempus arcu. Praesent elementum in ante a molestie.</Box>
        <Box pb="100">
          <Grid
            templateColumns={{
              sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)", base: "repeat(1, 1fr)",
            }}
            gap={6}
          >
            <Box fontWeight="bold" fontSize="2xl">
              <UnorderedList>
                <ListItem>General Questions</ListItem>
                <ListItem>Excuse Notes &amp; Medical Records</ListItem>
                <ListItem>Payment, Insurance &amp; Billing</ListItem>
              </UnorderedList>
            </Box>
            <Box fontWeight="bold" fontSize="2xl">
              <UnorderedList>
                <ListItem>Prescriptions &amp; Pharmacy</ListItem>
                <ListItem>Troubleshooting</ListItem>
                <ListItem>Managing my Account</ListItem>
              </UnorderedList>
            </Box>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};
export default QuickHelpDoctor;
