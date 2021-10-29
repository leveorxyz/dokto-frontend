import {
  Heading, Divider, Flex, Box, IconButton, useBreakpointValue,
} from "@chakra-ui/react";
import Carousel, { CarouselSlideRenderControlProps as CarouselProps } from "nuka-carousel";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import { range } from "lodash";
import { SpacedContainer } from "../common/Containers";
import TestimonialList from "./TestimonialList";
import testimonialData from "./TestimonialData.json";

const TestimonialCarousel = () => {
  const numberOfCarouselComponents = useBreakpointValue({
    base: 1,
    sm: 1,
    md: 2,
    lg: 2,
    xl: 2,
  });

  return (
    <SpacedContainer>
      <Flex direction="column" alignItems="center" bg="rgba(23, 0, 65, 0.1)" mb="100" px={4} rounded="2xl">
        <Box pt={6} d="flex" flexDir="column" alignItems="center" borderColor="#170041" mb="12">
          <Heading as="h2" fontWeight="bold" fontSize="4xl" color="#333333">Patient testimonials</Heading>
          <Divider w="20%" h="10px" />
        </Box>
        <Box
          as={Carousel}
          px={[6, 6, 12, 24, 24]}
          renderCenterLeftControls={
            ({ previousSlide }: CarouselProps) => (
              <IconButton
                aria-label="Previous slide"
                icon={<IoArrowBack />}
                onClick={previousSlide}
                rounded="full"
                bgColor="brand.darkPink"
                color="white"
                fontSize="1.2rem"
              />
            )
          }
          renderCenterRightControls={
            ({ nextSlide }: CarouselProps) => (
              <IconButton
                aria-label="Next slide"
                icon={<IoArrowForward />}
                onClick={nextSlide}
                rounded="full"
                bgColor="brand.darkPink"
                color="white"
                fontSize="1.2rem"
              />
            )
          }
          sx={{
            ".paging-item": {
              padding: 1,
            },
            ".paging-item button": {
              fill: "rgba(26, 181, 135, 0.7) !important",
            },
            ".paging-item.active button": {
              fill: "#170041 !important",
            },
          }}
          wrapAround
          autoplay
          enableKeyboardControls
        >
          {
            range(0, testimonialData.length, numberOfCarouselComponents)
              .map((i) => (
                <TestimonialList
                  key={i}
                  listData={
                    testimonialData.slice(i, i + (numberOfCarouselComponents as number) ?? 0)
                  }
                />
              ))
          }
        </Box>
      </Flex>
    </SpacedContainer>
  );
};

export default TestimonialCarousel;
