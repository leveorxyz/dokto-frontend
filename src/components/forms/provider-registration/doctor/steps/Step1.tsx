import { useForm } from "react-hook-form";
import {
  Box,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import { currentStepAtom } from "../atoms";
import step1Data from "./step1_data";
import FormGenerator from "../../../common/FormGenerator";

export default function PersonalDetails() {
  const [currentStep, setCurrentStep] = useRecoilState(currentStepAtom);
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
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
