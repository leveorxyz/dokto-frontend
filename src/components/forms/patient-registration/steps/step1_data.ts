import format from "date-fns/format";
import isAfter from "date-fns/isAfter";
import parseISO from "date-fns/parseISO";

import {
  FieldTypes, FormDataType,
} from "../../types/form";
import MobileNo from "../../provider-registration/custom/MobileNo";

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

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.INPUT,
      name: "first_name",
      label: "First Name",
      placeholder: "Enter Your First Name",
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
      type: FieldTypes.INPUT,
      name: "last_name",
      label: "Last Name",
      placeholder: "Enter Your Last Name",
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
        label: "Yes, I am the parent/guardian/guarantor",
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
      label: "Name of Parent or Guardian",
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
      placeholder: "Select",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
  ],
});

const secondColumn = (watch: any) :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",
  fields: [
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
  ],
});

const data = (watch: any) :FormDataType => ({
  type: FieldTypes.ROW,
  name: "step1",
  fields: [
    firstColumn(),
    secondColumn(watch),
  ],
});

export default data;
export const step1Data = data;
