import { useState } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

import NotImplemented from "../../../NotImplemented";
import PersonalDetails from "./steps/PersonalDetails";

const IdentificationVerification = NotImplemented;
const EducationProfile = NotImplemented;
const ProfessionalProfile = NotImplemented;
const PracticeLocation = NotImplemented;

export default function Form() {
  const steps = [
    { id: 1, title: "Personal Details" },
    { id: 2, title: "Identification Verification" },
    { id: 3, title: "Education Profile" },
    { id: 4, title: "Professional Profile" },
    { id: 5, title: "Practice Location" },
  ];

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <Breadcrumb spacing="8px" separator="">
        {steps.map((step) => (
          <BreadcrumbItem key={step.id}>
            <Box
              as={BreadcrumbLink}
              color={step.id <= currentStep ? "black" : "gray.500"}
              sx={{
                _hover: {
                  textDecoration: "none",
                },
              }}
              onClick={() => setCurrentStep((prev) => (prev > step.id ? step.id : prev))}
            >
              {step.title}
            </Box>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>

      <Box>
        {currentStep === 1 && <PersonalDetails />}
        {currentStep === 2 && <IdentificationVerification />}
        {currentStep === 3 && <EducationProfile />}
        {currentStep === 4 && <ProfessionalProfile />}
        {currentStep === 5 && <PracticeLocation />}
      </Box>
    </>
  );
}
