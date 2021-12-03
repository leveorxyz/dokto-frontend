import {
  FieldTypes, FormDataType,
} from "../../types/form";

const row = ():FormDataType => ({
  type: FieldTypes.ROW,
  name: "description",
  fields: [{
    type: FieldTypes.TEXTAREA,
    name: "professional_bio",
    label: "Assessment",
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
  type: FieldTypes.ROW,
  name: "step1",
  fields: [
    row(),
  ],
});

export default data;
export const step1Data = data;
