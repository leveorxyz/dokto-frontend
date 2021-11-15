import {
  FieldTypes, FormDataType,
} from "../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  label: "Referring Physician Details",
  fields: [
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
    {
      type: FieldTypes.INPUT,
      name: "referring_doctor_address",
      label: "Referring Doctor Address",
      placeholder: "Referring Doctor Address",
    },
  ],
});

const secondColumn = (watch: any) :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",
  label: "Insurance Details",
  fields: [
    {
      type: FieldTypes.SELECT,
      name: "insurance_type",
      label: "Insurance Type",
      placeholder: "Select type",
      options: [
        {
          label: "Self-Pay",
          value: "SELF_PAID",
        },
        {
          label: "Insurance",
          value: "INSURANCE_VERIFIED",
        },
      ],
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "insurance_name",
      label: "Insurance Name",
      placeholder: "Insurance Name",
      visibilityDependencies: [
        {
          name: "insurance_type",
          value: "INSURANCE_VERIFIED",
        },
      ],
      rules: {
        validate: (v) => (watch("insurance_type") === "INSURANCE_VERIFIED" && v ? true : "This field is required"),
        deps: ["insurance_type"],
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "insurance_number",
      label: "Insurance Number",
      placeholder: "Insurance Number",
      visibilityDependencies: [
        {
          name: "insurance_type",
          value: "INSURANCE_VERIFIED",
        },
      ],
      rules: {
        validate: (v) => (watch("insurance_type") === "INSURANCE_VERIFIED" && v ? true : "This field is required"),
        deps: ["insurance_type"],
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "insurance_policy_holder_name",
      label: "Insurance Policy Holder Name",
      placeholder: "Insurance Policy Holder Name",
      visibilityDependencies: [
        {
          name: "insurance_type",
          value: "INSURANCE_VERIFIED",
        },
      ],
      rules: {
        validate: (v) => (watch("insurance_type") === "INSURANCE_VERIFIED" && v ? true : "This field is required"),
        deps: ["insurance_type"],
      },
    },
  ],
});

const data = (watch: any) :FormDataType => ({
  type: FieldTypes.ROW,
  name: "step3",
  fields: [
    firstColumn(),
    secondColumn(watch),
  ],
});

export default data;
export const step3Data = data;
