import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import { InputFieldType } from "../types/form";

type DefaultProps = {
  errors: any;
  register: any;
} & Omit<InputFieldType, "type">;

export default function InputField({
  name, placeholder, inputType, label, errors, register, rules,
}: DefaultProps) {
  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor="name">{label}</FormLabel>
      <Input
        id={name}
        type={inputType}
        placeholder={placeholder}
        {...register(name, rules)}
      />
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}
