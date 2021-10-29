/* eslint-disable max-len */
import React from "react";
import { Box, Heading, Link } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const YourRights = () => (
  <div>
    <SpacedContainer>
      <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="4">Your Rights</Heading>
      <Box fontSize="lg" color="#858585" pb="20">
        <Box mb="4">
          You have certain rights around the use of your data, including the ability to opt out of promotional emails (as explained above), cookies (explained in our Cookie Policy) and collection of your data by certain analytics providers.
        </Box>
        <Box mb="4">
          You may update, view or delete your account and personal data at any time. You also may contact us at info@dokto.com for your individual rights requests about your personal data.
        </Box>
        <Box mb="4">
          To request access to your personal data that we collect or to update your personal data that we collect,&nbsp;
          <Link href="/">Click Here</Link>
        </Box>
        <Box mb="4">
          To terminate and delete your account, &nbsp;
          <Link href="/">Click Here</Link>
        </Box>
        <Box mb="4">
          If you have any issues terminating your account, or accessing and updating your personal data, please contact at info@dokita247.com at any time.
        </Box>
        <Box mb="4">
          Please note: Even after your account is deleted, we may retain your data for as long as we have a legitimate purpose to do so (and in accordance with applicable law), including to assist with legal obligations, resolve disputes, and enforce our agreements. We may retain and disclose such data pursuant to this Privacy Policy after your account has been terminated.
        </Box>
        <Heading as="h2" color="#170041" fontWeight="bold" fontSize="2xl" mb="4">General Data Privacy Regulation (GDPR)</Heading>
        <Box mb="4">
          The GDPR takes effect on May 25, 2018, and is intended to protect the data of European Union citizens.
        </Box>
        <Box mb="4">
          If the data that you provide to us in the course of your use of our site or services or products is governed by GDPR, we will abide by the relevant portions of the regulation. If you are a resident of the European Economic Area (EEA), or are accessing this site from within the EEA, you may have the right to request: access to, correction of, deletion of; portability of; and restriction or objection to processing of your personal data, from us. This includes the “right to be forgotten.”
        </Box>
        <Box mb="4">
          To make any of these requests, please review the section above on Your Rights or email our GDPR contact at info@dokto.com Reference Subject: GDPR.
        </Box>
      </Box>
    </SpacedContainer>
  </div>
);

export default YourRights;
