import { Stack } from "@chakra-ui/react";

import {
  FormFieldType, FieldTypes, FormRowType, FormColumnType,
} from "../types/form";
import InputField from "./InputField";

type DefaultPropTypes = {
  data: FormFieldType | FormRowType | FormColumnType;
  register: any;
  errors: any;
  setValue: any;
  setError: any;
}

export default function FormGenerator({ data, ...formProps }: DefaultPropTypes) {
  if (data.type === FieldTypes.INPUT) {
    return <InputField {...data} {...formProps} />;
  }

  if (data.type === FieldTypes.ROW || data.type === FieldTypes.COLUMN) {
    const direction = data.type === FieldTypes.ROW ? "row" : "column";
    const spacing = data.type === FieldTypes.ROW ? [0, 0, 6, 12, 24] : 0;
    return (
      <Stack
        w="100%"
        direction={["column", "column", direction, direction, direction]}
        spacing={spacing}
      >
        {data.fields.map((field) => (
          <FormGenerator key={[data.name, field.name].join(".")} data={field} {...formProps} />
        ))}
      </Stack>
    );
  }

  return <></>;
}
