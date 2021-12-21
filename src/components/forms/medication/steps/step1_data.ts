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
      name: "date",
      label: "Date",
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
      type: FieldTypes.INPUT,
      name: "directions",
      label: "Directions",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "refills",
      label: "Refills",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
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
      name: "Prescription",
      label: "Prescription",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "Quantity",
      label: "Quantity",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "Expires",
      label: "Expires",
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
