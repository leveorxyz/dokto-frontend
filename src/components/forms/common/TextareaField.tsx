import {
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import { TextareaFieldType } from "../types/form";

type DefaultProps = {
  errors: any;
  register: any;
} & Omit<TextareaFieldType, "type">;

export default function InputField({
  name,
  label,
  resize,
  errors,
  placeholder,
  register,
  rules,
}: DefaultProps) {
  return (
    <FormControl isInvalid={errors[name]} py={6}>
      <FormLabel htmlFor="name" color="brand.dark">{label}</FormLabel>
      <Textarea
        id={name}
        placeholder={placeholder}
        {...register(name, rules)}
        resize={resize}
        borderRadius="0 !important"
      />
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}
