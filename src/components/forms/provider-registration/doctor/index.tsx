import { useMemo } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { RecoilState, useRecoilState } from "recoil";

import {
  currentStepAtom, stepAtom,
} from "./atoms";
import Submit from "./steps/Submit";
import FormStep from "../../common/FormStep";
import {
  step1Data, step2Data, step3Data, step4Data,
} from "./steps";
import { FormDataType } from "../../types/form";

type CommonStepType = {
  id: number;
  title: string;
  submitButtonText: string;
};

type FormStepType = {
  isFormStep: true;
  data: (watch: any) => FormDataType;
  atom: RecoilState<any>;
} & CommonStepType;

type SubmitStepType = {
  isFormStep: false;
  component: React.ReactNode;
} & CommonStepType;

type StepTypes = FormStepType | SubmitStepType

const getStepsData = (): StepTypes[] => (
  [
    {
      id: 1,
      title: "Personal Details",
      data: step4Data,
      isFormStep: true,
      atom: stepAtom,
      submitButtonText: "Next",
    },
    {
      id: 2,
      title: "Identification Verification",
      data: step2Data,
      isFormStep: true,
      atom: stepAtom,
      submitButtonText: "Next",
    },
    {
      id: 3,
      title: "Education & Specialties",
      data: step3Data,
      isFormStep: true,
      atom: stepAtom,
      submitButtonText: "Next",
    },
    {
      id: 4,
      title: "Professional Profile",
      data: step1Data,
      isFormStep: true,
      atom: stepAtom,
      submitButtonText: "Submit",
    },
    {
      id: 5,
      title: "Confirmation",
      component: <Submit />,
      isFormStep: false,
      submitButtonText: "Submit",
    },
  ]
);

export default function Form() {
  const steps = getStepsData();
  const [currentStep, setCurrentStep] = useRecoilState(currentStepAtom);

  const CurrentStep = useMemo(
    () => {
      if (steps[currentStep - 1].isFormStep) {
        const step = steps[currentStep - 1] as FormStepType;
        return (
          <FormStep
            formData={step.data}
            stepDataAtom={step.atom}
            currentStepAtom={currentStepAtom}
            submitButtonText={step.submitButtonText}
          />
        );
      }
      return (steps[currentStep - 1] as SubmitStepType).component;
    },
    [currentStep, steps],
  );

  return (
    <>
      <Breadcrumb
        spacing="8px"
        separator=""
        sx={{
          ".chakra-breadcrumb__list": {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            w: "100%",
          },
        }}
      >
        {steps
          .filter((step) => step.isFormStep)
          .map((step) => (
            <BreadcrumbItem key={step.id}>
              <Box
                as={BreadcrumbLink}
                display="flex"
                alignItems="center"
                color={step.id <= currentStep ? "black" : "gray.500"}
                sx={{
                  py: "12",
                  _hover: {
                    textDecoration: "none",
                    cursor: step.id <= currentStep ? "pointer" : "default",
                  },
                }}
                onClick={() => setCurrentStep((prev) => (prev > step.id ? step.id : prev))}
              >
                <Box
                  display="inline-block flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                  rounded="full"
                  bg={step.id <= currentStep ? "brand.darkPink" : "gray.300"}
                  color="white"
                  fontSize="sm"
                  w="2rem"
                  h="2rem"
                  textAlign="center"
                  mr={2}
                >
                  {step.id}
                </Box>
                <span>{step.title}</span>
              </Box>
            </BreadcrumbItem>
          ))}
      </Breadcrumb>

      <Box>
        {CurrentStep}
      </Box>
    </>
  );
}
