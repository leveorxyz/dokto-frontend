import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Autoplay,
} from "swiper";

import { SpacedContainer } from "../common/Containers";

SwiperCore.use([Pagination, Autoplay]);

export default function LandingCarousel() {
  type carouselDataType = {
  title: string;
  imgSrc: string;
}

  const data: carouselDataType[] = [
    { title: "Personal care for healthy living", imgSrc: "https://source.unsplash.com/collection/42413461/500x300" },
    { title: "Lorem ipsum dolor sit amet", imgSrc: "https://source.unsplash.com/collection/42413461/500x300" },
    { title: "Lorem ipsum dolor sit amet", imgSrc: "https://source.unsplash.com/collection/42413461/500x300" },
  ];

  return (
    <SpacedContainer>
      <Box as={Swiper} overflow="hidden" pagination loop grabCursor autoplay>
        {data
          .map(({ title, imgSrc }: carouselDataType) => (
            <SwiperSlide key={title}>
              <Flex
                direction={["column", "column", "row", "row"]}
                justify={["center", "center", "space-between", "space-between"]}
                align="center"
                height={["60vh", "65vh", "65vh", "65vh"]}
              >
                <Box
                  fontSize={["5xl", "5xl", "5xl", "6xl"]}
                  minWidth={["100%", "100%", "50%", "45%"]}
                  fontWeight={900}
                >
                  {title}
                </Box>
                <Image src={imgSrc} height="80%" fit="contain" overflow="hidden" />
              </Flex>
            </SwiperSlide>
          ))}
      </Box>
    </SpacedContainer>
  );
}
