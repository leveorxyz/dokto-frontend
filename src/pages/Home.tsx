import React from "react";

import FeaturedDoctor from "src/components/home/FeaturedDoctor";
import LatestPostsDoctor from "src/components/home/LatestPostsDoctor";
import AboutDoctor from "src/components/home/AboutDoctor";
import SpecialityDoctor from "src/components/home/SpecialityDoctor";
import DownloadDoctor from "src/components/home/DownloadDoctor";
import FooterDoctor from "src/components/home/FooterDoctor";

export default function Home() {
	return (
		<>
			<AboutDoctor />
			<SpecialityDoctor />
			<FeaturedDoctor />
			<DownloadDoctor />
			<LatestPostsDoctor />
			<FooterDoctor />
		</>
	);
}
