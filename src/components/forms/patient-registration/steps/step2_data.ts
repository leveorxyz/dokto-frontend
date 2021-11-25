import { Country, State, City } from "country-state-city";
import {
  FieldTypes, FormDataType,
} from "../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  label: "Identification Verification",
  fields: [
    {
      type: FieldTypes.SELECT,
      name: "identification_type",
      label: "Identification Type",
      options: [
        {
          label: "Passport",
          value: "PASSPORT",
        },
        {
          label: "Driver's license",
          value: "DRIVER'S LICENSE",
        },
        {
          label: "State ID",
          value: "STATE ID",
        },
      ],
      placeholder: "Select Identification type",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      name: "identification_number",
      label: "Identity Verification Number",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
      bottomText: "Enter your passport, driver's license or State ID number",
    },
    {
      type: FieldTypes.FILE,
      name: "identification_photo",
      label: "Upload Your Identification",
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

const secondColumn = (watch: any) :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",
  label: "Address",
  fields: [
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
      placeholder: "Code",
    },
  ],
});

const data = (watch: any) :FormDataType => ({
  type: FieldTypes.ROW,
  name: "step2",
  fields: [
    firstColumn(),
    secondColumn(watch),
  ],
});

export default data;
export const step2Data = data;
