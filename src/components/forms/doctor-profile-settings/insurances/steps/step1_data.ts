import {
  FieldTypes, FormDataType,
} from "../../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.CHECKBOX,
      name: "accept_all_insurance",
      label: "",
      options: [
        {
          value: "all",
          label: "I accept all Insurances",
        },
      ],
    },
    {
      type: FieldTypes.MULTISELECT,
      name: "accepted_insurance",
      label: "Accepted Insurances",
      options: [{
        value: "AARP",
        label: "AARP",
      },
      {
        value: "Aetna",
        label: "Aetna",
      },
      {
        value: "Alabama",
        label: "Alabama",
      },
      {
        value: "Ambetter",
        label: "Ambetter",
      },
      {
        value: "American Family Insurance",
        label: "American Family Insurance",
      },
      {
        value: "American National Insurance Company",
        label: "American National Insurance Company",
      },
      {
        value: "Amerigroup",
        label: "Amerigroup",
      },
      {
        value: "Anthem",
        label: "Anthem",
      },
      {
        value: "Bankers Life and Casualty",
        label: "Bankers Life and Casualty",
      },
      {
        value: "Blue Cross and Blue Shield Association",
        label: "Blue Cross and Blue Shield Association",
      },
      {
        value: "Blue Cross of California",
        label: "Blue Cross of California",
      },
      {
        value: "Blue Cross Blue Shield of New Jersey",
        label: "Blue Cross Blue Shield of New Jersey",
      },
      {
        value: "Blue Cross Blue Shield of North Carolina",
        label: "Blue Cross Blue Shield of North Carolina",
      },
      {
        value: "Blue Cross Blue Shield of Massachusetts",
        label: "Blue Cross Blue Shield of Massachusetts",
      },
      {
        value: "Blue Cross Blue Shield of Tennessee",
        label: "Blue Cross Blue Shield of Tennessee",
      },
      {
        value: "California Physicians Service",
        label: "California Physicians Service",
      },
      {
        value: "Carefirst Inc",
        label: "Carefirst Inc",
      },
      {
        value: "Capital District Physicians' Health Plan",
        label: "Capital District Physicians' Health Plan",
      },
      {
        value: "CareSource",
        label: "CareSource",
      },
      {
        value: "Cambia Health Solutions",
        label: "Cambia Health Solutions",
      },
      {
        value: "Centene Corporation",
        label: "Centene Corporation",
      },
      {
        value: "Cigna",
        label: "Cigna",
      },
      {
        value: "Conseco",
        label: "Conseco",
      },
      {
        value: "Coventry Health Care",
        label: "Coventry Health Care",
      },
      {
        value: "CubCare",
        label: "CubCare",
      },
      {
        value: "CVS",
        label: "CVS",
      },
      {
        value: "Delta Dental",
        label: "Delta Dental",
      },
      {
        value: "EmblemHealth",
        label: "EmblemHealth",
      },
      {
        value: "Fidelis Care",
        label: "Fidelis Care",
      },
      {
        value: "Fortis",
        label: "Fortis",
      },
      {
        value: "Geisinger",
        label: "Geisinger",
      },
      {
        value: "Golden Rule Insurance Company",
        label: "Golden Rule Insurance Company",
      },
      {
        value: "Group Health Cooperative",
        label: "Group Health Cooperative",
      },
      {
        value: "Group Health Incorporated",
        label: "Group Health Incorporated",
      },
      {
        value: "Guidewell Mutual Holding",
        label: "Guidewell Mutual Holding",
      },
      {
        value: "Harvard Pilgrim Health Care",
        label: "Harvard Pilgrim Health Care",
      },
      {
        value: "Health Net",
        label: "Health Net",
      },
      {
        value: "HealthMarkets",
        label: "HealthMarkets",
      },
      {
        value: "HealthPartners",
        label: "HealthPartners",
      },
      {
        value: "HealthSpring",
        label: "HealthSpring",
      },
      {
        value: "Highmark",
        label: "Highmark",
      },
      {
        value: "Horace Mann Educators Corporation",
        label: "Horace Mann Educators Corporation",
      },
      {
        value: "Humana",
        label: "Humana",
      },
      {
        value: "Independence Blue Cross",
        label: "Independence Blue Cross",
      },
      {
        value: "Independence Health Group",
        label: "Independence Health Group",
      },
      {
        value: "Kaiser Permanente",
        label: "Kaiser Permanente",
      },
      {
        value: "Kaleida Health",
        label: "Kaleida Health",
      },
      {
        value: "Liberty Medical",
        label: "Liberty Medical",
      },
      {
        value: "Local Initiative Health Authority",
        label: "Local Initiative Health Authority",
      },
      {
        value: "MaineCare",
        label: "MaineCare",
      },
      {
        value: "MassHealth",
        label: "MassHealth",
      },
      {
        value: "Medicaid",
        label: "Medicaid",
      },
      {
        value: "Medical Mutual of Ohio",
        label: "Medical Mutual of Ohio",
      },
      {
        value: "MEGA Life and Health Insurance",
        label: "MEGA Life and Health Insurance",
      },
      {
        value: "Metropolitan",
        label: "Metropolitan",
      },
      {
        value: "Molina Healthcare",
        label: "Molina Healthcare",
      },
      {
        value: "Mutual of Omaha",
        label: "Mutual of Omaha",
      },
      {
        value: "Oscar Health",
        label: "Oscar Health",
      },
      {
        value: "Oxford Health Plans",
        label: "Oxford Health Plans",
      },
      {
        value: "Premera Blue Cross",
        label: "Premera Blue Cross",
      },
      {
        value: "Principal Financial Group",
        label: "Principal Financial Group",
      },
      {
        value: "Shelter Insurance",
        label: "Shelter Insurance",
      },
      {
        value: "State Farm",
        label: "State Farm",
      },
      {
        value: "Thrivent Financial for Lutherans",
        label: "Thrivent Financial for Lutherans",
      },
      {
        value: "United American Insurance Company",
        label: "United American Insurance Company",
      },
      {
        value: "UnitedHealth Group",
        label: "UnitedHealth Group",
      },
      {
        value: "Unitrin",
        label: "Unitrin",
      },
      {
        value: "Universal American Corporation",
        label: "Universal American Corporation",
      },
      {
        value: "UPMC Health System",
        label: "UPMC Health System",
      },
      {
        value: "WellCare",
        label: "WellCare",
      },
      {
        value: "West Virginia Medicaid",
        label: "West Virginia Medicaid",
      },
      {
        value: "Wisconsin Medicaid",
        label: "Wisconsin Medicaid",
      },
      {
        value: "Wyoming Medicaid",
        label: "Wyoming Medicaid",
      },
      ],
      visibilityDependencies: [
        {
          name: "accept_all_insurance",
          value: (value) => !(value as string[])?.includes("all"),
        },
      ],
      rules: {
        deps: ["accept_all_insurance"],
      },
    },
  ],
});

const data = () :FormDataType => ({
  type: FieldTypes.ROW,
  name: "step1",
  fields: [
    firstColumn(),
  ],
});

export default data;
export const step1Data = data;
