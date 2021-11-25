import {
  Checkbox,
  FormLabel,
  FormErrorMessage,
  FormControl,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { CustomFieldType } from "../../../../types/form";

type PropTypes = {
  data: CustomFieldType;
  errors: any;
  register: any;
};

export default function TnC({
  data: {
    name, rules,
  }, register, errors,
}: PropTypes) {
  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor={name}>Terms &amp; Privacy</FormLabel>
      <Checkbox colorScheme="purple" {...register(name, rules)}>
        I agree to the
        {" "}
        <ChakraLink
          as={Link}
          color="purple"
          textDecoration="underline"
          to="/terms-and-conditions"
        >
          Terms &amp; Conditions
        </ChakraLink>
        {" "}
        and
        {" "}
        <ChakraLink
          as={Link}
          color="purple"
          textDecoration="underline"
          to="/privacy-policy"
        >
          Privacy Policy
        </ChakraLink>
      </Checkbox>
      <FormErrorMessage>
        {errors[name]?.message}
      </FormErrorMessage>
    </FormControl>
  );
}
