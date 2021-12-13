import format from "date-fns/format";
import {
  FieldTypes, FormDataType,
} from "../../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
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
    {
      type: FieldTypes.ARRAY,
      name: "education",
      label: "Education Profile",
      addButtonText: "Add Education Profile +",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
      fields: [
        {
          type: FieldTypes.INPUT,
          name: "college",
          label: "College",
          placeholder: "College",
          rules: {
            required: {
              value: true,
              message: "This field is required",
            },
            maxLength: {
              value: 60,
              message: "Must be less than 60 characters",
            },
          },
        },
        {
          type: FieldTypes.INPUT,
          name: "course",
          label: "Course Studied",
          placeholder: "Course Studied",
          rules: {
            required: {
              value: true,
              message: "This field is required",
            },
            maxLength: {
              value: 50,
              message: "Must be less than 50 characters",
            },
          },
        },
        {
          type: FieldTypes.INPUT,
          name: "year",
          label: "Year Graduated",
          max: format(new Date(), "yyyy-MM-dd"),
          inputType: "date",
          rules: {
            required: {
              value: true,
              message: "This field is required",
            },
          },
        },
      ],
    },
  ],
});

const secondColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",
  fields: [

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
