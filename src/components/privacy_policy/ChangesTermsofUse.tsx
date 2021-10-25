/* eslint-disable max-len */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const ChangesTermsofUse = () => (
  <div>
    <SpacedContainer>
      <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="4">Changes to our Terms of Use and Privacy Policy</Heading>
      <Box fontSize="lg" color="#858585" pb="20">
        <Box mb="4">
          We may update this policy. If we do decide to update and change our terms of use or privacy policy, we will let you know about any material changes, either by notifying you on the site or by sending you an email. New versions of this policy will not be applied retroactively, and we will tell you the date that they will go into effect.
        </Box>
        <Box mb="4">
          This policy was last modified and is effective as of October 23rd, 2021.
        </Box>
        <Box mb="4">
          From May 25th, 2018, the new General Data Protection Regulation (GDPR) – a regulation that ensures the correct use of everyone’s data – will go into effect. This modification of our Privacy Policy and its public posting ensures we have made you aware of the law, our compliance with the law, and confirmation that you have given us your explicit consent to the correct use of your data.
        </Box>
      </Box>
    </SpacedContainer>
  </div>
);

export default ChangesTermsofUse;
