import {
  FieldTypes, FormDataType,
} from "../../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  label: "Identification Verification",
  name: "first",
  fields: [
    {
      type: FieldTypes.SELECT,
      name: "identification_type",
      label: "Identification type",
      options: [
        {
          label: "Passport",
          value: "PASSPORT",
        },
        {
          label: "Driver's license",
          value: "DRIVER'S LICENSE",
        },
        {
          label: "State ID",
          value: "STATE ID",
        },
      ],
      placeholder: "Select",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "identification_number",
      label: "Identity Verification Number",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
        pattern: {
          value: /^[a-zA-Z0-9_ ]+$/,
          message: "Only numbers and letters allowed",
        },
      },
    },
    {
      type: FieldTypes.FILE,
      name: "identification_photo",
      label: "Upload your ID file",
      accept: "image/*",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
  ],
});

const secondColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",
  label: "Address",
  fields: [
    {
      type: FieldTypes.INPUT,
      name: "street",
      label: "Street Address",
      placeholder: "Address",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "country",
      label: "Country",
      placeholder: "Country",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "state",
      label: "State",
      placeholder: "State",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
        deps: ["country"],
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "city",
      label: "City",
      placeholder: "City",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
        deps: ["state"],
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "zip_code",
      label: "Zip Code",
      placeholder: "Zip Code",
    },
  ],
});

const data = () :FormDataType => ({
  type: FieldTypes.ROW,
  name: "step2",
  fields: [
    firstColumn(),
    secondColumn(),
  ],
});

export default data;
export const step2Data = data;
