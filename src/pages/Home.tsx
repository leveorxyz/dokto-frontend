import React from "react";

import FeaturedDoctor from "src/components/home/FeaturedDoctor";
import LatestPostsDoctor from "src/components/home/LatestPostsDoctor";

export default function Home() {
	return (
		<>
			<FeaturedDoctor />
			<LatestPostsDoctor />
		</>
	);
}