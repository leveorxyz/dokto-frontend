import { Flex } from "@chakra-ui/react";
import React from "react";
import { SpacedContainer } from "../common/Containers";
import DoctorSectionCard from "./DoctorSectionCard";
import DoctorSectionData from "./DoctorSectionData";

const DoctorSection = () => (
  <div>
    <SpacedContainer>
      <Flex direction="column" alignItems="center">
        {DoctorSectionData.map(({
          id, description,
        }) => (
          <DoctorSectionCard
            key={id}
            image="https://source.unsplash.com/collection/42413461/500x300"
            text={description}
          />
        ))}
      </Flex>
    </SpacedContainer>
  </div>
);

export default DoctorSection;
