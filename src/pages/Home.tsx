import { Box } from "@chakra-ui/react";

import LandingSearch from "../components/home/LandingSearch";
import OurServices from "../components/home/ServiceSection";
import HowItWorks from "../components/home/HowItWorksSection";
import OurDoctors from "../components/home/DoctorSection";
import DownloadDokto from "../components/home/DownloadDokto";
import BenefitsOfDokto from "../components/home/BenifitSections";
import TestimonialSection from "../components/home/TestimonialSection";
import Header from "../components/home/Header";

export default function Home() {
  return (
    <>
      <Box minHeight="90vh">
        <Header />
        <LandingSearch />
      </Box>
      <OurServices />
      <HowItWorks />
      <OurDoctors />
      <DownloadDokto />
      <BenefitsOfDokto />
      <TestimonialSection />
    </>
  );
}
