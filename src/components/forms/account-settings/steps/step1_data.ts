import {
  FieldTypes, FormDataType,
} from "../../types/form";

const firstColumn = (watch: any) :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.SECTION,
      name: "password_reset",
      label: "Password Reset",
      submitButtonText: "Save & Update",
      fields: [
        {
          type: FieldTypes.INPUT,
          name: "remember_password",
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
          name: "password",
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
            validate: (v) => (v === watch("password") ? true : "Passwords do not match"),
            deps: ["password"],
          },
        },
      ],
    },
  ],
});

const secondColumn = (watch: any) :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",
  fields: [
    {
      type: FieldTypes.INPUT,
      name: "notification_email",
      label: "Email Notification",
      bottomText: "All future emails will be sent to the address above",
      placeholder: "Change designated email address",
      rules: {
        pattern: {
          value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          message: "Invalid email address",
        },
      },
    },
    {
      type: FieldTypes.SECTION,
      name: "delete_account",
      label: "Delete Account",
      submitButtonText: "Delete Account",
      fields: [
        {
          type: FieldTypes.INPUT,
          name: "enter_password",
          label: "Enter Password",
          placeholder: "Enter Password",
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
          name: "retype_password",
          label: "Retype Password",
          inputType: "password",
          placeholder: "Retype Password",
          rules: {
            required: {
              value: true,
              message: "This field is required",
            },
            validate: (v) => (v === watch("enter_password") ? true : "Passwords do not match"),
            deps: ["password"],
          },
        },
        {
          type: FieldTypes.RADIO,
          name: "leaving_reason",
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
          resize: "both",
        },
      ],
    },
  ],
});

const thirdColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "third",
  fields: [
    {
      type: FieldTypes.SWITCH,
      name: "temporary_disable",
      label: "Disable my account temporarily",
      bottomText: "Unable to work for a brief period? Disable your account temporarily here. Remember to reactivate as soon as you are ready to start working with patients",
    },
  ],
});

const data = (watch: any) :FormDataType => ({
  type: FieldTypes.ROW,
  name: "step1",
  fields: [
    firstColumn(watch),
    secondColumn(watch),
    thirdColumn(),
  ],
});

export default data;
export const step1Data = data;
