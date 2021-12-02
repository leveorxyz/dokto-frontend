import { useMemo } from "react";
import {
  Box,

} from "@chakra-ui/react";
import { RecoilState, useRecoilState } from "recoil";

import {
  currentStepAtom, stepAtom,
} from "./atoms";
import Submit from "./steps/Submit";
import FormStep from "../../common/FormStep";

import { FormDataType } from "../../types/form";
import { step1Data } from "./steps/step1_data";

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
      data: step1Data,
      isFormStep: true,
      atom: stepAtom,
      submitButtonText: "Submit",
    },

    {
      id: 2,
      title: "Confirmation",
      component: <Submit />,
      isFormStep: false,
      submitButtonText: "Submit",
    },
  ]
);

export default function Form() {
  const steps = getStepsData();
  const [currentStep] = useRecoilState(currentStepAtom);

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
      <Box>
        {CurrentStep}
      </Box>
    </>
  );
}
