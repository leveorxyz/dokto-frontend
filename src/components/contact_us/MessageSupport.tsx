import React from "react";
import {
  Flex, Box, Heading, Text, Input, Textarea,
} from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";
import ArrowButton from "../common/buttons/ArrowButton";

const TelephoneContact = () => (
  <Box bg="brand.dark" color="white" p={[6, 6, 8, 8, 8]}>
    <Heading as="h3" fontSize="2xl" pb={6}>Call Support</Heading>
    <Text color="gray.300">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque euismod, urna eu tincidunt consectetur, nisl
      lectus aliquam nisl, eget porttitor nisl nisl eu nisl.
    </Text>
    <br />
    {
      [
        { initial: "Toll Free", desc: "(800) 997-6196" },
        { initial: "TTY", desc: "771" },
      ].map(({ initial, desc }) => (
        <Text key={initial} fontSize="lg">
          <b>{initial}</b>
          <Box as="span" color="gray.300">
            &nbsp;
            {desc}
          </Box>
        </Text>
      ))
    }
  </Box>
);

const EmailContact = () => (
  <Box bg="cyan.600" color="white" p={[6, 6, 8, 8, 8]}>
    <Heading as="h3" fontSize="2xl" pb={6}>Call Support</Heading>
    <Text color="gray.200">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque euismod, urna eu tincidunt consectetur, nisl
      lectus aliquam nisl, eget porttitor nisl nisl eu nisl.
    </Text>
    <br />
    {
      [
        { initial: "Media inquiries", desc: "press@doctorondeman.com" },
        { initial: "Sales inquiries", desc: "press@doctorondeman.com" },
        { initial: "Partnership inquiries", desc: "press@doctorondeman.com" },
      ].map(({ initial, desc }) => (
        <Text key={initial} fontSize="lg">
          <b>{initial}</b>
          <Box as="span" color="gray.200">
            &nbsp;
            {desc}
          </Box>
        </Text>
      ))
    }
  </Box>
);

const ContactForm = () => (
  <Box w={["100%", "100%", "85%", "70%", "70%"]} py={[6, 6, 8, 8, 8]}>
    <Input placeholder="Subject" mb={3} />
    <Input placeholder="Email" mb={3} />
    <Input placeholder="Name" mb={3} />
    <Textarea placeholder="Question" resize="vertical" />
    <Text fontSize="sm" fontWeight="bold" color="gray.500" textAlign="right">max 2000 characters</Text>
    <ArrowButton bgColor="cyan.500" iconColor="white">Submit</ArrowButton>
  </Box>
);

export default function MessageSupport() {
  return (
    <SpacedContainer py={[12, 12, 24, 24, 24]}>
      <Flex wrap="wrap">
        <Box w={["100%", "50%", "50", "50%"]} p={[6, 6, 8, 8, 8]}>
          <Heading as="h2" color="brand.dark" pb={6}>Message Support</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, urna eu tincidunt consectetur, nisl
            lectus aliquam nisl, eget porttitor nisl nisl eu nisl.
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
