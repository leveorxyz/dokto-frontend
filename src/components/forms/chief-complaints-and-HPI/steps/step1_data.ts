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
      label: "Chief Complaint *",
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
      label: "Timing",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.SELECT,
      name: "gender",
      label: "Duration",
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
      label: "Associated Symptoms",
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
      type: FieldTypes.INPUT,
      name: "street",
      label: "Location",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.SELECT,
      name: "gender",
      label: "Severity",
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
      label: "Modifying Factors",
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
  ],
});

const row = ():FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "description",
  fields: [
    {
      type: FieldTypes.INPUT,
      name: "street",
      label: "Description",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    }, {
      type: FieldTypes.INPUT,
      name: "street",
      label: "Context",
      rules: {
        required: {
          value: true,
          message: "This field is required",
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
