import { Country, State, City } from "country-state-city";
import {
  FieldTypes, FormDataType,
} from "../../types/form";
import MobileNo from "../../provider-registration/doctor/steps/custom/MobileNo";

const firstColumn = (watch: any) :FormDataType => ({
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
      type: FieldTypes.RADIO,
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
      }],
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
      name: "street",
      label: "Address",
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
