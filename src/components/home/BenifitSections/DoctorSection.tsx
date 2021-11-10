/* eslint-disable max-len */
import {
  Flex, Box,
} from "@chakra-ui/react";
import React from "react";
import PinkBulletList from "../../common/PinkBulletList";

const items = [
  "Create your own flexible work hours.",
  "Leverage the platform to create the perfect solution to start your new practice or expand your current.",
  "Reduce overheads, minimizing administrative, operational and travel costs.",
  "Accept consultations at your convenience, be they local or international.",
  "Provide quality and affordable healthcare.",
];

const DoctorSection = () => (
  <Box>
    <Flex direction="column" alignItems="center">
      <Box w="100%" d="flex" flexDir="column" alignItems="top" m="4" fontSize="lg">
        <Box px={[0, 0, 6, 6, 6]} color="primary.dark" fontSize="2xl" fontWeight="600">
          Your virtual office without the overhead.
        </Box>
        {
          [
            "Our platform enables licensed medical practitioners like you to see patients from virtually anywhere. Many of our providers range from Primary Care Providers, Dermatologists, Counselors, Therapists, Psychologists, Psychiatrists, Home Health Caregivers, Nurse Practitioners and more.",
            "Become a part of the global network that is revolutionizing healthcare. We take the guesswork out of your consultancy booking system and give you the ability to provide your patients with unlimited access to quality and affordable healthcare. And all of this is possible without leaving your home or office - through the convenience of chat, SMS, email or video conference.",
          ].map(
            (item) => <Box key={item} px={[0, 0, 8, 8, 8]} color="gray.500" mt="4">{item}</Box>,
          )
        }
        <Box px={[0, 0, 6, 6, 6]} fontWeight="600" color="primary.dark" mt={4}>
          As a Dokto provider you can:
        </Box>
        <Box px={[0, 0, 8, 8, 8]} mt={2}>
          <PinkBulletList listData={items} />
        </Box>
        <Box px={[0, 0, 6, 6, 6]} fontWeight="600" color="primary.dark" mt="4">
          We are proud to work with only licensed and board-certified experts.
        </Box>
      </Box>
    </Flex>
  </Box>
);

export default DoctorSection;
