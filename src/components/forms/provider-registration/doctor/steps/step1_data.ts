import format from "date-fns/format";
import isAfter from "date-fns/isAfter";
import parseISO from "date-fns/parseISO";

import {
  FieldTypes, FormDataType,
} from "../../../types/form";
import MobileNo from "../../custom/MobileNo";

const isDateLessThan18Years = (value: unknown) :boolean => {
  const date = new Date();
  const test = isAfter(
    parseISO(value as string),
    new Date(
      date.getFullYear() - 18,
      date.getMonth(),
      date.getDate(),
    ),
  );

  return test;
};

const firstColumn = (watch: any) :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.INPUT,
      name: "full_name",
      label: "Full Name",
      placeholder: "",
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
      type: FieldTypes.CUSTOM,
      name: "contact_no",
      label: "Mobile Number",
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
  fields: [
    {
      type: FieldTypes.FILE,
      name: "profile_photo",
      label: "Profile Photo",
      accept: "image/*",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.RADIO,
      name: "gender",
      label: "Gender",
      direction: "row",
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
      max: format(new Date(), "yyyy-MM-dd"),
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
      type: FieldTypes.CHECKBOX,
      name: "is_parent",
      label: "Date of birth is under 18 years",
      direction: "column",
      options: [{
        value: "is_parent",
        label: "Yes, I’m a parent/guardian/guarantor",
        required: true,
      }],
      visibilityDependencies: [
        {
          name: "date_of_birth",
          value: isDateLessThan18Years,
        },
      ],
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
        deps: ["date_of_birth"],
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "parent_name",
      label: "Parent's name",
      visibilityDependencies: [
        {
          name: "date_of_birth",
          value: isDateLessThan18Years,
        },
      ],
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
        deps: ["date_of_birth"],
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
