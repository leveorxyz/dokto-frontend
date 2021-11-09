import { Box } from "@chakra-ui/react";

import LandingSearch from "../components/home/LandingSearch";
import OurServices from "../components/home/OurServices";
import HowItWorks from "../components/home/HowItWorks";
import OurDoctors from "../components/home/OurDoctors";
import DownloadDokto from "../components/home/DownloadDokto";
import BenefitsOfDokto from "../components/home/BenefitsOfDokto";
import TestimonialCarousel from "../components/home/TestimonialCarousel";
import HeaderDokto from "../components/home/HeaderDokto";
import DashboardHome from "../components/dashboard/DashboardHome";

export default function Home() {
  return (
    <>
      <Box minHeight="90vh">
        <HeaderDokto />
        <LandingSearch />
      </Box>
      <OurServices />
      <HowItWorks />
      <OurDoctors />
      <DownloadDokto />
      <BenefitsOfDokto />
      <TestimonialCarousel />
      <DashboardHome />
    </>
  );
}
