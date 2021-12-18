import { format } from "date-fns";
import {
  FieldTypes, FormDataType,
} from "../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.INPUT,
      name: "Allergy Name",
      label: "Allergy Name",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.SELECT,
      name: "Provider",
      label: "Provider",
      options: [{
        value: "Active",
        label: "Active",
      },
      {
        value: "Resolved",
        label: "Resolved",
      },
      ],
      placeholder: "Select",
    },
    {
      type: FieldTypes.SELECT,
      name: "status",
      label: "Status",
      options: [{
        value: "Active",
        label: "Active",
      },
      {
        value: "Resolved",
        label: "Resolved",
      },
      ],
      placeholder: "Select",
    },
    {
      type: FieldTypes.SELECT,
      name: "severity",
      label: "Severity",
      options: [{
        value: "Mild",
        label: "Mild",
      },
      {
        value: "Moderate",
        label: "Moderate",
      },
      {
        value: "Severe",
        label: "Severe",
      },
      ],
      placeholder: "Select",
    },
  ],
});

const secondColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",

  fields: [
    {
      type: FieldTypes.INPUT,
      name: "Set Date",
      label: "Set Date",
      inputType: "date",
      customProperties: {
        format: "yyyy/MM/dd",
      },
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.SELECT,
      name: "Allergy Type",
      label: "Allergy Type",
      options: [{
        value: "Mild",
        label: "Mild",
      },
      {
        value: "Moderate",
        label: "Moderate",
      },
      {
        value: "Severe",
        label: "Severe",
      },
      ],
      placeholder: "Select",
    },
    {
      type: FieldTypes.SELECT,
      name: "Reaction",
      label: "Reaction",
      options: [{
        value: "Mild",
        label: "Mild",
      },
      {
        value: "Moderate",
        label: "Moderate",
      },
      {
        value: "Severe",
        label: "Severe",
      },
      ],
      placeholder: "Select",
    },

  ],
});

const row = ():FormDataType => ({
  type: FieldTypes.ROW,
  name: "description",
  fields: [{
    type: FieldTypes.TEXTAREA,
    name: "Comments",
    label: "Comments",
    resize: "vertical",
    rules: {
      maxLength: {
        value: 200,
        message: "Must be less than 200 characters",
      },
    },
  }],
});

const data = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "step1",
  fields: [
    {
      type: FieldTypes.ROW,
      name: "first row",
      fields: [
        firstColumn(),
        secondColumn()],
    },
    row(),
  ],

});

export default data;
export const step1Data = data;
