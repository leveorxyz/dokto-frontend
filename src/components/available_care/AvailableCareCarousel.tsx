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
      <Flex direction="column" alignItems="center" borderColor="#3DE0FF" bg="rgba(23, 0, 65, 0.03)" mb="100" rounded="2xl">
        <Box p={6} d="flex" flexDir="column" alignItems="center" borderColor="#3DE0FF">
          <Heading as="h2" fontWeight="bold" fontSize="3xl" color="#170041">Internal Medicine &amp; Specialist Services</Heading>
          <Divider w="80%" mb="12" />
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
                bgColor="#A42BAD"
                color="white"
                _hover={{ bgColor: "#A42BAD", color: "white" }}
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
                bgColor="#A42BAD"
                color="white"
                _hover={{ bgColor: "#A42BAD", color: "white" }}
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
