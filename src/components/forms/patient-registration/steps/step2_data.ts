import { Country, State, City } from "country-state-city";
import {
  FieldTypes, FormDataType,
} from "../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  label: "Identification Verification",
  fields: [
    {
      type: FieldTypes.SELECT,
      name: "identification_type",
      label: "Identification Type",
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
      placeholder: "Select Identification type",
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
      },
      bottomText: "Enter your passport, driver's license or State ID number",
    },
    {
      type: FieldTypes.FILE,
      name: "identification_photo",
      label: "Upload Your Identification",
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
      name: "country",
      label: "Country",
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
