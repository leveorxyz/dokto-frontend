import { format } from "date-fns";
import {
  FieldTypes, FormDataType,
} from "../../types/form";

const firstRow = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.SELECT,
      name: "procedure_type",
      label: "Type",
      options: [{
        value: "Acute",
        label: "Acute",
      },
      {
        value: "Chronic",
        label: "Chronic",
      }],
    }],
});

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [

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

  ],
});

const secondColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",

  fields: [
    {
      type: FieldTypes.INPUT,
      name: "description",
      label: "Description",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "date",
      label: "Date",
      max: format(new Date(), "yyyy-MM-dd"),
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
  type: FieldTypes.COLUMN,
  name: "step1",
  fields: [
    firstRow(),
    {
      type: FieldTypes.ROW,
      name: "first row",
      fields: [
        firstColumn(),
        secondColumn()],
    },
  ],

});

export default data;
export const step1Data = data;
