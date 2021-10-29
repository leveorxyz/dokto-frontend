/* eslint-disable max-len */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const HowInformationShared = () => (
  <div>
    <SpacedContainer>
      <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="4">How This Information Is Shared</Heading>
      <Box fontSize="lg" color="#858585" pb="20">
        <Box mb="4">
          Your information will not be sold, exchanged, transferred or given to others without your consent, other than for the express purpose of delivering the purchased product or service you have requested. We may store personal information in locations outside of our direct control. Any personally identifiable information you elect to make publicly available to us, such as comments you post on our blog pages, will be available to others. If you remove or request to remove information that you have made public on our site, copies may remain viewable in cached and archived pages of our site, or if other users have copied or saved information.
        </Box>
        <Box mb="4">
          Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever without your consent, other than for the express purpose of delivering the purchased product or service you have requested.
        </Box>
      </Box>
    </SpacedContainer>
  </div>
);

export default HowInformationShared;
