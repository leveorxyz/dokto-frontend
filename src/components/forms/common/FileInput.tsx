import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import { FileFieldType } from "../types/form";

type PropTypes = {
  errors: any;
  setValue: any;
  setError: any;
  clearErrors: any;
} & Omit<FileFieldType, "type">;

export default function FileInput({
  name,
  placeholder,
  label,
  accept,
  multiple,
  errors,
  setValue,
  setError,
  clearErrors,
}: PropTypes) {
  const shadowFieldName = `${name}_shadow`;

  const onChange = (e: any) => {
    setValue(name, e.target.files ? Array.from(e.target.files)[0] : null);

    if (!e.target.files || e.target.files.length === 0) {
      setError(shadowFieldName, { type: "required", message: "This field is required" });
    } else {
      clearErrors(shadowFieldName, null);
    }
  };

  return (
    <FormControl isInvalid={errors[shadowFieldName]}>
      <FormLabel htmlFor={shadowFieldName}>{label}</FormLabel>
      <Input
        id={shadowFieldName}
        type="file"
        placeholder={placeholder}
        accept={accept}
        onChange={onChange}
        multiple={multiple ?? false}
      />
      <FormErrorMessage>
        {errors[shadowFieldName] && errors[shadowFieldName].message}
      </FormErrorMessage>
    </FormControl>
  );
}
