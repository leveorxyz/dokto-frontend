import { useMemo } from "react";
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
  const borderStyles = useMemo(() => {
    if (leftAddon || leftElement) {
      return {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      };
    }
    if (rightAddon || rightElement) {
      return {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      };
    }
    return {};
  }, [leftAddon, rightAddon, leftElement, rightElement]);

  return (
    <FormControl id={name} isInvalid={errors[name]} py={6}>
      <FormLabel htmlFor="name" color="brand.dark">{label}</FormLabel>
      <InputGroup>
        {leftAddon && <InputLeftAddon bg="brand.darkPink" color="white" borderRadius="xl">{leftAddon}</InputLeftAddon>}
        {leftElement && <InputLeftElement borderRadius="xl">{leftElement}</InputLeftElement>}
        <Input
          id={name}
          type={inputType}
          placeholder={placeholder}
          sx={{
            "&": {
              color: "brand.dark",
              borderColor: "brand.darkPink",
              borderRadius: "xl",
              ...borderStyles,
            },
            "&::placeholder": {
              color: "#BBCBD8",
            },
            _hover: {
              "&": {
                color: "brand.dark",
                borderColor: "brand.darkPink",
              },
            },
            _focus: {
              "&": {
                color: "brand.dark",
                borderColor: "brand.darkPink",
                borderWidth: "2px",
              },
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
    </FormControl>
  );
}
