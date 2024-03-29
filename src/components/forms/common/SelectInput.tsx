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
    <FormControl isInvalid={errors[name]} pb={6}>
      <FormLabel htmlFor="name" color="brand.dark">{label}</FormLabel>
      <Select
        id={name}
        placeholder={placeholder}
        {...register(name, rules)}
      >
        {options.map(({ label: optionLabel, value }) => (
          <option
            key={value}
            value={value}
            placeholder={placeholder}
          >
            {optionLabel}
          </option>
        ))}
      </Select>
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}
