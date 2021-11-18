/* eslint-disable max-len */
import {
  Flex, Box, Heading, Image,
} from "@chakra-ui/react";
import React from "react";
import PinkBulletList from "../../common/PinkBulletList";
import DoctorProviderImage from "../../../static/doctorprovider.png";
import VirtualofficeImage from "../../../static/Virtualoffice.png";

const items = [
  "Create your own flexible work hours.",
  "Leverage the platform to create the perfect solution to start your new practice or expand your current.",
  "Reduce overheads, minimizing administrative, operational and travel costs.",
  "Accept consultations at your convenience, be they local or international.",
  "Provide quality and affordable healthcare.",
  "We are proud to work with only licensed and board-certified experts.",
];

const DoctorSection = () => (
  <Box>
    <Flex direction="column" alignItems="center">
      <Flex direction="row" alignItems="center">
        <Image src={VirtualofficeImage} flex="1" />
        <Box w="100%" d="flex" flexDir="column" alignItems="top" m="4" fontSize="lg" flex="1">
          <Heading
            fontSize="4xl"
            px={[0, 0, 6, 6, 6]}
            pb={4}
            fontWeight="semibold"
            color="brand.darkPink"
            textTransform="capitalize"
          >
            Your virtual office without the overhead.
          </Heading>
          {
          [
            "Our platform enables licensed medical practitioners like you to see patients from virtually anywhere. Many of our providers range from Primary Care Providers, Dermatologists, Counselors, Therapists, Psychologists, Psychiatrists, Home Health Caregivers, Nurse Practitioners and more.",
            "Become a part of the global network that is revolutionizing healthcare. We take the guesswork out of your consultancy booking system and give you the ability to provide your patients with unlimited access to quality and affordable healthcare. And all of this is possible without leaving your home or office - through the convenience of chat, SMS, email or video conference.",
          ].map(
            (item) => (
              <Box
                key={item}
                fontSize="lg"
                px={[0, 0, 6, 6, 6]}
                pb={12}
                fontWeight={300}
                lineHeight="2rem"
                color="primary.dark"
                mt="4"
              >
                {item}
              </Box>
            ),
          )
        }
        </Box>
      </Flex>
      <Flex direction="row" mt="200">
        <Image src={DoctorProviderImage} flex="1" />
        <Flex direction="column" flex="1">
          <Heading px={[0, 0, 6, 6, 6]} fontWeight="semibold" color="primary.dark" mt={4}>
            As a Dokto provider you can:
          </Heading>
          <Box px={[0, 0, 8, 8, 8]} mt={10}>
            <PinkBulletList listData={items} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  </Box>
);

export default DoctorSection;
