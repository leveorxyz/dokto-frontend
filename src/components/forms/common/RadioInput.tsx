import {
  Radio,
  RadioGroup,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import { RadioFieldType } from "../types/form";

type DefaultProps = {
  errors: any;
  register: any;
} & Omit<RadioFieldType, "type">;

export default function RadioField({
  name,
  options,
  errors,
  label,
  register,
  rules,
}: DefaultProps) {
  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor={name} color="brand.dark">{label}</FormLabel>
      <RadioGroup id={name}>
        <Stack direction="row">
          {options.map(({ value, label: optionLabel }) => (
            <Radio
              key={value}
              value={value}
              {...register(name, rules)}
            >
              {optionLabel}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}
