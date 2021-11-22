/* eslint-disable max-len */
import { Box, Flex, Image } from "@chakra-ui/react";
import Medicine from "../../../static/Medicine.png";
import Telehealth from "../../../static/Telehealth.png";

export default function PharmacySection() {
  const listData = [
    "For our pharmacies, our telehealth solution can help to enhance patient relationships and maintain customer loyalty while simultaneously improving care and extending patient services. As a pharmacy, you can offer proactive care with your customers, who will delight convenient, immediate access and high-quality urgent care services from a trusted source.",
    "The world is busier than ever, leading pharmacists to inevitably volume and efficiency. With Dokto, you can achieve both without compromising on delivering personal care.",
    "Our platform is smart, efficient and cost-saving, providing the technology to expand healthcare outside the walls of a retail pharmacy while complementing and enhancing existing retail pharmacy services and experience.",
  ];
  return (
    <Box mb="50" d="flex" flexDir="column">
      <Flex direction="row" alignItems="center">
        <Box
          fontSize="lg"
          px={[0, 0, 6, 6, 6]}
          pb={12}
          fontWeight={300}
          lineHeight="2rem"
          color="primary.dark"
          mt="4"
          flex="1"
        >
          For our pharmacies, our telehealth solution can help to enhance patient relationships and maintain customer loyalty while simultaneously improving care and extending patient services. As a pharmacy, you can offer proactive care with your customers, who will delight convenient, immediate access and high-quality urgent care services from a trusted source.

        </Box>
        <Image src={Telehealth} flex="1" fit="contain" />
      </Flex>
      <Flex direction="row" w="100%" mt="150" alignItems="center">
        <Image src={Medicine} flex="1" fit="contain" />
        <Flex direction="column" flex="1">
          {listData
            .map((data) => (
              <Box
                key={data}
                fontSize="lg"
                px={[0, 0, 6, 6, 6]}
                pb={12}
                fontWeight={300}
                lineHeight="2rem"
                color="primary.dark"
                mt="4"
              >
                {data}

              </Box>
            ))}
        </Flex>
      </Flex>
    </Box>
  );
}
