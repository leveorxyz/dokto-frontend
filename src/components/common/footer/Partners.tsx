import { Box } from "@chakra-ui/react";
import React from "react";

type IPartner={
title:string;
description:string
}
const partnerList:IPartner[] = [
  {
    title: "Dokto Global",
    description: "Global telemedicine platform",
  },
  {
    title: "Klik4Health",
    description: "Care-At-Home service for US residents",
  },
  {
    title: "Fastmed of NJ",
    description: "Urgent care facilities for New Jersey residents",
  },
  {
    title: "American Hospital",
    description: "Advanced medical facility offering highest standards of private healthcare to Lagos State residents.",
  },
  {
    title: "EMX Global",
    description: "Technology for transfer and exchange of clinical information between all medical platforms.",
  },
];

const Partners = () => (
  <Box flex="1" mb="4">
    {partnerList.map((partner, idx) => (
      <Box key={partner.title} ml="2" mb="2">
        <Box>
          <Box as="span" color="primary.light" fontWeight="bold" mr={2}>
            {`${idx + 1}.`}
          </Box>
          <Box as="span">{partner.title}</Box>
        </Box>
        <Box fontSize="sm" color="gray.500">{partner.description}</Box>
      </Box>
    ))}

  </Box>
);

export default Partners;
