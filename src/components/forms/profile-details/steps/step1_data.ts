import { Country, State, City } from "country-state-city";
import format from "date-fns/format";
import {
  FieldTypes, FormDataType,
} from "../../types/form";
import MobileNo from "../../provider-registration/custom/MobileNo";
import doctorProfile from "../../../../atoms/doctorProfile";

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
      rules: {
        required: {
          value: true,
          message: "This field is required",
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
  ],
});

const data = (watch: any) :FormDataType => ({
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
          },
        },
      ],
    },
  ],
});

export default data;
export const step1Data = data;
