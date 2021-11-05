import format from "date-fns/format";
import {
  FieldTypes, FormDataType,
} from "../../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.ARRAY,
      name: "professional_bio",
      label: "Professional Bio",
      addButtonText: "Add Professional Bio +",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
      fields: [
        {
          type: FieldTypes.INPUT,
          name: "doctor_info",
          label: "Doctor Info",
          placeholder: "Doctor Info",
        },
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
    {
      type: FieldTypes.FILE,
      name: "license",
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
      type: FieldTypes.TEXTAREA,
      name: "awardsAndPublications",
      label: "Awards/Publications if any",
      resize: "both",
    },
  ],
});

const secondColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",
  fields: [
    {
      type: FieldTypes.MULTISELECT,
      name: "accepted_insurance",
      label: "Accepted Insurances",
      options: [{
        value: "Other",
        label: "Other",
      },
      {
        value: "Self",
        label: "Self",
      },
      ],
    },
    {
      type: FieldTypes.RADIO,
      name: "group_1",
      label: "Group 1",
      direction: "column",
      options: [{
        value: "I have read and agree to the Business Associate Agreement",
        label: "I have read and agree to the Business Associate Agreement",
      },
      {
        value: "I practise outside the United States and exempt from the Business Associate Agreement",
        label: "I practise outside the United States and exempt from the Business Associate Agreement",
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
      type: FieldTypes.RADIO,
      name: "group_2",
      label: "Group 2",
      direction: "column",
      options: [{
        value: "I have read and agree to the HIPAA Agreement",
        label: "I have read and agree to the HIPAA Agreement",
      },
      {
        value: "I practise outside the United States and exempt from the HIPAA Agreement",
        label: "I practise outside the United States and exempt from the HIPAA Agreement",
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
      type: FieldTypes.RADIO,
      name: "group_3",
      label: "Group 3",
      direction: "column",
      options: [{
        value: "I have read and agree to the GDPR Laws",
        label: "I have read and agree to the GDPR Laws",
      },
      {
        value: "I live outside the UK and EU and exempt from the GDPR Laws",
        label: "I live outside the UK and EU and exempt from the GDPR Laws",
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
      type: FieldTypes.RADIO,
      name: "ALL",
      label: "ALL",
      direction: "column",
      options: [{
        value: "I agree to the terms of use and privacy policy",
        label: "I agree to the terms of use and privacy policy",
      },
      ],
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
  name: "step4",
  fields: [
    firstColumn(),
    secondColumn(),
  ],
});

export default data;
export const step4Data = data;
