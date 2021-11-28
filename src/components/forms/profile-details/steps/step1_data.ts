import {
  FieldTypes, FormDataType,
} from "../../types/form";
import MobileNo from "../../provider-registration/custom/MobileNo";
import doctorProfile from "../../../../atoms/doctorProfile";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.INPUT,
      name: "first_name",
      label: "First Name",
      placeholder: "",
      rules: {
        pattern: {
          value: /^[\w\s]+$/,
          message: "Only letters and underscore allowed",
        },
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
    {
      type: FieldTypes.CUSTOM,
      name: "contact_no",
      label: "Mobile Number",
      component: MobileNo,
    },
    {
      type: FieldTypes.FILE,
      name: "profile_photo",
      label: "Profile Photo",
      accept: "image/*",
    },
  ],
});

const secondColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",
  fields: [
    {
      type: FieldTypes.INPUT,
      name: "last_name",
      label: "Last Name",
      placeholder: "",
      rules: {
        pattern: {
          value: /^[\w\s]+$/,
          message: "Only letters and underscore allowed",
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
export const step1Data = data;
