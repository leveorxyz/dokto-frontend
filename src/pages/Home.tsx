import React from "react";
import { Box } from "@chakra-ui/react";

import FeaturedDoctor from "../components/home/FeaturedDoctor";
import LatestPostsDoctor from "../components/home/LatestPostsDoctor";
import AboutDoctor from "../components/home/AboutDoctor";
import SpecialityDoctor from "../components/home/SpecialityDoctor";
import DownloadDoctor from "../components/home/DownloadDoctor";
import FooterDoctor from "../components/home/FooterDoctor";
import LandingCarousel from "../components/home/LandingCarousel";
import LandingSearch from "../components/home/LandingSearch";
import OurServices from "../components/home_v2/OurServices";
import HowItWorks from "../components/home_v2/HowItWorks";
import OurDoctors from "../components/home_v2/OurDoctors";
import DownloadDokto from "../components/home_v2/DownloadDokto";
import BenefitsOfDokto from "../components/home_v2/BenefitsOfDokto";
import PatientSection from "../components/home_v2/PatientSection";
import DoctorSection from "../components/home_v2/DoctorSection";

export default function Home() {
  return (
    <>
      <Box minHeight="90vh">
        <LandingCarousel />
        <LandingSearch />
      </Box>
      <OurServices />
      <HowItWorks />
      <OurDoctors />
      <DownloadDokto />
      <BenefitsOfDokto />
      <PatientSection />
      <DoctorSection />
      <AboutDoctor />
      <SpecialityDoctor />
      <FeaturedDoctor />
      <DownloadDoctor />
      <LatestPostsDoctor />
      <FooterDoctor />
    </>
  );
}
