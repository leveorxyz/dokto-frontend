import { State, City, Country } from "country-state-city";
import { FieldTypes, FormDataType } from "../../../types/form";
import MobileNo from "../../custom/MobileNo";

const firstColumn = (watch:any) :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.INPUT,
      name: "username",
      label: "User ID",
      placeholder: "",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
        // pattern: {
        //   value: /^[\w\s]+$/,
        //   message: "Only letters and underscore allowed",
        // },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "full_name",
      label: "Clinic Name",
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
      type: FieldTypes.SELECT,
      name: "country",
      label: "Country",
      options: Country.getAllCountries().map((country) => ({
        label: country.name,
        value: country.isoCode,
      })),
      placeholder: "Select",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.SELECT,
      name: "state",
      label: "State",
      placeholder: "Select",
      options: State.getStatesOfCountry(watch("country")).map((state) => ({
        label: state.name,
        value: state.isoCode,
      })),
      rules: {
        required: {
          value: State.getStatesOfCountry(watch("country")).length > 0,
          message: "This field is required",
        },
        deps: ["country"],
      },
    },
    {
      type: FieldTypes.SELECT,
      name: "city",
      label: "City",
      placeholder: "Select",
      options: City.getCitiesOfState(watch("country"), watch("state")).map((city) => ({
        label: city.name,
        value: city.name,
      })),
      rules: {
        required: {
          value: City.getCitiesOfState(watch("country"), watch("state")).length > 0,
          message: "This field is required",
        },
        deps: ["state"],
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "street",
      label: "Street",
      placeholder: "Street",
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
      placeholder: "Code",
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

    {
      type: FieldTypes.CHECKBOX,
      name: "businessAssociateAgreement",
      label: "",
      direction: "column",
      options: [{
        value: "is_parent",
        label: "I have read and agree to the Business Associate Agreement",
        required: true,
      }],
      // visibilityDependencies: [
      //   {
      //     name: "date_of_birth",
      //     value: isDateLessThan18Years,
      //   },
      // ],
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
        // deps: ["date_of_birth"],
      },
    },
    {
      type: FieldTypes.CHECKBOX,
      name: "terms of use and privacy policy",
      label: "",
      direction: "column",
      options: [{
        value: "is_parent",
        label: "I agree to the terms of use and privacy policy",
        required: true,
      }],
      // visibilityDependencies: [
      //   {
      //     name: "date_of_birth",
      //     value: isDateLessThan18Years,
      //   },
      // ],
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
        // deps: ["date_of_birth"],
      },
    },
  ],
});

const data = (watch: any) :FormDataType => ({
  type: FieldTypes.ROW,
  name: "step1",
  fields: [
    firstColumn(watch),
    secondColumn(watch),
  ],
});

export default data;
export const step1Data = data;
