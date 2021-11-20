/* eslint-disable max-len */
import React from "react";
import {
  Box, Heading, Flex, Image,
} from "@chakra-ui/react";

import HospitalUpperImage from "../../../static/HospitalUpper.png";
import HospitalLowerImage from "../../../static/HospitalLower.png";

const data = [
  {
    id: 1,
    heading: "A Healthcare Solution Delivered on Convenience",
    description: [
      "With modern enhancements to technology, more and more patients prefer easy access to healthcare services over in-person interactions with providers.",
      "Adding virtual care to your practice offers patients simple, on-demand care – without the usual wasted time and cost of most in-person visits.  Patients who live in remote locations, are homebound, or simply unable to take off time from work, can access your premium care virtually. Video conferencing, SMS messages, chat services, and online management systems connect more patients with providers than ever before.",
    ],
  },
  {
    id: 2,
    heading: "Superior Care at a Fraction of the Cost",
    description: [
      "Remote patient consultation, analysis and monitoring significantly reduce healthcare service costs, saving money for you and your patients. Telemedicine also reduces the frequency of in-person, non-urgent ER visits, creating the opportunity for more regular checkups and fewer critical care needs.",
    ],
  },
  {
    id: 3,
    heading: "Cost Effectiveness & Revenue Increase",
    description: [
      "Telehealth has proven invaluable for hospitals, clinics and their staff, helping to boost revenue by turning on-call hours into billable time, attracting new patients, reducing no-shows, and even reducing overhead for physicians who choose to switch to a flexible remote-working model for part of the week.",
      "In today’s healthcare world, convenience is key. At Dokto, we offer you and your patients flexibility matched with seamless medical care.",
    ],
  },
];

const ClinicsSection = () => (
  <div>
    <Box mb="50">
      <Flex direction="row" alignItems="center">
        <Image src={HospitalUpperImage} flex="1" fit="contain" />
        <Flex direction="column" flex="1">
          <Heading
            fontSize="4xl"
            px={[0, 0, 6, 6, 6]}
            pb={4}
            fontWeight="semibold"
            color="brand.darkPink"
            textTransform="capitalize"
            letterSpacing={6}
            mt="4"
          >
            Virtual care without boundaries
          </Heading>
          <Box
            fontSize="lg"
            px={[0, 0, 6, 6, 6]}
            pb={12}
            fontWeight={300}
            lineHeight="2rem"
            color="primary.dark"
            mt="4"
          >
            <Heading fontSize="2xl" px={[0, 0, 6, 6, 6]} fontWeight="semibold" color="primary.dark" mt="4" textTransform="capitalize">
              A Healthcare Solution Delivered on Convenience
            </Heading>
            <Box
              fontSize="lg"
              px={[0, 0, 6, 6, 6]}
              pb={12}
              fontWeight={300}
              lineHeight="2rem"
              color="primary.dark"
              mt="4"
            >
              <Box>With modern enhancements to technology, more and more patients prefer easy access to healthcare services over in-person interactions with providers.</Box>
              <Box>Adding virtual care to your practice offers patients simple, on-demand care – without the usual wasted time and cost of most in-person visits.  Patients who live in remote locations, are homebound, or simply unable to take off time from work, can access your premium care virtually. Video conferencing, SMS messages, chat services, and online management systems connect more patients with providers than ever before.</Box>
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Flex direction="row" w="100%" mt="150">
        <Flex direction="column" flex="1">
          {data.map(({ heading, description, id }) => (
            <React.Fragment key={id}>
              <Heading fontSize="2xl" px={[0, 0, 6, 6, 6]} fontWeight="semibold" color="primary.dark" mt="4" textTransform="capitalize">
                {heading}
              </Heading>
              {description.map((item) => (
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
              ))}
            </React.Fragment>
          ))}
        </Flex>
        <Image src={HospitalLowerImage} flex="1" fit="contain" />
      </Flex>
    </Box>
  </div>
);

export default ClinicsSection;
