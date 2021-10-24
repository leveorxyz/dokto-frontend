import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import DoctorSectionCard from "./DoctorSectionCard";
import DoctorSectionData from "./DoctorSectionData";

const DoctorSection = () => (
  <Box>
    <Flex direction="column" alignItems="center">
      {DoctorSectionData.map(({
        id, description, image,
      }) => (
        <DoctorSectionCard
          key={id}
          image={image}
          text={description}
        />
      ))}
    </Flex>
  </Box>
);

export default DoctorSection;
