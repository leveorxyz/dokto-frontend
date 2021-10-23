import React from "react";
import FooterDoctor from "../components/home/FooterDoctor";
import AvailableCareHeader from "../components/available_care/AvailableCareHeader";
import CareList from "../components/available_care/CareList";
import QualityCare from "../components/available_care/QualityCare";
import AvailableCareCarousel from "../components/available_care/AvailableCareCarousel";

const AvailableCare = () => (
  <>
    <AvailableCareHeader />
    <CareList />
    <AvailableCareCarousel />
    <QualityCare />
    <FooterDoctor />
  </>
);

export default AvailableCare;
