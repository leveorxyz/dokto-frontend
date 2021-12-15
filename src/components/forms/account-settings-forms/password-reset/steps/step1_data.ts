import {
  FieldTypes, FormDataType,
} from "../../../types/form";

const firstColumn = (watch: any) :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.INPUT,
      name: "old_password",
      label: "Last Remember Password",
      placeholder: "Last Remember Password",
      inputType: "password",
      rules: {
        pattern: {
          value: /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/,
          message: "Minimum eight characters, at least one letter and one number",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "new_password",
      label: "Choose a new Password",
      placeholder: "New Password",
      inputType: "password",
      rules: {
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
        validate: (v) => (v === watch("new_password") ? true : "Passwords do not match"),
        deps: ["new_password"],
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
