import {
  FieldTypes, FormDataType,
} from "../../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.SWITCH,
      name: "temporary_disable",
      label: "Disable my account temporarily",
      bottomText: "Unable to work for a brief period? Disable your account temporarily here. Remember to reactivate as soon as you are ready to start working with patients",
    },
  ],
});

const data = () :FormDataType => ({
  type: FieldTypes.ROW,
  name: "step1",
  fields: [
    firstColumn(),
  ],
});

export default data;
export const step1Data = data;
