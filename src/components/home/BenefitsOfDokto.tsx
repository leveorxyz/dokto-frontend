import React from "react";
import {
  Heading, Tabs, TabList, TabPanels, Tab, TabPanel,
} from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";
import PatientSection from "./PatientSection";
import DoctorSection from "./DoctorSection";
import HospitalSection from "./HospitalSection";
import PharmacySection from "./PharmacySection";

const BenefitsOfDokto = () => {
  const tabs = [
    { title: "Patient" },
    { title: "Doctor" },
    { title: "Hospital" },
    { title: "Pharmacy" },
  ];

  return (
    <SpacedContainer py="50">
      <Heading as="h2" fontSize="3xl" fontWeight="bold" color="#170041">Benefits of Dokto</Heading>
      <Tabs my="20" variant="unstyled" isFitted>
        <TabList sx={{
          borderRadius: "1rem",
          border: "2px",
          borderColor: "#0a001a",
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
              borderColor="#170041"
              _hover={{ bgColor: "#170041", color: "white" }}
              _selected={{ color: "white", bg: "#170041" }}
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
            <HospitalSection />
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
