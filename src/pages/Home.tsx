import React from "react";

import FeaturedDoctor from "src/components/home/FeaturedDoctor";
import LatestPostsDoctor from "src/components/home/LatestPostsDoctor";
import AboutDoctor from "src/components/home/AboutDoctor";

export default function Home() {
	return (
		<>
			<AboutDoctor />
			<FeaturedDoctor />
			<LatestPostsDoctor />
		</>
	);
}