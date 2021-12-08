import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Flex,
} from "@chakra-ui/react";
import { useRecoilState, RecoilState, useSetRecoilState } from "recoil";

import FormGenerator from "./FieldsGenerator";
import { FormDataType } from "../types/form";
import BrandButton from "../../common/buttons/BrandButton";

type PropTypes = {
  formData: (watch: any, control: any) => FormDataType;
  currentStepAtom: RecoilState<number>;
  stepDataAtom: RecoilState<any>;
  submitButtonText: string;
};

export default function FormStep({
  formData, currentStepAtom, stepDataAtom, submitButtonText,
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
    defaultValues: Object.keys(stepState ?? {})
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

  useEffect(() => {
    reset(stepState ?? {});
  }, [stepState, reset]);

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

        <Flex justifyContent="space-between" py={6}>
          <BrandButton
            isDisabled={currentStep <= 1}
            onClick={() => setCurrentStep(
              (prev) => (prev >= 1 ? prev - 1 : prev),
            )}
          >
            Back
          </BrandButton>
          <BrandButton type="submit" isLoading={isSubmitting}>
            {submitButtonText}
          </BrandButton>
        </Flex>
      </form>
    </Box>
  );
}
