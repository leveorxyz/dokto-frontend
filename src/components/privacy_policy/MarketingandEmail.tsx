/* eslint-disable max-len */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const MarketingandEmail = () => (
  <div>
    <SpacedContainer>
      <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="4">Disclaimer</Heading>
      <Box fontSize="lg" color="#858585" pb="20">
        <Box mb="4">
          We try to keep emails to a minimum, and to give you the ability to opt in to any marketing communications we send. We also at any time give you the opportunity to opt out of non-essential messages. We try to keep emails to a minimum, and we give you the ability to opt in to any marketing communications we send. We also, at any time, give you the opportunity to opt out of our email communications by 1) clicking the “unsubscribe” link in the footer of all our email communications; or 2) contacting us at info@dokto.com with a request to opt out of email communications.
        </Box>
        <Box mb="4">
          Some communications we send are considered transactions (such as the delivery of a product you purchase from us). These communications are part of our contractual obligation, and if you wish to not receive these emails, you must cancel your product or service.
        </Box>
      </Box>
    </SpacedContainer>
  </div>
);

export default MarketingandEmail;
