import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  InputRightElement,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import { InputFieldType } from "../types/form";

type PropTypes = {
  errors: any;
  register: any;
} & Omit<InputFieldType, "type">;

export default function InputField({
  name,
  placeholder,
  inputType,
  leftAddon,
  rightAddon,
  rightElement,
  leftElement,
  label,
  errors,
  register,
  rules,
}: PropTypes) {
  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor="name">{label}</FormLabel>
      <InputGroup>
        {leftAddon && <InputLeftAddon>{leftAddon}</InputLeftAddon>}
        {leftElement && <InputLeftElement>{leftElement}</InputLeftElement>}
        <Input
          id={name}
          type={inputType}
          placeholder={placeholder}
          {...register(name, rules)}
        />
        {rightAddon && <InputRightAddon>{rightAddon}</InputRightAddon>}
        {rightElement && <InputRightElement>{rightElement}</InputRightElement>}
      </InputGroup>
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}
