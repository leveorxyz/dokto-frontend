/* eslint-disable max-len */
import React from "react";
import {
  Flex, Box, Heading, Text, Input, Textarea,
} from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";
import ArrowButton from "../common/buttons/ArrowButton";

const TelephoneContact = () => (
  <Box bg="brand.dark" color="white" p={[6, 6, 8, 8, 8]}>
    <Heading as="h3" fontSize="2xl" pb={6}>Call Support</Heading>
    <Text color="#8472A7">
      Our phone lines are open
      <br />
      Mondays 9AM - Fridays 6PM PST
      <br />
      Saturdays: 10AM – 4PM PST
      <br />
      Sundays: 10AM – 4PM PST
    </Text>
    <br />
    {
      [
        { initial: "Toll Free", desc: "(800) 997-6196" },
        { initial: "", desc: "(800) 997-6197" },
      ].map(({ initial, desc }) => (
        <Text key={initial} fontSize="lg">
          <b>{initial}</b>
          <Box as="span" color="#8472A7">
            &nbsp;
            {desc}
          </Box>
        </Text>
      ))
    }
  </Box>
);

const EmailContact = () => (
  <Box bg="#0095C1" color="white" p={[6, 6, 8, 8, 8]}>
    <Heading as="h3" fontSize="2xl" pb={6}>Email Us</Heading>
    <Text color="#65D8FA">
      For corporate inquiries, feel free to contact us via email and we will get back to you as soon as possible.
    </Text>
    <br />
    {
      [
        { initial: "Media inquiries", desc: "press@dokto.com" },
        { initial: "Partnership inquiries", desc: "corporate@dokto.com" },
        { initial: "Enterprise inquiries", desc: "corporate@dokto.com" },
      ].map(({ initial, desc }) => (
        <Text key={initial} fontSize="lg">
          <b>{initial}</b>
          <Box as="span" color="#65D8FA">
            &nbsp;
            {desc}
          </Box>
        </Text>
      ))
    }
  </Box>
);

const ContactForm = () => (
  <Box w="100%" py={[6, 6, 8, 8, 8]}>
    <Input placeholder="Subject" mb={3} />
    <Input placeholder="Email" mb={3} />
    <Input placeholder="Name" mb={3} />
    <Textarea placeholder="Question" resize="vertical" />
    <Text fontSize="sm" fontWeight="bold" color="#170041" textAlign="right">max 2000 characters</Text>
    <ArrowButton bgColor="#3DE0FF" iconColor="white" width="10rem">Submit</ArrowButton>
  </Box>
);

export default function MessageSupport() {
  return (
    <SpacedContainer py={[12, 12, 24, 24, 24]}>
      <Flex wrap="wrap">
        <Box w={["100%", "50%", "50", "50%"]} pr={[0, 0, 8, 8, 8]}>
          <Heading as="h2" color="brand.dark" pb={6}>Message Support</Heading>
          <Text color="#858585">
            Our administrative and support team are on hand to help with all your questions regarding your account or the technical functionality of the site. Please note that our support staff are not medical personnel and cannot help with consultations, diagnoses or medicines.
          </Text>

          <ContactForm />
        </Box>
        <Box w={["100%", "50%", "50", "50%"]}>
          <TelephoneContact />
          <br />
          <EmailContact />
        </Box>
      </Flex>
    </SpacedContainer>
  );
}
