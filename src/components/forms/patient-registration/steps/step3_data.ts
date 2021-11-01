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
      type: FieldTypes.FILE,
      name: "certificate_upload",
      label: "",
      accept: "image/*",
      rules: {
        validate: (v: FileList) => (v?.length ? true : "This field is required"),
      },
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
