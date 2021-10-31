import {
  FieldTypes, FormDataType,
} from "../../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.RADIO,
      name: "languages",
      label: "Languages",
      options: [{
        value: "English",
        label: "English",
      },
      {
        value: "Spanish",
        label: "Spanish",
      },
      {
        value: "French",
        label: "French",
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
      name: "college",
      label: "College",
      placeholder: "College",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "course_studied",
      label: "Course Studied",
      placeholder: "Course Studied",
      rules: {
        required: {
          value: true,
          message: "This field is required",
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
      name: "certificate_upload",
      label: "Certificate Upload",
      accept: "image/*",
      rules: {
        validate: (v: FileList) => (v?.length ? true : "This field is required"),
      },
    },
    {
      type: FieldTypes.SELECT,
      name: "specialties",
      label: "Specialties",
      options: [{
        value: "Specialties",
        label: "specialties",
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
export const step3Data = data;
