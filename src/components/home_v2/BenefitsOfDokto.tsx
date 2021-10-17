import React from "react";
import {
  Heading, Tabs, TabList, TabPanels, Tab, TabPanel,
} from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";
import PatientSection from "./PatientSection";
import DoctorSection from "./DoctorSection";

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
        <Tabs my="20" isFitted>
          <TabList>
            {buttons?.map(({ content }) => (
              <Tab key={content} py="7" textTransform="uppercase" bgColor="white" color="cyan.700" _hover={{ bgColor: "#0a001a", color: "white" }}>{content}</Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel>
              <PatientSection />
            </TabPanel>
            <TabPanel>
              <DoctorSection />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </SpacedContainer>
    </div>
  );
};
export default BenefitsOfDokto;
