import { format } from "date-fns";
import {
  FieldTypes, FormDataType,
} from "../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [

    {
      type: FieldTypes.SELECT,
      name: "moduleType",
      label: "Module Type",
      options: [{
        value: "Functional Status",
        label: "Functional Status",
      },
      {
        value: "Cognitive status",
        label: "Cognitive status",
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
        value: "Inactive",
        label: "Inactive",
      },
      {
        value: "Resolved",
        label: "Resolved",
      },
      ],
      placeholder: "Select",
    },

    {

      type: FieldTypes.INPUT,
      name: "start_date",
      label: "Start Date",
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

  ],
});

const secondColumn = ():FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "date",
  fields: [
    {
      type: FieldTypes.SELECT,
      name: "codeType",
      label: "Code Type",
      options: [{
        value: "ICD",
        label: "ICD",
      },
      {
        value: "CPT",
        label: "CPT",
      },
      ],
      placeholder: "Select",
    },
    {
      type: FieldTypes.INPUT,
      name: "code",
      label: "Code",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    }],
});

const row = ():FormDataType => ({
  type: FieldTypes.ROW,
  name: "description",
  fields: [{
    type: FieldTypes.TEXTAREA,
    name: "description",
    label: "Description",
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
