import {
  FieldTypes, FormDataType,
} from "../../../types/form";
import UserID from "./UserID";

const firstColumn = (watch: any) :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.CUSTOM,
      component: UserID,
      name: "username",
      label: "Choose your User ID",
      placeholder: "User ID",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "full_name",
      label: "Name",
      placeholder: "",
      leftAddon: "Dr",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
        pattern: {
          value: /^\w+$/,
          message: "Only letters and underscore allowed",
        },
      },
    },
    {
      type: FieldTypes.SELECT,
      name: "contact_no",
      label: "Mobile Number",
      options: [{
        value: "Nigeria (+234)",
        label: "nigeria",
      },
      {
        value: "Bangladesh (+880)",
        label: "bangladesh",
      },
      {
        value: "USA (+1)",
        label: "usa",
      }],
      placeholder: "",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "password",
      label: "Choose a Password",
      placeholder: "Password",
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
  fields: [
    {
      type: FieldTypes.FILE,
      name: "profile_photo",
      label: "Profile Photo",
      accept: "image/*",
      rules: {
        validate: (v: FileList) => (v?.length ? true : "This field is required"),
      },
    },
    {
      type: FieldTypes.RADIO,
      name: "gender",
      label: "Gender",
      options: [{
        value: "Male",
        label: "Male",
      },
      {
        value: "Female",
        label: "Female",
      },
      {
        value: "Third Gender",
        label: "Third Gender",
      }],
      placeholder: "",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "date_of_birth",
      label: "Date Of Birth",
      placeholder: "YYYY/MM/DD",
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
