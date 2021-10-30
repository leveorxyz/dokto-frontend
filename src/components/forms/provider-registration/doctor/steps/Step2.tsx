import { useForm } from "react-hook-form";
import {
  Box,
  Flex,
  Button,
} from "@chakra-ui/react";

import step2Data from "./step2_data";
import FormGenerator from "../../../common/FormGenerator";

export default function PersonalDetails() {
  const {
    handleSubmit,
    register,
    setValue,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box py={12}>
      <form onSubmit={handleSubmit(onSubmit)}>

        <FormGenerator
          data={step2Data()}
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
