import format from "date-fns/format";
import {
  FieldTypes, FormDataType,
} from "../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.ARRAY,
      name: "education",
      label: "Education Profile",
      addButtonText: "Add Education Profile +",
      fields: [
        {
          type: FieldTypes.INPUT,
          name: "college",
          label: "College",
          placeholder: "College",
          rules: {
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
        },
      ],
    },
  ],
});

const secondColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",
  fields: [
    {
      type: FieldTypes.ARRAY,
      name: "experience",
      label: "Experience Profile",
      addButtonText: "Add Experience +",
      fields: [
        {
          type: FieldTypes.INPUT,
          name: "establishment_name",
          label: "Establishment Name",
          placeholder: "Establishment Name",
          rules: {
            maxLength: {
              value: 50,
              message: "Must be less than 50 characters",
            },
          },
        },
        {
          type: FieldTypes.INPUT,
          name: "job_title",
          label: "Job Title",
          placeholder: "Job Title",
          rules: {
            maxLength: {
              value: 50,
              message: "Must be less than 50 characters",
            },
          },
        },
        {
          type: FieldTypes.INPUT,
          name: "start_date",
          label: "Start Date",
          max: format(new Date(), "yyyy-MM-dd"),
          inputType: "date",
        },
        {
          type: FieldTypes.INPUT,
          name: "end_date",
          label: "End Date",
          optionalText: "(Ignore if you currently work here)",
          max: format(new Date(), "yyyy-MM-dd"),
          inputType: "date",
        },
        {
          type: FieldTypes.TEXTAREA,
          name: "job_description",
          label: "Job Description",
          placeholder: "Job Description",
          resize: "both",
          rules: {
            maxLength: {
              value: 200,
              message: "Must be less than 200 characters",
            },
          },
        },
      ],
    },
  ],
});

const data = () :FormDataType => ({
  type: FieldTypes.ROW,
  name: "step1",
  fields: [
    firstColumn(),
    secondColumn(),
  ],
});

export default data;
export const step1Data = data;
