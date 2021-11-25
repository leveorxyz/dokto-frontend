import {
  FieldTypes, FormDataType,
} from "../../types/form";

const firstColumn = (watch: any) :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.INPUT,
      name: "remember_password",
      label: "Last Remember Password",
      placeholder: "Last Remember Password",
      inputType: "password",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
        pattern: {
          value: /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/,
          message: "Minimum eight characters, at least one letter and one number",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "password",
      label: "Choose a new Password",
      placeholder: "New Password",
      inputType: "password",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
        pattern: {
          value: /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/,
          message: "Minimum eight characters, at least one letter and one number",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "confirm_password",
      label: "Confirm new Password",
      inputType: "password",
      placeholder: "Confirm new Password",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
        validate: (v) => (v === watch("password") ? true : "Passwords do not match"),
        deps: ["password"],
      },
    },
  ],
});

const secondColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",
  fields: [
  ],
});

const data = (watch: any) :FormDataType => ({
  type: FieldTypes.ROW,
  name: "step1",
  fields: [
    firstColumn(watch),
    secondColumn(),
  ],
});

export default data;
export const step1Data = data;
