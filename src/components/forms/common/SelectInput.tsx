import {
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import { SelectFieldType } from "../types/form";

type DefaultProps = {
  errors: any;
  register: any;
} & Omit<SelectFieldType, "type">;

export default function SelectField({
  name,
  placeholder,
  options,
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
        placeholder={placeholder}
        sx={{
          "&": {
            color: "#BBCBD8",
            borderColor: "brand.darkPink",
            borderRadius: "xl",
          },
          "&::placeholder": {
            color: "#BBCBD8",
          },
          _focus: {
            "&": {
              bg: "white",
              color: "#BBCBD8",
              borderColor: "brand.darkPink",
            },
            "&::placeholder": {
              color: "#BBCBD8",
            },
          },
          _hover: {
            "&": {
              bg: "white",
              color: "#BBCBD8",
              borderColor: "brand.darkPink",
            },
            "&::placeholder": {
              color: "#BBCBD8",
            },
          },
        }}
        {...register(name, rules)}
      >
        {options.map(({ value }) => (
          <option
            key={value}
            value={value}
            placeholder={placeholder}
          >
            {value}
          </option>
        ))}
      </Select>
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}
