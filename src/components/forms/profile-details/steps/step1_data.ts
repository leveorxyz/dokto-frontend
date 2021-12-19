import format from "date-fns/format";
import {
  FieldTypes, FormDataType,
} from "../../types/form";

const secondRow = () :FormDataType => ({
  type: FieldTypes.ROW,
  name: "first",
  fields: [
    {
      type: FieldTypes.INPUT,
      name: "contact_no",
      label: "Mobile Number",
      placeholder: "Mobile Number",
    },
    {
      type: FieldTypes.INPUT,
      name: "email",
      label: "Email",
      placeholder: "Email",
      rules: {
        pattern: {
          value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          message: "Invalid email address",
        },
      },
    },
  ],
});

const thirdRow = () :FormDataType => ({
  type: FieldTypes.ROW,
  name: "second",
  fields: [
    {
      type: FieldTypes.INPUT,
      name: "date_of_birth",
      label: "Date Of Birth",
      max: format(new Date(), "yyyy-MM-dd"),
      inputType: "date",
      customProperties: {
        format: "yyyy/MM/dd",
      },
    },
    {
      type: FieldTypes.SELECT,
      name: "gender",
      label: "Gender",
      options: [{
        value: "MALE",
        label: "Male",
      },
      {
        value: "FEMALE",
        label: "Female",
      },
      {
        value: "OTHER",
        label: "Other",
      },
      {
        value: "PREFER NOT TO SAY",
        label: "Prefer not to say",
      }],
      placeholder: "Select",
    },
  ],
});

const data = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "step1",
  fields: [
    {
      type: FieldTypes.INPUT,
      name: "full_name",
      label: "Full Name",
      placeholder: "",
      rules: {
        pattern: {
          value: /^[\w\s]+$/,
          message: "Only letters and underscore allowed",
        },
      },
    },
    secondRow(),
    thirdRow(),
    {
      type: FieldTypes.SECTION,
      name: "address",
      label: "Address",
      fields: [
        {
          type: FieldTypes.INPUT,
          name: "street",
          label: "Street Address",
          placeholder: "Street Address",
        },
        {
          type: FieldTypes.INPUT,
          name: "country",
          label: "Country",
          placeholder: "Country",
        },
        {
          type: FieldTypes.INPUT,
          name: "state",
          label: "State",
          placeholder: "State",
          rules: {
            deps: ["country"],
          },
        },
        {
          type: FieldTypes.INPUT,
          name: "city",
          label: "City",
          placeholder: "City",
          rules: {
            deps: ["state"],
          },
        },
        {
          type: FieldTypes.INPUT,
          name: "zip_code",
          label: "Zip Code",
          placeholder: "Zip Code",
        },
      ],
    },
  ],
});

export default data;
export const step1Data = data;
