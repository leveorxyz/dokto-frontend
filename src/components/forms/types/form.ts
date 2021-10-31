export enum FieldTypes {
  INPUT = "input",
  TEXTAREA = "textarea",
  SELECT = "select",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  FILE = "file",
  CUSTOM = "custom",
  ROW = "row",
  COLUMN = "column",
}

type RuleType<T> = {
  value: T;
  message: string;
};

type CommonType = {
  name: string;
  label: string;
  defaultValue?: string;
  placeholder?: string;
  size?: "xs" | "sm" | "md" | "lg";
  rules?: {
    deps?: string[];
    required?: RuleType<boolean>;
    minLength?: RuleType<number>;
    maxLength?: RuleType<number>;
    min?: RuleType<number>;
    max?: RuleType<number>;
    pattern?: RuleType<RegExp>;
    validate?: (value: any) => string | string[] | boolean;
  };
};

export type InputFieldType = {
  type: FieldTypes.INPUT;
  inputType?: "text" | "number" | "email" | "password" | "date" | "time" | "datetime-local" | "month" | "week" | "tel" | "url" | "color";
  leftAddon?: string | React.ReactNode;
  rightAddon?: string | React.ReactNode;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  customProperties?: { [key: string]: string };
} & CommonType;

export type TextareaFieldType = {
  type: FieldTypes.TEXTAREA;
  resize?: "vertical" | "horizontal" | "both" | "none";
} & CommonType;

export type SelectFieldType = {
  type: FieldTypes.SELECT;
  options: {
    value: string;
    label: string;
  }[];
} & CommonType;

export type CheckboxFieldType = {
  type: FieldTypes.CHECKBOX;
  options?: {
    value: string;
    label: string;
    required?: boolean;
  }[];
} & CommonType;

export type RadioFieldType = {
  type: FieldTypes.RADIO;
  options: {
    value: string;
    label: string;
    required?: boolean;
  }[];
} & CommonType;

export type FileFieldType = {
  type: FieldTypes.FILE;
  accept?: string;
  multiple?: boolean;
} & CommonType;

type PropTypes = {
  data: FormDataType;
  register: any;
  errors: any;
  setValue: any;
  setError: any;
  clearErrors: any;
  watch: any;
  control: any;
}

export type CustomFieldType = {
  type: FieldTypes.CUSTOM;
  component: (props: PropTypes) => JSX.Element;
} & CommonType;

export type FormFieldType = InputFieldType
                            | TextareaFieldType
                            | SelectFieldType
                            | CheckboxFieldType
                            | RadioFieldType
                            | FileFieldType
                            | CustomFieldType;

export type FormRowType = {
  type: FieldTypes.ROW;
  name: string; // this is just for the keys for mapping
  fields: (FormFieldType | FormColumnType | FormRowType)[];
}

export type FormColumnType = {
  type: FieldTypes.COLUMN;
  name: string; // this is just for the keys for mapping
  fields: (FormFieldType | FormColumnType | FormRowType)[];
}

export type FormDataType = FormFieldType | FormRowType | FormColumnType;
