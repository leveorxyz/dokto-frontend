import React from "react";
import FooterDoctor from "../components/home/FooterDoctor";
import AvailableCareHeader from "../components/available_care/AvailableCareHeader";
import CareList from "../components/available_care/CareList";
import QualityCare from "../components/available_care/QualityCare";

const AvailableCare = () => (
  <>
    <AvailableCareHeader />
    <CareList />
    <QualityCare />
    <FooterDoctor />
  </>
);

export default AvailableCare;
