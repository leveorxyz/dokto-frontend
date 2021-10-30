import { useMemo } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import { currentStepAtom } from "./atoms";
import NotImplemented from "../../../NotImplemented";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step5 from "./steps/Step5";

const Step4 = NotImplemented;

const getStepsData = () => (
  [
    {
      id: 1,
      title: "Personal Details",
      component: Step1,
      showInSteps: true,
    },
    {
      id: 2,
      title: "Identification Verification",
      component: Step2,
      showInSteps: true,
    },
    {
      id: 3,
      title: "Education Profile",
      component: Step3,
      showInSteps: true,
    },
    {
      id: 4,
      title: "Professional Profile",
      component: Step4,
      showInSteps: true,
    },
    {
      id: 5,
      title: "Practice Location",
      component: Step5,
      showInSteps: true,
    },
    {
      id: 6,
      title: "Confirmation",
      component: NotImplemented,
      showInSteps: false,
    },
  ]
);

export default function Form() {
  const steps = getStepsData();
  const [currentStep, setCurrentStep] = useRecoilState(currentStepAtom);
  const CurrentStep = useMemo(() => steps[currentStep - 1].component, [currentStep, steps]);

  return (
    <>
      <Breadcrumb spacing="8px" separator="">
        {steps
          .filter((step) => step.showInSteps)
          .map((step) => (
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
        <CurrentStep />
      </Box>
    </>
  );
}
