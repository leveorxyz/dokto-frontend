import {
  Heading, Divider, Flex, Box, IconButton, Image, useBreakpointValue,
} from "@chakra-ui/react";
import Carousel, { CarouselSlideRenderControlProps as CarouselProps } from "nuka-carousel";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import { range } from "lodash";
import { SpacedContainer } from "../common/Containers";
import InternalMedicineScroll from "./InternalMedicineScroll";
import MedicineList from "./MedicineList.json";
import dotsSVG from "../../static/dots.svg";

const AvailableCareCarousel = () => {
  const numberOfCarouselComponents = useBreakpointValue({
    base: 1,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 3,
  });

  return (
    <Box as={SpacedContainer} position="relative">
      <Image
        src={dotsSVG}
        position="absolute"
        zIndex={1}
        top={[-12, -12, -4, -4, -4]}
        left={8}
      />
      <Image
        src={dotsSVG}
        position="absolute"
        zIndex={1}
        bottom={[12, 12, 20, 20, 20]}
        right={[-10, -10, -16, -16, -16]}
      />
      <Flex direction="column" alignItems="center" w="100%" borderColor="primary.light" bg="rgba(23, 0, 65, 0.03)" mb="100" rounded="2xl">
        <Box p={6} d="flex" flexDir="column" alignItems="center" borderColor="primary.light">
          <Heading as="h2" fontWeight="bold" fontSize="3xl" color="primary.dark">Internal Medicine &amp; Specialist Services</Heading>
          <Divider w="80%" mb="12" />
        </Box>
        <Box
          as={Carousel}
          pb={6}
          px={[3, 3, 8, 24, 24]}
          renderCenterLeftControls={
            ({ previousSlide }: CarouselProps) => (
              <IconButton
                aria-label="Previous slide"
                icon={<IoArrowBack />}
                onClick={previousSlide}
                rounded="full"
                bgColor="#A42BAD"
                color="white"
                _hover={{ bgColor: "#A42BAD" }}
                colorScheme="pink"
                sx={{
                  transform: ["none", "none", "translate(-50%, 0)", "translate(-50%, 0)"],
                }}
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
                colorScheme="pink"
                sx={{
                  transform: ["none", "none", "translate(50%, 0)", "translate(50%, 0)"],
                }}
              />
            )
          }
          sx={{
            ".paging-item": {
              padding: 1,
            },
            ".paging-item button": {
              fill: "rgba(26, 181, 135, 0.3) !important",
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
    </Box>
  );
};

export default AvailableCareCarousel;
