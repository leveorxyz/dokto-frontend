import {
  FieldTypes, FormDataType,
} from "../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.INPUT,
      name: "blood_group",
      label: "Blood Group",
      placeholder: "Blood Group",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "referring_doctor_full_name",
      label: "Referring Doctor Full Name",
      placeholder: "Referring Doctor Full Name",
    },
    {
      type: FieldTypes.INPUT,
      name: "referring_doctor_phone_number",
      label: "Referring Doctor Phone Number",
      placeholder: "Referring Doctor Phone Number",
    },
  ],
});

const secondColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",
  fields: [
    {
      type: FieldTypes.INPUT,
      name: "genotype",
      label: "Genotype",
      placeholder: "Genotype",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "referring_doctor_address",
      label: "Referring Doctor Address",
      placeholder: "Referring Doctor Address",
    },
  ],
});

const data = () :FormDataType => ({
  type: FieldTypes.ROW,
  name: "step3",
  fields: [
    firstColumn(),
    secondColumn(),
  ],
});

export default data;
export const step3Data = data;
