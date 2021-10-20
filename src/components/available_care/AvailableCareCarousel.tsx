import {
  Box, Heading, Divider, Flex,
} from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Autoplay,
} from "swiper";

import { SpacedContainer } from "../common/Containers";
import InternalMedicineScroll from "./InternalMedicineScroll";

SwiperCore.use([Pagination, Autoplay]);

const AvailableCareCarousel = () => (
  <div>
    <SpacedContainer>
      <Flex direction="column" alignItems="center" borderColor="cyan.500" bg="gray.100" p="6" mb="100">
        <Heading as="h2" fontWeight="bold" fontSize="2xl">Internal Medicine &amp; Specialist Services</Heading>
        <Divider w="33%" />
        <Box as={Swiper} overflow="hidden" maxW="100%" p="10" pagination loop grabCursor autoplay>
          <SwiperSlide>
            <InternalMedicineScroll />
          </SwiperSlide>
          <SwiperSlide>
            <InternalMedicineScroll />
          </SwiperSlide>
          <SwiperSlide>
            <InternalMedicineScroll />
          </SwiperSlide>
          <SwiperSlide>
            <InternalMedicineScroll />
          </SwiperSlide>
        </Box>
      </Flex>
    </SpacedContainer>
  </div>
);

export default AvailableCareCarousel;
