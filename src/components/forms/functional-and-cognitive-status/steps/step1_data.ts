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
      name: "gender",
      label: "Module Type",
      options: [{
        value: "MALE",
        label: "Type 1",
      },
      {
        value: "FEMALE",
        label: "Type 2",
      },
      ],
      placeholder: "Select",
    },

    {
      type: FieldTypes.SELECT,
      name: "gender",
      label: "Status",
      options: [{
        value: "MALE",
        label: "Type 1",
      },
      {
        value: "FEMALE",
        label: "Type 2",
      },
      ],
      placeholder: "Select",
    },

    {

      type: FieldTypes.INPUT,
      name: "date_of_birth",
      label: "Start Date",
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

const secondColumn = ():FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "date",
  fields: [
    {
      type: FieldTypes.SELECT,
      name: "gender",
      label: "Code Type",
      options: [{
        value: "MALE",
        label: "Type 1",
      },
      {
        value: "FEMALE",
        label: "Type 2",
      },
      ],
      placeholder: "Select",
    },
    {
      type: FieldTypes.INPUT,
      name: "street",
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
    name: "professional_bio",
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
