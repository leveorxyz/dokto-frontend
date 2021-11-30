import format from "date-fns/format";
import {
  FieldTypes, FormDataType,
} from "../../types/form";

const secondRow = () :FormDataType => ({
  type: FieldTypes.ROW,
  name: "second",
  fields: [
    {
      type: FieldTypes.FILE,
      name: "license_file",
      label: "License Upload",
      accept: "image/*, application/pdf",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "end_date",
      label: "Current License End Date",
      max: format(new Date(), "yyyy-MM-dd"),
      inputType: "date",
    },
  ],
});

const data = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "step1",
  fields: [
    {
      type: FieldTypes.CHECKBOX,
      name: "language",
      label: "Languages",
      direction: "row",
      options: [{
        value: "English",
        label: "English",
      },
      {
        value: "Spanish",
        label: "Spanish",
      },
      {
        value: "French",
        label: "French",
      }],
      placeholder: "",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    secondRow(),
    {
      type: FieldTypes.TEXTAREA,
      name: "professional_bio",
      label: "Professional Bio",
      resize: "vertical",
      rules: {
        maxLength: {
          value: 200,
          message: "Must be less than 200 characters",
        },
      },
    },
  ],
});

export default data;
export const step1Data = data;
