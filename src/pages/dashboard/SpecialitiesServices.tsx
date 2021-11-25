import React from "react";
import {
  Heading, Box,
  Divider,
} from "@chakra-ui/react";
import { SpacedContainer } from "../../components/common/Containers";

import SpecialitiesSection from "../../components/profile/doctor/specialities_services/SpecialitiesSection";
import doctorProfileAtom from "../../atoms/doctorProfile";
import useProfile from "../../hooks/profile/useProfile";
import LoadingPage from "../../components/common/fallback/LoadingPage";

const SpecialitiesServices = () => {
  const { isLoading } = useProfile("doctor", doctorProfileAtom);

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <SpacedContainer py={20}>
      <Box
        d="flex"
        flexDir="column"
        borderRadius="3xl"
        borderColor="brand.darkPink"
        boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
        filter="drop-shadow(15px 70px 90px rgba(164, 43, 173, 0.08))"
      >
        <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mb="5">Specialities &amp; Services</Heading>
        <Divider mb="5" />
        <SpecialitiesSection />
      </Box>
    </SpacedContainer>
  );
};

export default SpecialitiesServices;
