import { useMemo } from "react";
import { Box } from "@chakra-ui/react";
import { RecoilState, useRecoilValue } from "recoil";
import hospitalAtom from "../../../../atoms/hospitalProfile";
import { currentStepAtom } from "../../../../atoms/profileDetails.atom";

import FormStep from "../../common/FormStep";
import {
  hospitalDetailsData,
} from "./hospital-details";
import { FormDataType } from "../../types/form";
import Submit from "./hospital-details/Submit";

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
      data: hospitalDetailsData,
      isFormStep: true,
      atom: hospitalAtom,
      submitButtonText: "Save & Update",
    },
    {
      id: 2,
      title: "Confirmation",
      component: <Submit />,
      isFormStep: false,
      submitButtonText: "Save & Update",
    },
  ]
);

export default function Form() {
  const steps = getStepsData();
  const currentStep = useRecoilValue(currentStepAtom);

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
    <Box mt={3}>
      {CurrentStep}
    </Box>
  );
}
