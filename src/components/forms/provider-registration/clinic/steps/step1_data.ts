import { FieldTypes, FormDataType } from "../../../types/form";
import MobileNo from "../../custom/MobileNo";
import TnC from "../../custom/TnC";

const firstColumn = (watch:any) :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  label: "Hospital Details",

  fields: [
    {
      type: FieldTypes.INPUT,
      name: "full_name",
      label: "Hospital Name",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
        pattern: {
          value: /^[\w\s]+$/,
          message: "Only letters and underscore allowed",
        },
      },

    },

    {
      type: FieldTypes.FILE,
      name: "profile_photo",
      label: "Upload Logo",
      accept: "image/*",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.CUSTOM,
      name: "contact_no",
      label: "Office Number",
      component: MobileNo,
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "email",
      label: "Email",
      placeholder: "Email",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
        pattern: {
          value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          message: "Invalid email address",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "number_of_practitioners",
      label: "Number of Practitioners",
      inputType: "number",
      min: 0,
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
        min: {
          value: 0,
          message: "Minimum value is 1",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "password",
      label: "Choose a Password",
      placeholder: "Password",
      inputType: "password",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
        pattern: {
          value: /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/,
          message: "Minimum eight characters, at least one letter and one number",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "confirm_password",
      label: "Confirm Password",
      inputType: "password",
      placeholder: "Password",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
        validate: (v) => (v === watch("password") ? true : "Passwords do not match"),
        deps: ["password"],
      },
    },
  ],
});

const secondColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",
  label: "Address",

  fields: [
    {
      type: FieldTypes.INPUT,
      name: "country",
      label: "Country",
      placeholder: "Country",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "street",
      label: "Street Address",
      placeholder: "Address",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "state",
      label: "State",
      placeholder: "State",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
        deps: ["country"],
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "city",
      label: "City",
      placeholder: "City",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
        deps: ["state"],
      },
    },

    {
      type: FieldTypes.INPUT,
      name: "zip_code",
      label: "Zip Code",
      placeholder: "Zip Code",
    },

    {
      type: FieldTypes.CHECKBOX,
      name: "businessAssociateAgreement",
      label: "",
      direction: "column",
      options: [{
        value: "businessAssociateAgreement",
        label: "I have read and agree to the Business Associate Agreement",
        required: true,
      }],
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.CUSTOM,
      name: "ALL",
      label: "Terms & Privacy",
      component: TnC,
    },
  ],
});

const data = (watch: any) :FormDataType => ({
  type: FieldTypes.ROW,
  name: "step1",
  fields: [
    firstColumn(watch),
    secondColumn(),
  ],
});

export default data;
export const step1Data = data;
