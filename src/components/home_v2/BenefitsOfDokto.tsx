import React from "react";
import { Button, ButtonGroup, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const BenefitsOfDokto = () => (
  <div>
    <SpacedContainer py="50">
      <Heading as="h2" fontSize="3xl" fontWeight="bold">Benefits of Dokto</Heading>
      <ButtonGroup d="flex" flexDir="row" mt="50" border="1px" borderRadius="lg" borderColor="blueviolet" isAttached>
        <Button flex="1" py="7" textTransform="uppercase" bgColor="white" color="cyan.700">Patient</Button>
        <Button flex="1" py="7" textTransform="uppercase" bgColor="white" color="cyan.700">Doctor</Button>
        <Button flex="1" py="7" textTransform="uppercase" bgColor="white" color="cyan.700">Hospital</Button>
        <Button flex="1" py="7" textTransform="uppercase" bgColor="white" color="cyan.700">Pharmacy</Button>
      </ButtonGroup>
    </SpacedContainer>
  </div>
);

export default BenefitsOfDokto;
