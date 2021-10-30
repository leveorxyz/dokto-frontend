import {
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import { InputFieldType } from "../types/form";

type DefaultProps = {
  errors: any;
  register: any;
} & Omit<InputFieldType, "type">;

export default function SelectField({
  name,
  placeholder,
  inputType,
  errors,
  label,
  register,
  rules,
}: DefaultProps) {
  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor="name" color="brand.dark">{label}</FormLabel>
      <Select
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
        {...register(name, rules)}
      />
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}
