import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
	Pagination,
	Autoplay
} from "swiper";

import { SpacedContainer } from "../common/Containers";

SwiperCore.use([Pagination, Autoplay]);

type carouselDataType = {
	title: string;
	imgSrc: string;
}

const data: carouselDataType[] = [
	{ title: "Personal care for healthy living", imgSrc: "https://placeholder.pics/svg/600x400"},
	{ title: "Lorem ipsum dolor sit amet", imgSrc: "https://placeholder.pics/svg/600x400"},
	{ title: "Lorem ipsum dolor sit amet", imgSrc: "https://placeholder.pics/svg/600x400"},
];

export default function LandingCarousel() {
	return (
		<SpacedContainer>
			<Box as={Swiper} overflow="hidden" pagination loop grabCursor autoplay>
				{data
					.map(({title, imgSrc}: carouselDataType, index: number) => (
						<SwiperSlide key={index}>
							<Flex
								direction={["column", "column", "row", "row"]}
								justify={["center", "center", "space-between", "space-between"]}
								align="center"
								minHeight="65vh"
							>
								<Box
									fontSize={["5xl", "5xl", "5xl", "6xl"]}
									width={["100%", "100%", "50%", "45%"]}
									fontWeight={900}
								>
									{title}
								</Box>
								<Image src={imgSrc} />
							</Flex>
						</SwiperSlide>
					))}
			</Box>
		</SpacedContainer>
	);
}