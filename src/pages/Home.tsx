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
import AvailableCareHeader from "../components/available_care/AvailableCareHeader";
import CareList from "../components/available_care/CareList";

export default function Home() {
  return (
    <>
      <Box minHeight="90vh">
        <LandingCarousel />
        <LandingSearch />
      </Box>
      <AvailableCareHeader />
      <CareList />
      <AboutDoctor />
      <SpecialityDoctor />
      <FeaturedDoctor />
      <DownloadDoctor />
      <LatestPostsDoctor />
      <FooterDoctor />
    </>
  );
}
