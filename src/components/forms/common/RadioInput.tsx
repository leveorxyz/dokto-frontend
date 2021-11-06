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
  watch: any;
} & Omit<RadioFieldType, "type">;

export default function RadioField({
  name,
  options,
  errors,
  label,
  direction,
  register,
  rules,
  watch,
}: DefaultProps) {
  return (
    <FormControl id={name} isInvalid={errors[name]} py={6}>
      <FormLabel htmlFor={name} color="brand.dark">{label}</FormLabel>
      <RadioGroup id={name} value={watch(name)}>
        <Stack direction={direction}>
          {options.map(({ value, label: optionLabel }) => (
            <Radio
              key={value}
              value={value}
              {...register(name, rules)}
              sx={{
                "&": {
                  color: "gray.300",
                  bg: "gray.300",
                  borderColor: "white",
                },
                "&[data-checked]": {
                  color: "brand.darkPink",
                  bg: "brand.darkPink",
                  borderColor: "white",
                  _hover: {
                    color: "brand.darkPink",
                    bg: "brand.darkPink",
                    borderColor: "gray.300",
                  },
                },
              }}
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
