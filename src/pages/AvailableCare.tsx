import React from "react";
import { Box } from "@chakra-ui/react";
import FooterDoctor from "../components/home/FooterDoctor";
import AvailableCareHeader from "../components/available_care/AvailableCareHeader";
import CareList from "../components/available_care/CareList";
import QualityCare from "../components/available_care/QualityCare";
import AvailableCareCarousel from "../components/available_care/AvailableCareCarousel";

const AvailableCare = () => (
  <>
    <AvailableCareHeader />
    <CareList />
    <Box minHeight="90vh">
      <AvailableCareCarousel />
    </Box>
    <QualityCare />
    <FooterDoctor />
  </>
);

export default AvailableCare;
