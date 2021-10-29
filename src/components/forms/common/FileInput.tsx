import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import { FileFieldType } from "../types/form";

type PropTypes = {
  errors: any;
  register: any;
} & Omit<FileFieldType, "type">;

export default function FileInput({
  name,
  placeholder,
  label,
  accept,
  multiple,
  errors,
  register,
  rules,
}: PropTypes) {
  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor="name">{label}</FormLabel>
      <Input
        id={name}
        type="file"
        placeholder={placeholder}
        accept={accept}
        multiple={multiple ?? false}
        {...register(name, rules)}
      />
      <FormErrorMessage>
        {errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}
