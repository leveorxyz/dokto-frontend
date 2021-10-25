/* eslint-disable max-len */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const ThirdPartyLinks = () => (
  <div>
    <SpacedContainer>
      <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="4">Third-Party Links</Heading>
      <Box fontSize="lg" color="#858585" pb="20">
        <Box mb="4">
          Occasionally, at our discretion, we may include or offer third-party products or services, or share links to third parties on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. These links may involve us receiving financial compensation if you buy something after clicking the link. We only reference third-party resources we strongly recommend. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
        </Box>
      </Box>
    </SpacedContainer>
  </div>
);

export default ThirdPartyLinks;
