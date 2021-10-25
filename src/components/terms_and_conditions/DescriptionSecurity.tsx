/* eslint-disable max-len */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const DescriptionSecurity = () => (
  <div>
    <SpacedContainer>
      <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="4">Privacy and Security</Heading>
      <Box fontSize="lg" color="#858585" pb="20">
        <Box mb="4">
          Dokto considers the privacy of my health information to be one of the most important elements in our relationship with me. Dokto’s responsibility to maintain the confidentiality of my health information is one that they take very seriously. I accept Dokto Privacy and Security Policy.
        </Box>
        <Box mb="4">
          I understand that it is extremely important that I keep my password to access Dokto completely confidential. If, at any time, I feel that the confidentiality of my password has been compromised, I will change it by going to the password link on the Dokto website. I understand that Dokto or their authorized vendors and agents take no responsibility for and disclaim any and all liability or consequential damages arising from a breach of health record confidentiality resulting from my sharing or losing my password. If Dokto or their authorized vendors and agents discovers that I have inappropriately shared my password with another person, or that I have misused or abused my online access privileges in any way, my participation may be discontinued without prior notice.
        </Box>
      </Box>
    </SpacedContainer>
  </div>
);

export default DescriptionSecurity;
