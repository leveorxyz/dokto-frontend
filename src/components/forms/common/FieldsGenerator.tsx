import { Stack } from "@chakra-ui/react";

import {
  FormFieldType, FieldTypes, FormRowType, FormColumnType,
} from "../types/form";
import InputField from "./InputField";
import FileInput from "./FileInput";
import SelectInput from "./SelectInput";
import RadioInput from "./RadioInput";
import TextareaField from "./TextareaField";
import ArrayField from "./ArrayField";
import MultiSelect from "./MultiSelect";
import formStyles from "./styles";

type PropTypes = {
  data: FormFieldType | FormRowType | FormColumnType;
  register: any;
  errors: any;
  setValue: any;
  setError: any;
  clearErrors: any;
  watch: any;
  control: any;
  isDirty: boolean;
}

export default function FieldsGenerator({ data, ...formProps }: PropTypes) {
  const FormFieldData = data as FormFieldType;
  if (FormFieldData.visibilityDependencies) {
    const shouldDisplayComponent = FormFieldData.visibilityDependencies.reduce(
      (prev, current) => (prev && formProps.watch(current.name) === current.value),
      true,
    );

    if (!shouldDisplayComponent) {
      return <></>;
    }
  }

  if (data.type === FieldTypes.INPUT) {
    return <InputField {...data} {...formProps} />;
  }

  if (data.type === FieldTypes.SELECT) {
    return <SelectInput {...data} {...formProps} />;
  }

  if (data.type === FieldTypes.MULTISELECT) {
    return <MultiSelect {...data} {...formProps} />;
  }

  if (data.type === FieldTypes.RADIO) {
    return <RadioInput {...data} {...formProps} />;
  }

  if (data.type === FieldTypes.TEXTAREA) {
    return <TextareaField {...data} {...formProps} />;
  }

  if (data.type === FieldTypes.FILE) {
    return <FileInput {...data} {...formProps} />;
  }

  if (data.type === FieldTypes.CUSTOM) {
    const Component = data.component;
    return <Component data={data} {...formProps} />;
  }

  if (data.type === FieldTypes.ARRAY) {
    return <ArrayField data={data} {...formProps} />;
  }

  if (data.type === FieldTypes.ROW || data.type === FieldTypes.COLUMN) {
    const direction = data.type === FieldTypes.ROW ? "row" : "column";
    const spacing = data.type === FieldTypes.ROW ? [0, 0, 6, 12, 24] : 0;
    return (
      <Stack
        w="100%"
        direction={["column", "column", direction, direction, direction]}
        spacing={spacing}
        sx={formStyles}
      >
        {data.fields.map((field) => (
          <FieldsGenerator key={[data.name, field.name].join(".")} data={field} {...formProps} />
        ))}
      </Stack>
    );
  }

  return <></>;
}
