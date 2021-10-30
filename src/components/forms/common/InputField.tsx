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
      <FormLabel htmlFor="name" color="brand.dark">{label}</FormLabel>
      <InputGroup sx={{
        "&": {
          color: "brand.dark",
          borderColor: "brand.darkPink",
          borderRadius: "xl",
        },
        "&::placeholder": {
          color: "#BBCBD8",
        },
        _focus: {
          "&": {
            bg: "white",
            color: "brand.dark",
            borderColor: "brand.darkPink",
            borderWidth: "2px",
          },
          "&::placeholder": {
            color: "#BBCBD8",
          },
        },
        _hover: {
          "&": {
            bg: "white",
            color: "brand.dark",
            borderColor: "brand.darkPink",
          },
          "&::placeholder": {
            color: "#BBCBD8",
          },
        },
      }}
      >
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
            },
            "&::placeholder": {
              color: "#BBCBD8",
            },
            _focus: {
              "&": {
                bg: "white",
                color: "brand.dark",
                borderColor: "brand.darkPink",
                borderWidth: "2px",
              },
              "&::placeholder": {
                color: "#BBCBD8",
              },
            },
            _hover: {
              "&": {
                bg: "white",
                color: "brand.dark",
                borderColor: "brand.darkPink",
                borderWidth: "2px",
              },
              "&::placeholder": {
                color: "#BBCBD8",
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
