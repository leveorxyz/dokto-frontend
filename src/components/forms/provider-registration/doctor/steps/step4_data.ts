import {
  FieldTypes, FormDataType,
} from "../../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.TEXTAREA,
      name: "professional_bio",
      label: "Add Professional Bio",
      resize: "both",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      inputType: "number",
      name: "clinical_experience",
      label: "Years Of Clinincal Experience",
      placeholder: "Years Of Clinincal Experience",
    },
    {
      type: FieldTypes.INPUT,
      name: "consulted",
      inputType: "number",
      label: "Numbers Of Patient consulted so far?",
      placeholder: "",
    },
  ],
});

const secondColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",
  fields: [
    {
      type: FieldTypes.INPUT,
      name: "avg_consulted",
      inputType: "number",
      label: "Average Number of Patient you can consult in a week",
      placeholder: "",
    },
    {
      type: FieldTypes.TEXTAREA,
      name: "awardsAndPublications",
      label: "Awards/Publications if any",
      resize: "both",
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
