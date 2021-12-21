import { useState, useEffect } from "react";
import {
  Checkbox,
  CheckboxGroup,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import { CheckboxFieldType } from "../types/form";

type PropTypes = {
  errors: any;
  setValue: any;
  setError: any;
  clearErrors: any;
  stepData: any;
} & Omit<CheckboxFieldType, "type">;

export default function CheckboxField({
  name,
  options,
  errors,
  label,
  spacing,
  direction,
  setValue,
  rules,
  setError,
  clearErrors,
  stepData,
}: PropTypes) {
  const [localValue, setLocalValue] = useState<(string | number)[]>(
    stepData && stepData[name] ? stepData[name] : []);

  useEffect(
    () => setLocalValue(stepData && stepData[name] ? stepData[name] : []),
    [stepData, name],
  );

  useEffect(() => {
    setValue(name, localValue);
    if (rules?.required?.value && localValue.length === 0) {
      setError(name, {
        type: "required",
        message: "This field is required",
      });
    } else {
      clearErrors(name);
    }
  }, [clearErrors, localValue, name, rules?.required?.value, setError, setValue]);

  return (
    <FormControl id={name} isInvalid={errors && errors[name]} pb={4}>
      <FormLabel htmlFor={name} color="brand.dark">{label}</FormLabel>
      <CheckboxGroup colorScheme="purple" value={localValue} onChange={(value) => setLocalValue(value)}>
        <Stack direction={direction ?? "row"} spacing={spacing}>
          {options.map(
            ({ value, label: fieldLabel }) => (
              <Checkbox
                key={value}
                value={value}
              >
                {fieldLabel}
              </Checkbox>
            ),
          )}
        </Stack>
      </CheckboxGroup>
      <FormErrorMessage>
        {errors && errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
}
