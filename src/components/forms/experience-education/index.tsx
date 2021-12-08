import { useMemo } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
} from "@chakra-ui/react";
import { RecoilState, useRecoilState } from "recoil";
import MessagePage from "../../common/fallback/MessagePage";
import Loading from "../../common/fallback/LoadingPage";
import stepAtom, { currentStepAtom } from "../../../atoms/educationExperience.atom";
import useEducationExperience from "../../../hooks/profile-settings/useEducationExperience";

import FormStep from "../common/FormStep";
import {
  step1Data,
} from "./steps";
import { FormDataType } from "../types/form";
import Submit from "./steps/Submit";

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
      title: "Education & Experience",
      data: step1Data,
      isFormStep: true,
      atom: stepAtom,
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
  const {
    error, isError, isSuccess, isFetching,
  } = useEducationExperience();

  const steps = getStepsData();
  const [currentStep, setCurrentStep] = useRecoilState(currentStepAtom);

  const CurrentStep = useMemo(
    () => {
      if (!isSuccess) {
        return <Loading />;
      }
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
    [currentStep, steps, isSuccess],
  );

  if (isFetching) {
    return <Loading />;
  }

  if (isError) {
    return <MessagePage status="error" title="Oops!" message={(error as any).message} />;
  }
  if (isSuccess) {
    return (
      <>
        <Breadcrumb>
          {steps
            .filter((step) => step.isFormStep)
            .map((step) => (
              <BreadcrumbItem key={step.id}>
                <Box
                  onClick={() => setCurrentStep((prev) => (prev > step.id ? step.id : prev))}
                />
              </BreadcrumbItem>
            ))}
        </Breadcrumb>

        <Box>
          {CurrentStep}
        </Box>
      </>
    );
  }

  return <></>;
}
