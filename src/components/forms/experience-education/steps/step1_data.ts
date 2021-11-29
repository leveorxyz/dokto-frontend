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
        {
          type: FieldTypes.FILE,
          name: "certificate",
          label: "Certificate Upload",
          accept: "image/*",
          bottomText: "Certificate will not be shown publicly",
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
    {
      type: FieldTypes.ARRAY,
      name: "experience",
      label: "Experience",
      addButtonText: "Add Experience +",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
      fields: [
        {
          type: FieldTypes.INPUT,
          name: "establishment_name",
          label: "Establishment Name",
          placeholder: "Establishment Name",
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
          name: "job_title",
          label: "Job Title",
          placeholder: "Job Title",
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
          name: "start_date",
          label: "Start Date",
          max: format(new Date(), "yyyy-MM-dd"),
          inputType: "date",
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
          label: "End Date",
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
