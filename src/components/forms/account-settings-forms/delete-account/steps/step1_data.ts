import {
  FieldTypes, FormDataType,
} from "../../../types/form";

const firstColumn = (watch: any) :FormDataType => ({
  type: FieldTypes.ROW,
  name: "first",
  fields: [
    {
      type: FieldTypes.INPUT,
      name: "account_delete_password",
      label: "Enter Password",
      placeholder: "Enter Password",
      inputType: "password",
      rules: {
        required: {
          value: true,
          message: "Password is required",
        },
        pattern: {
          value: /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/,
          message: "Minimum eight characters, at least one letter and one number",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "retype_password",
      label: "Retype Password",
      inputType: "password",
      placeholder: "Retype Password",
      rules: {
        required: {
          value: true,
          message: "Password is required",
        },
        validate: (v) => (v === watch("account_delete_password") ? true : "Passwords do not match"),
        deps: ["account_delete_password"],
      },
    },
  ],
});

const data = (watch: any) :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "step1",
  fields: [
    firstColumn(watch),
    {
      type: FieldTypes.RADIO,
      name: "reason_to_delete",
      label: "Select Reason for Leaving",
      direction: "column",
      options: [{
        value: "NOT SATISFIED WITH THE SERVICE",
        label: "Not satisfied with the service",
      },
      {
        value: "ISSUES WITH PROVIDERS",
        label: "Issues with providers",
      },
      {
        value: "OTHERS",
        label: "Others",
      }],
      placeholder: "Select",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.TEXTAREA,
      name: "description",
      label: "",
      placeholder: "Description (Optional)",
      resize: "vertical",
      rules: {
        validate: (v) => (watch("reason_to_delete") === "OTHER" && v?.length < 1 ? "Description is required" : true),
        deps: ["reason_to_delete"],
      },
    },
  ],
});

export default data;
export const step1Data = data;
