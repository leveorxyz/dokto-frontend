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
      <RadioGroup
        name={name}
        {...register(name, rules)}
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
            },
            "&::placeholder": {
              color: "#BBCBD8",
            },
          },
        }}
      >
        <Stack direction="row">
          {options.map(({ value, label: optionLabel }) => (
            <Radio
              key={value}
              value={value}
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
