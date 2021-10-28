import { useState } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

import NotImplemented from "../../../NotImplemented";
import Step1 from "./steps/Step1";

const Step2 = NotImplemented;
const Step3 = NotImplemented;
const Step4 = NotImplemented;
const Step5 = NotImplemented;

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
        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        {currentStep === 3 && <Step3 />}
        {currentStep === 4 && <Step4 />}
        {currentStep === 5 && <Step5 />}
      </Box>
    </>
  );
}
