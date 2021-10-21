import {
  Heading, Divider, Flex,
} from "@chakra-ui/react";
import React from "react";
import Carousel from "nuka-carousel";

import { SpacedContainer } from "../common/Containers";
import InternalMedicineScroll from "./InternalMedicineScroll";
import MedicineList from "./MedicineList";

const AvailableCareCarousel = () => (
  <div>
    <SpacedContainer>
      <Flex direction="column" alignItems="center" borderColor="cyan.500" bg="gray.100" p="6" mb="100">
        <Heading as="h2" fontWeight="bold" fontSize="2xl">Internal Medicine &amp; Specialist Services</Heading>
        <Divider w="33%" mb="12" />
        <Carousel wrapAround>
          <InternalMedicineScroll listData={MedicineList.slice(0, 3)} />
          <InternalMedicineScroll listData={MedicineList.slice(3, 6)} />
          <InternalMedicineScroll listData={MedicineList.slice(6, 9)} />
          <InternalMedicineScroll listData={MedicineList.slice(9, MedicineList.length)} />
        </Carousel>
      </Flex>
    </SpacedContainer>
  </div>
);
export default AvailableCareCarousel;
