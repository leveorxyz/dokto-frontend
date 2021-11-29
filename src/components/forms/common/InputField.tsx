import { useMemo } from "react";
import {
  Heading,
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
  min,
  max,
  bottomText,
  leftAddon,
  rightAddon,
  rightElement,
  leftElement,
  label,
  errors,
  register,
  rules,
}: PropTypes) {
  const borderStyles = useMemo(() => {
    if (leftAddon || leftElement) {
      return {
        borderTopLeftRadius: "0 !important",
        borderBottomLeftRadius: "0 !important",
      };
    }
    if (rightAddon || rightElement) {
      return {
        borderTopRightRadius: "0 !important",
        borderBottomRightRadius: "0 !important",
      };
    }
    return {};
  }, [leftAddon, rightAddon, leftElement, rightElement]);

  return (
    <FormControl id={name} isInvalid={errors[name]} pb={4}>
      <FormLabel htmlFor="name" color="brand.dark">{label}</FormLabel>
      <InputGroup>
        {leftAddon && <InputLeftAddon bg="brand.darkPink" color="white" borderRadius="xl">{leftAddon}</InputLeftAddon>}
        {leftElement && <InputLeftElement borderRadius="xl">{leftElement}</InputLeftElement>}
        <Input
          id={name}
          type={inputType}
          placeholder={placeholder}
          max={max}
          min={min}
          sx={{
            "&": {
              ...borderStyles,
            },
          }}
          {...register(name, rules)}
        />
        {rightAddon && <InputRightAddon borderRadius="xl">{rightAddon}</InputRightAddon>}
        {rightElement && <InputRightElement borderRadius="xl">{rightElement}</InputRightElement>}
      </InputGroup>
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
      <Heading as="h2" size="sm" fontWeight="normal" mt="3" color="brand.darkPink">{bottomText}</Heading>
    </FormControl>
  );
}
