import { useMemo, useEffect } from "react";
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
  watch: any;
  isDirty: boolean;
} & Omit<FileFieldType, "type">;

export default function FileInput({
  name,
  placeholder,
  rules,
  label,
  accept,
  multiple,
  errors,
  setValue,
  setError,
  clearErrors,
  watch,
  isDirty,
}: PropTypes) {
  const shadowFieldName = `${name}_shadow`;

  const onChange = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setError(shadowFieldName, { type: "required", message: "This field is required" });
    } else {
      getBase64(Array.from(e.target.files)[0] as File).then((res) => setValue(name, res));
      clearErrors(shadowFieldName, null);
    }
  };

  const isRequired = useMemo(() => rules?.required?.value ?? false, [rules]);
  const currentValue = useMemo(() => watch(name), [watch, name]);

  useEffect(() => {
    if (isDirty && !currentValue && isRequired) setError(shadowFieldName, { type: "required", message: "This field is required" });
  }, [currentValue, isRequired, setError, shadowFieldName, isDirty]);

  return (
    <FormControl isInvalid={errors[shadowFieldName]} py={6}>
      <FormLabel htmlFor={shadowFieldName} color="brand.dark">{label}</FormLabel>
      <Input
        id={shadowFieldName}
        type="file"
        placeholder={placeholder}
        accept={accept}
        onChange={onChange}
        multiple={multiple ?? false}
        borderRadius="0 !important"
      />
      <FormErrorMessage>
        {errors[shadowFieldName] && errors[shadowFieldName].message}
      </FormErrorMessage>
    </FormControl>
  );
}
