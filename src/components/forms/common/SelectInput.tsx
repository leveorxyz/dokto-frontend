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
    <FormControl isInvalid={errors[name]} py={6}>
      <FormLabel htmlFor="name" color="brand.dark">{label}</FormLabel>
      <Select
        id={name}
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
