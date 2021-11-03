import {
  Heading, Divider, Flex, Box, IconButton, Image, useBreakpointValue,
} from "@chakra-ui/react";
import Carousel, { CarouselSlideRenderControlProps as CarouselProps } from "nuka-carousel";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import { SpacedContainer } from "../common/Containers";
import InternalMedicineCard from "./InternalMedicineCard";
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
        <Box p={6} py={12} d="flex" flexDir="column" alignItems="center" borderColor="primary.light" position="relative">
          <Box
            position="absolute"
            top={0}
            left="25%"
            transform="translate(-50%, -10%)"
            w="2rem"
            h="2rem"
            bg="primary.light"
            rounded="full"
            display={["none", "none", "block", "block"]}
          />
          <Heading as="h2" fontWeight="bold" fontSize="3xl" color="primary.dark">Internal Medicine &amp; Specialist Services</Heading>
          <Divider
            w="80%"
            mt={3}
            sx={{
              borderBottomWidth: 3,
            }}
          />
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
              fill: "rgba(26, 181, 135, 0.7) !important",
            },
            ".paging-item.active button": {
              fill: "#170041 !important",
            },
          }}
          heightMode="max"
          cellSpacing={48}
          slidesToShow={numberOfCarouselComponents}
          wrapAround
          autoplay
          enableKeyboardControls
        >
          {
            MedicineList
              .map(({
                id, title, data,
              }) => (
                <InternalMedicineCard
                  key={id}
                  title={title}
                  data={data}
                />
              ))
          }
        </Box>
      </Flex>
    </Box>
  );
};

export default AvailableCareCarousel;
