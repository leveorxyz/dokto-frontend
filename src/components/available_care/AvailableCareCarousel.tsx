import {
  Heading, Divider, Flex, Box, IconButton, useBreakpointValue,
} from "@chakra-ui/react";
import Carousel, { CarouselSlideRenderControlProps as CarouselProps } from "nuka-carousel";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import { range } from "lodash";
import { SpacedContainer } from "../common/Containers";
import InternalMedicineScroll from "./InternalMedicineScroll";
import MedicineList from "./MedicineList.json";

const AvailableCareCarousel = () => {
  const numberOfCarouselComponents = useBreakpointValue({
    base: 1,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 3,
  });

  return (
    <SpacedContainer>
      <Flex direction="column" alignItems="center" borderColor="cyan.500" bg="gray.100" mb="100" rounded="2xl">
        <Box p={6}>
          <Heading as="h2" fontWeight="bold" fontSize="4xl">Internal Medicine &amp; Specialist Services</Heading>
          <Divider w="33%" mb="12" />
        </Box>
        <Box
          as={Carousel}
          p={6}
          renderCenterLeftControls={
            ({ previousSlide }: CarouselProps) => (
              <IconButton
                aria-label="Previous slide"
                icon={<IoArrowBack />}
                onClick={previousSlide}
                rounded="full"
                colorScheme="pink"
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
              />
            )
          }
          wrapAround
          autoplay
          enableKeyboardControls
        >
          {
            range(0, MedicineList.length, numberOfCarouselComponents)
              .map((i) => (
                <InternalMedicineScroll
                  key={i}
                  listData={MedicineList.slice(i, i + (numberOfCarouselComponents as number) ?? 0)}
                />
              ))
          }
        </Box>
      </Flex>
    </SpacedContainer>
  );
};

export default AvailableCareCarousel;
