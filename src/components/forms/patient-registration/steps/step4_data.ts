import {
  FieldTypes, FormDataType,
} from "../../types/form";

const firstColumn = (watch: any) :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.SELECT,
      name: "insurance_type",
      label: "Insurance Type",
      placeholder: "Select type",
      options: [
        {
          label: "Self paid",
          value: "SELF_PAID",
        },
        {
          label: "Insurance verified",
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
  ],
});

const secondColumn = (watch: any) :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",
  fields: [
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
  name: "step4",
  fields: [
    firstColumn(watch),
    secondColumn(watch),
  ],
});

export default data;
export const step4Data = data;
