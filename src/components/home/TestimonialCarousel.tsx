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
      <Flex direction="column" alignItems="center" borderColor="cyan.500" bg="gray.100" mb="100" px={4} rounded="2xl">
        <Box pt={6}>
          <Heading as="h2" fontWeight="bold" fontSize="4xl">Patient testimonials</Heading>
          <Divider w="33%" mb="12" />
        </Box>
        <Box
          as={Carousel}
          px={[6, 6, 12, 24, 36]}
          renderCenterLeftControls={
            ({ previousSlide }: CarouselProps) => (
              <IconButton
                aria-label="Previous slide"
                icon={<IoArrowBack />}
                onClick={previousSlide}
                rounded="full"
                colorScheme="pink"
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
                colorScheme="pink"
                fontSize="1.2rem"
              />
            )
          }
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
