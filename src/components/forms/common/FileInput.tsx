import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import { FileFieldType } from "../types/form";
import getBase64 from "../../../utils/getBase64";

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
    setValue(name, e.target.files ? getBase64(Array.from(e.target.files)[0] as File) : null);

    if (!e.target.files || e.target.files.length === 0) {
      setError(shadowFieldName, { type: "required", message: "This field is required" });
    } else {
      clearErrors(shadowFieldName, null);
    }
  };

  return (
    <FormControl isInvalid={errors[shadowFieldName]} py={6}>
      <FormLabel htmlFor={shadowFieldName} color="brand.dark">{label}</FormLabel>
      <Input
        id={shadowFieldName}
        type="file"
        placeholder={placeholder}
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
