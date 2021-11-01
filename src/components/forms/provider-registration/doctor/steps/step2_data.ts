import { Country, State, City } from "country-state-city";
import {
  FieldTypes, FormDataType,
} from "../../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.SELECT,
      name: "identification_type",
      label: "Identification type",
      options: [
        {
          label: "Passport",
          value: "passport",
        },
        {
          label: "Driver's license",
          value: "driving_license",
        },
        {
          label: "National ID",
          value: "national_id",
        },
      ],
      placeholder: "Select",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.FILE,
      name: "identity_number",
      label: "Identity Verification Number",
      accept: "image/*",
      rules: {
        validate: (v: FileList) => (v?.length ? true : "This field is required"),
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
});

const secondColumn = (watch: any) :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",
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
      label: "Street Address",
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
