import React from "react";
import { Button, ButtonGroup, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const BenefitsOfDokto = () => (
  <div>
    <SpacedContainer py="50">
      <Heading as="h2" fontSize="3xl" fontWeight="bold">Benefits of Dokto</Heading>
      <ButtonGroup d="flex" flexDir="row" mt="50" isAttached>
        <Button flex="1">Patient</Button>
        <Button flex="1">Doctor</Button>
        <Button flex="1">Hospital</Button>
        <Button flex="1">Pharmacy</Button>
      </ButtonGroup>
    </SpacedContainer>
  </div>
);

export default BenefitsOfDokto;
