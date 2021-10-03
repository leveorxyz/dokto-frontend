import React from "react";
import { Box } from "@chakra-ui/layout";

import FeaturedDoctor from "src/components/home/FeaturedDoctor";
import LatestPostsDoctor from "src/components/home/LatestPostsDoctor";
import AboutDoctor from "src/components/home/AboutDoctor";
import SpecialityDoctor from "src/components/home/SpecialityDoctor";
import DownloadDoctor from "src/components/home/DownloadDoctor";
import FooterDoctor from "src/components/home/FooterDoctor";
import LandingCarousel from "src/components/home/LandingCarousel";

export default function Home() {
	return (
		<>
			<Box minHeight="90vh">
				<LandingCarousel />
			</Box>
			<AboutDoctor />
			<SpecialityDoctor />
			<FeaturedDoctor />
			<DownloadDoctor />
			<LatestPostsDoctor />
			<FooterDoctor />
		</>
	);
}
