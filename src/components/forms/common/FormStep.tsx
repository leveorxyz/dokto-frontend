import { useForm } from "react-hook-form";
import {
  Box,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useRecoilState, RecoilState } from "recoil";

import FormGenerator from "./FieldsGenerator";
import { FormDataType } from "../types/form";
import BrandButton from "../../common/buttons/BrandButton";

type PropTypes = {
  formData: (watch: any, control: any) => FormDataType;
  currentStepAtom: RecoilState<number>;
  stepDataAtom: RecoilState<any>;
  submitButtonText: string;
  showBackButton?: boolean;
  showResetButton?: boolean;
};

export default function FormStep({
  formData,
  currentStepAtom,
  stepDataAtom,
  submitButtonText,
  showBackButton,
  showResetButton,
}: PropTypes) {
  const [stepState, setStepState] = useRecoilState(stepDataAtom);
  const [currentStep, setCurrentStep] = useRecoilState(currentStepAtom);
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    setError,
    clearErrors,
    control,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    mode: "onChange",
    defaultValues: Object.keys(stepState)
      .reduce(
        (prev, curr) => (
          // WARNING: This is a hack to get around the fact that we can't
          // use default values with file inputs for security reasons.
          // Normally we wouldn't need this but auto generating the form
          // and maintaining the state of a multi-page form at the same time
          // will break if we use the state of a file input as default value.

          // eslint-disable-next-line
          (stepState as any)[curr] instanceof File ? prev : { ...prev, [curr]: (stepState as any)[curr] }
        ),
        {},
      ),
  });

  const onSubmit = (data: unknown) => {
    setStepState(data);
    setCurrentStep((prev) => (prev + 1));
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>

        <FormGenerator
          data={formData(watch, control)}
          register={register}
          errors={errors}
          setValue={setValue}
          setError={setError}
          clearErrors={clearErrors}
          isDirty={isDirty}
          watch={watch}
          control={control}
        />

        <Flex py={6}>
          {showBackButton && (
          <BrandButton
            isDisabled={currentStep <= 1}
            onClick={() => setCurrentStep(
              (prev) => (prev >= 1 ? prev - 1 : prev),
            )}
          >
            Back
          </BrandButton>
          )}

          {showResetButton && (
          <>
            <Button
              ml="auto"
              colorScheme="purple"
              isLoading={isSubmitting}
              onClick={() => reset({})}
            >
              Clear
            </Button>
          </>
          )}
          <Button ml={showResetButton ? 2 : "auto"} bgColor="brand.darkPink" color="white" type="submit" isLoading={isSubmitting}>
            {submitButtonText}
          </Button>
        </Flex>
      </form>
    </Box>
  );
}

FormStep.defaultProps = {
  showBackButton: true,
  showResetButton: false,
};
