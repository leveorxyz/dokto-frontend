import {
  FieldTypes, FormDataType,
} from "../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [

    {
      type: FieldTypes.INPUT,
      name: "chiefComplaint",
      label: "Chief Complaint *",

    },
    {
      type: FieldTypes.INPUT,
      name: "timing",
      label: "Timing",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "duration",
      label: "Duration",

    },
    {
      type: FieldTypes.INPUT,
      name: "associated_symptons",
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
      name: "location",
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
    {
      type: FieldTypes.INPUT,
      name: "modifying_factors",
      label: "Modifying Factors",

    },
  ],
});

const row = ():FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "description",
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
    }, {
      type: FieldTypes.INPUT,
      name: "context",
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
