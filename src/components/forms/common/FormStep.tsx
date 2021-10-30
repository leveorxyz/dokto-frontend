import { useForm } from "react-hook-form";
import {
  Box,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useRecoilState, RecoilState } from "recoil";

import FormGenerator from "./FieldsGenerator";
import { FormDataType } from "../types/form";

type PropTypes = {
  formData: (watch: any) => FormDataType;
  currentStepAtom: RecoilState<number>;
  stepDataAtom: RecoilState<any>;
};

export default function FormStep({ formData, currentStepAtom, stepDataAtom }: PropTypes) {
  const [step1State, setStep1State] = useRecoilState(stepDataAtom);
  const [currentStep, setCurrentStep] = useRecoilState(currentStepAtom);
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: Object.keys(step1State)
      .reduce(
        (prev, curr) => (
          // WARNING: This is a hack to get around the fact that we can't
          // use default values with file inputs for security reasons.
          // Normally we wouldn't need this but auto generating the form
          // and maintaining the state of a multi-page form at the same time
          // will break if we use the state of a file input as default value.

          // eslint-disable-next-line
          (step1State as any)[curr] instanceof File ? prev : { ...prev, [curr]: (step1State as any)[curr] }
        ),
        {},
      ),
  });

  const onSubmit = (data: any) => {
    setStep1State(data);
    setCurrentStep(currentStep + 1);
  };

  return (
    <Box py={12}>
      <form onSubmit={handleSubmit(onSubmit)}>

        <FormGenerator
          data={formData(watch)}
          register={register}
          errors={errors}
          setValue={setValue}
          setError={setError}
          clearErrors={clearErrors}
        />

        <Flex justifyContent="flex-end" py={6}>
          <Button type="submit" variantColor="teal" mr={4} isLoading={isSubmitting}>
            Next
          </Button>
        </Flex>
      </form>
    </Box>
  );
}
