import { useForm } from "react-hook-form";
import {
  Box,
  Flex,
  Button,
} from "@chakra-ui/react";

import InputField from "../../../common/InputField";

export default function PersonalDetails() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const emailValidationRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <Box py={12}>
      <form onSubmit={handleSubmit(onSubmit)}>

        <InputField
          name="id"
          label="Choose your user ID"
          placeholder="User ID"
          errors={errors}
          register={register}
          rules={{
            required: { value: true, message: "This is required" },
            minLength: { value: 4, message: "Minimum length should be 4" },
          }}
        />

        <InputField
          name="email"
          label="Email"
          placeholder="Email"
          errors={errors}
          register={register}
          rules={{
            required: { value: true, message: "This is required" },
            pattern: { value: emailValidationRegex, message: "Invalid email" },
          }}
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
