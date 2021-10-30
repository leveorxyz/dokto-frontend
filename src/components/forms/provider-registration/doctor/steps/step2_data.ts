import {
  FieldTypes, FormDataType,
} from "../../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.SELECT,
      name: "identity_verification",
      label: "Identity Verification",
      options: [{
        value: "Identity Verification",
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
      name: "zip_code",
      label: "Zip Code",
      placeholder: "Zip Code",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
        pattern: {
          value: /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/,
          message: "Maximum eight characters",
        },
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
      type: FieldTypes.INPUT,
      name: "address",
      label: "Address",
      placeholder: "Address",
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
      name: "state",
      label: "State",
      options: [{
        value: "State",
        label: "state",
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
      type: FieldTypes.SELECT,
      name: "city",
      label: "City",
      options: [{
        value: "City",
        label: "city",
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
  ],
});

const data = () :FormDataType => ({
  type: FieldTypes.ROW,
  name: "step1",
  fields: [
    firstColumn(),
    secondColumn(),
  ],
});

export default data;
