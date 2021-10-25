/* eslint-disable max-len */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const Surveys = () => (
  <div>
    <SpacedContainer>
      <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="4">Surveys</Heading>
      <Box fontSize="lg" color="#858585" pb="20">
        <Box mb="4">
          I understand that from time to time I may be asked to complete patient satisfaction surveys. Dokto or its software provider, vendors and agents may analyze information submitted via these surveys as part of descriptive (demographic) studies and reports. In such cases all of my personal identifying information will be removed.
          If any provision or provisions of this Agreement shall be held to be invalid, illegal or unenforceable, the validity, legality and enforceability of the remaining provisions shall not be affected thereby.
        </Box>
        <Box mb="4">
          It is understood that no delay or omission in exercising any right or remedy identified herein shall constitute a waiver of such right or remedy, and shall not be construed as a bar to or a waiver of any such right or remedy on any other occasion.
        </Box>
        <Box mb="4">
          Dokto and its authorized agents and I agree to comply with all applicable laws and regulations of governmental bodies or agencies in performance of our respective obligations under this Agreement.
        </Box>
        Dokto, Inc.
        <br />
        540 East McNab Rd., Suite C
        <br />
        Pompano Beach, FL 33068
        <br />
        844.365.4822
        <br />
        info@dokto.com
      </Box>
    </SpacedContainer>
  </div>
);

export default Surveys;
