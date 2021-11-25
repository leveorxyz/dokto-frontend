import { Box } from "@chakra-ui/react";
import React from "react";

type IPartner={
title:string;
description:string
}
const parterlist:IPartner[] = [
  {
    title: "Dokto Global",
    description: "Global telemedicine platform",
  },
  {
    title: "Klik4Health (United States-residents)",
    description: "Care-At-Home service for US residents",
  },
  {
    title: "Fastmed of NJ",
    description: "Urgent care facilities for New Jersey residents",
  },
  {
    title: "American Hospital (Lagos-residents)",
    description: "Advanced medical facility offering highest standards of private healthcare to Lagos State residents.",
  },
  {
    title: "EMX (Global)",
    description: "Technology for transfer and exchange of clinical information between all medical platforms.",
  },
];

const Partners = () => (
  <Box flex="1" mb="4">
    {parterlist.map((partner) => (
      <Box key={partner.title} ml="2" mb="2">
        <Box fontSize="sm">{partner.title}</Box>
        <Box color="gray.500">{partner.description}</Box>
      </Box>
    ))}

  </Box>
);

export default Partners;
