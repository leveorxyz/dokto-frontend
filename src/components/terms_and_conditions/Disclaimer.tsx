/* eslint-disable max-len */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const Disclaimer = () => (
  <div>
    <SpacedContainer>
      <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="4">Disclaimer</Heading>
      <Box fontSize="lg" color="#858585" pb="20">
        <Box mb="4">
          I understand that my account may not be available to me at all times due to unanticipated system failures, back-up procedures, maintenance, or other causes beyond the control of the Dokto or its authorized vendors and agents. Access is provided on an “as-is as-available” basis and Dokto or its authorized vendors and agents do not guarantee that I will be able to access my account at all times.
        </Box>
        <Box mb="4">
          I understand that Dokto or its authorized vendors and agents take no responsibility for and disclaim any and all liability arising from any inaccuracies or defects in software, communication lines, the virtual private network, the Internet or my Internet Service Provider (ISP), access system, computer hardware or software, or any other service or device that I use to access my account.
        </Box>
        <Box mb="4">
          I understand that the health care services rendered by Dokto’s clinicians are subject to their discretion and professional judgment. I understand that Dokto operates globally, yet is subjected to state and county regulations, and may not be available in certain countries, states and/or provinces.
        </Box>
      </Box>
    </SpacedContainer>
  </div>
);

export default Disclaimer;
