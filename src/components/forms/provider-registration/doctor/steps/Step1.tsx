import { useForm } from "react-hook-form";
import {
  Box,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import { currentStepAtom, step1Atom } from "../atoms";
import step1Data from "./step1_data";
import FormGenerator from "../../../common/FormGenerator";

export default function PersonalDetails() {
  const [step1State, setStep1State] = useRecoilState(step1Atom);
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
          data={step1Data(watch)}
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
