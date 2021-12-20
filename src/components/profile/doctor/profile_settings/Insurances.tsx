import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import InsurancesForm from "../../../forms/doctor-profile-settings/insurances";

const Insurances = () => (
  <Box>
    <Heading as="h2" fontWeight="600" fontSize="2xl" color="brand.dark">Insurances</Heading>
    <InsurancesForm />
  </Box>
);

export default Insurances;
