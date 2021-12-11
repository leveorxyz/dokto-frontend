import { useEffect, useState } from "react";
import {
  Checkbox,
  CheckboxGroup,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";

import { CheckboxFieldType, FieldTypes } from "../../../../components/forms/types/form";

type CustomCheckboxFieldType = {
  type: FieldTypes.CHECKBOX;
  direction?: "column" | "row";
  name: string;
  defaultValue?: string;
  placeholder?: string;
  bottomText?: string;

  options: {
    value: string;
    label: string;
    required?: boolean;
  }[];
} ;

type PropTypes = {
  errors: any;
  setValue: any;
} & Omit<CustomCheckboxFieldType, "type">;

export default function CustomCheckboxField({
  name,
  options,
  errors, direction,
  setValue,
}: PropTypes) {
  const [localValue, setLocalValue] = useState<(string | number)[]>([]);

  useEffect(() => {
    setValue(name, localValue);
  }, [localValue, name, setValue]);

  return (
    <FormControl id={name} isInvalid={errors && errors[name]}>
      <CheckboxGroup colorScheme="purple" value={localValue} onChange={(value) => setLocalValue(value)}>
        <Stack direction={direction ?? "row"} spacing={0} wrap="wrap">
          {options.map(
            ({ value, label: fieldLabel }) => (
              <Checkbox
                key={value}
                value={value}
                whiteSpace="nowrap"
                pr={8}
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
