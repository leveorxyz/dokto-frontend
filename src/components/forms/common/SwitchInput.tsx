import {
  Switch,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import { SwitchFieldType } from "../types/form";

type PropTypes = {
  errors: any;
} & Omit<SwitchFieldType, "type">;

export default function SwitchInput({
  name,
  errors,
  bottomText,
  label,
}: PropTypes) {
  return (
    <FormControl id={name} isInvalid={errors && errors[name]} py={6}>
      <Flex alignItems="center">
        <FormLabel htmlFor={name} color="brand.dark">{label}</FormLabel>
        <Switch colorScheme="purple" color="black" size="lg" />
      </Flex>
      <FormErrorMessage>
        {errors && errors[name] && errors[name].message}
      </FormErrorMessage>
      <Heading as="h2" size="sm" fontWeight="normal" mt="5" color="brand.darkPink">{bottomText}</Heading>
    </FormControl>
  );
}
