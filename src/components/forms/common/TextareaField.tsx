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
  register,
  rules,
}: DefaultProps) {
  return (
    <FormControl isInvalid={errors[name]} py={6}>
      <FormLabel htmlFor="name" color="brand.dark">{label}</FormLabel>
      <Textarea
        id={name}
        {...register(name, rules)}
        resize={resize}
        sx={{
          "&": {
            color: "brand.dark",
            borderColor: "brand.darkPink",
            borderRadius: 0,
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
      />
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}
