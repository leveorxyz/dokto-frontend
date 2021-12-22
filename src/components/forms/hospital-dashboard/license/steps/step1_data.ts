import format from "date-fns/format";
import {
  FieldTypes, FormDataType,
} from "../../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",
  fields: [
    {
      type: FieldTypes.FILE,
      name: "license_file",
      label: "License Upload",
      accept: "image/*, application/pdf",
      bottomText: "License will not be shown publicly",
    },
    {
      type: FieldTypes.INPUT,
      name: "license_expiration",
      label: "Current License Expiration Date",
      min: format(new Date(), "yyyy-MM-dd"),
      inputType: "date",
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
