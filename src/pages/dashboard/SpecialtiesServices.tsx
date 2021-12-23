import {
  Box,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { SpacedContainer } from "../../components/common/Containers";

import SpecialtiesSection from "../../components/profile/doctor/specialties_services/SpecialtiesSection";

const SpecialtiesServices = () => (
  <SpacedContainer py={10} mx={12}>
    <Box
      borderRadius="3xl"
      borderColor="brand.darkPink"
      boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
      filter="drop-shadow(15px 70px 90px rgba(164, 43, 173, 0.08))"
    >
      <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mb="5">Specialities &amp; Services</Heading>
      <Divider mb="5" />
      <SpecialtiesSection />
    </Box>
  </SpacedContainer>
);

export default SpecialtiesServices;
