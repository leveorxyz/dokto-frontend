import {
  FieldTypes, FormDataType,
} from "../../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.INPUT,
      name: "notification_email",
      label: "Email Notification",
      bottomText: "All future emails will be sent to the address above",
      placeholder: "Change designated email address",
      rules: {
        pattern: {
          value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          message: "Invalid email address",
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
  ],
});

export default data;
export const step1Data = data;
