import React from "react";
import { Button, ButtonGroup, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const BenefitsOfDokto = () => {
  const buttons = [
    { content: "Patient" },
    { content: "Doctor" },
    { content: "Hospital" },
    { content: "Pharmacy" },
  ];

  return (
    <div>
      <SpacedContainer py="50">
        <Heading as="h2" fontSize="3xl" fontWeight="bold">Benefits of Dokto</Heading>
        <ButtonGroup d="flex" flexDir="row" mt="50" border="1px" borderRadius="lg" borderColor="blueviolet" isAttached>
          {buttons?.map(({ content }) => (
            <Button key={content} flex="1" py="7" textTransform="uppercase" bgColor="white" color="cyan.700">{content}</Button>
          ))}
        </ButtonGroup>
      </SpacedContainer>
    </div>
  );
};
export default BenefitsOfDokto;
