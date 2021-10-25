/* eslint-disable max-len */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const WhatInformationCollect = () => (
  <div>
    <SpacedContainer>
      <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="4">Use of Dokto for Health Care Services</Heading>
      <Box fontSize="lg" color="#858585" pb="20">
        <Box mb="4">
          In order to create an account for you, and for you to use our services, we collect and process certain information, depending on your use of services. This information may include:
        </Box>
        <Box mb="4">
          Your full name, phone number, mailing address, telephone number, email address, login credentials, and password details. You provide us this information when you register on our site, subscribe to our mobile app, fill out a form on our site, make a purchase, or request any information if you contact us.
        </Box>
        <Box mb="4">
          If you choose to purchase a product from us, we (or our third-party payment processors) collect your payment information. We do not store your payment information in our system, apart from the last four digits of your account, credit card or debit card (as applicable), expiration date, and billing address.
        </Box>
        <Box mb="4">
          Information about your activity on and interaction with our site (such as your IP address, the type of device or browser you use, and your actions on the site).
        </Box>
        <Box mb="4">
          Information about the way people visit and interact with our site, in the form of traffic analytics. You can opt out of being included in Google Analytics. To do so, click here. For more information about our use of data analytics to protect and improve our services, click here to see our Cookie Policy.
        </Box>
        <Box mb="4">
          Communications you send to us, (such as requests for customer support or technical questions or comments you send us regarding our content that is read, viewed or listened to.)
        </Box>
        <Box mb="4">
          Information you submit to us in the form of blog comments, contributions to discussions, or posts or messages to other users on our website.
        </Box>
      </Box>
    </SpacedContainer>
  </div>
);

export default WhatInformationCollect;
