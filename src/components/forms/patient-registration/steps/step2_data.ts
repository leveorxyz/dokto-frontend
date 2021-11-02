import {
  FieldTypes, FormDataType,
} from "../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.SELECT,
      name: "identification_type",
      label: "Identification Type",
      options: [
        {
          label: "Passport",
          value: "passport",
        },
        {
          label: "Driver's license",
          value: "driving_license",
        },
        {
          label: "National ID",
          value: "national_id",
        },
      ],
      placeholder: "Select Identification type",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.FILE,
      name: "profile_photo",
      label: "Profile Photo",
      accept: "image/*",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "social_security_number",
      label: "Social Security Number",
      placeholder: "Enter your social security Number",
    },
  ],
});

const secondColumn = (watch: any) :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",
  fields: [
    {
      type: FieldTypes.INPUT,
      name: "identification_number",
      label: "Identification Number",
      placeholder: "Enter your identification Number",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "password",
      label: "Choose a Password",
      placeholder: "Password",
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
      label: "Confirm Password",
      inputType: "password",
      placeholder: "Password",
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

const data = (watch: any) :FormDataType => ({
  type: FieldTypes.ROW,
  name: "step2",
  fields: [
    firstColumn(),
    secondColumn(watch),
  ],
});

export default data;
export const step2Data = data;
