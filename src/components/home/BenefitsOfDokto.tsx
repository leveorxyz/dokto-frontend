import React from "react";
import {
  Heading, Tabs, TabList, TabPanels, Tab, TabPanel,
} from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";
import PatientSection from "./BenifitSections/PatientSection";
import DoctorSection from "./BenifitSections/DoctorSection";
import ClinicsSection from "./BenifitSections/ClinicsSection";
import PharmacySection from "./BenifitSections/PharmacySection";

const BenefitsOfDokto = () => {
  const tabs = [
    { title: "Patient" },
    { title: "Doctor" },
    { title: "Hospital" },
    { title: "Pharmacy" },
  ];

  return (
    <SpacedContainer py="50">
      <Heading as="h2" fontSize="3xl" fontWeight="bold" color="brand.dark">Benefits of Dokto</Heading>
      <Tabs my="20" variant="unstyled" isFitted>
        <TabList sx={{
          borderRadius: "1rem",
          border: "2px",
          borderColor: "brand.dark",
          overflow: "hidden",
        }}
        >
          {tabs?.map(({ title }, idx) => (
            <Tab
              key={title}
              py={[3, 3, 4, 8, 8]}
              textTransform="uppercase"
              bgColor="white"
              color="#0095C1"
              fontSize={["xs", "sm", "md", "lg", "lg"]}
              fontWeight="bold"
              borderRightWidth={idx === tabs.length - 1 ? "0" : "2px"}
              borderColor="brand.dark"
              _hover={{ bgColor: "brand.dark", color: "white" }}
              _selected={{ color: "white", bg: "brand.dark" }}
            >
              {title}
            </Tab>
          ))}
        </TabList>
        <br />

        <TabPanels>
          <TabPanel>
            <PatientSection />
          </TabPanel>
          <TabPanel>
            <DoctorSection />
          </TabPanel>
          <TabPanel>
            <ClinicsSection />
          </TabPanel>
          <TabPanel>
            <PharmacySection />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </SpacedContainer>
  );
};
export default BenefitsOfDokto;
