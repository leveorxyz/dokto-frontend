import {
  Switch,
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
  label,
}: PropTypes) {
  return (
    <FormControl id={name} isInvalid={errors && errors[name]} py={6} display="flex" alignItems="center">
      <FormLabel htmlFor={name} color="brand.dark">{label}</FormLabel>
      <Switch colorScheme="purple" color="black" size="lg" />
      <FormErrorMessage>
        {errors && errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}
