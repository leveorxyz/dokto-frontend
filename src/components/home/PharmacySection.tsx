/* eslint-disable max-len */
import { Box } from "@chakra-ui/react";

export default function PharmacySection() {
  const listData = [
    "For our pharmacies, our telehealth solution can help to enhance patient relationships and maintain customer loyalty while simultaneously improving care and extending patient services. As a pharmacy, you can offer proactive care with your customers, who will delight convenient, immediate access and high-quality urgent care services from a trusted source.",
    "The world is busier than ever, leading pharmacists to inevitably volume and efficiency. With Dokto, you can achieve both without compromising on delivering personal care.",
    "Our platform is smart, efficient and cost-saving, providing the technology to expand healthcare outside the walls of a retail pharmacy while complementing and enhancing existing retail pharmacy services and experience.",
  ];
  return (
    <Box mb="50">
      {listData
        .map((data) => (
          <Box key={data} fontSize="xl" px={[0, 0, 6, 6, 6]} fontWeight="semibold" color="brand.dark" mt="4">{data}</Box>
        ))}
    </Box>
  );
}
