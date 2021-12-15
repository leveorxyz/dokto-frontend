import format from "date-fns/format";
import {
  FieldTypes, FormDataType,
} from "../../../types/form";

import TnC from "../../custom/TnC";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.SELECT,
      name: "profession_name",
      label: "Profession Name",
      options: [
        {
          label: "Acupuncturist",
          value: "Acupuncturist",
          profession_code: "1",
        },
        {
          label: "Allergist",
          value: "Allergist",
          profession_code: "2",
        },
        {
          label: "Audiologist",
          value: "Audiologist",
          profession_code: "3",
        },
        {
          label: "Cardiologist",
          value: "Cardiologist",
          profession_code: "4",
        },
        {
          label: "Chiropractor",
          value: "Chiropractor",
          profession_code: "5",
        },
        {
          label: "Dentist",
          value: "Dentist",
          profession_code: "6",
        },
        {
          label: "Dermatologist",
          value: "Dermatologist",
          profession_code: "7",
        },
        {
          label: "Dietitian",
          value: "Dietitian",
          profession_code: "8",
        },
        {
          label: "Ear, Nose & Throat Doctor",
          value: "Ear, Nose & Throat Doctor",
          profession_code: "9",
        },
        {
          label: "Emergency Medicine Physician",
          value: "Emergency Medicine Physician",
          profession_code: "10",
        },
        {
          label: "Endocrinologist",
          value: "Endocrinologist",
          profession_code: "11",
        },
        {
          label: "Endodontist",
          value: "Endodontist",
          profession_code: "12",
        },
        {
          label: "Eye Doctor",
          value: "Eye Doctor",
          profession_code: "13",
        },
        {
          label: "Family Physician",
          value: "Family Physician",
          profession_code: "14",
        },
        {
          label: "Gastroenterologist",
          value: "Gastroenterologist",
          profession_code: "15",
        },
        {
          label: "Hand Surgeon",
          value: "Hand Surgeon",
          profession_code: "16",
        },
        {
          label: "Hearing Specialist",
          value: "Hearing Specialist",
          profession_code: "17",
        },
        {
          label: "Hematologist",
          value: "Hematologist",
          profession_code: "18",
        },
        {
          label: "Infectious Disease Specialist",
          value: "Infectious Disease Specialist",
          profession_code: "19",
        },
        {
          label: "Infertility Specialist",
          value: "Infertility Specialist",
          profession_code: "20",
        },
        {
          label: "Internist",
          value: "Internist",
          profession_code: "21",
        },
        {
          label: "Naturopathic Doctor",
          value: "Naturopathic Doctor",
          profession_code: "22",
        },
        {
          label: "Nephrologist",
          value: "Nephrologist",
          profession_code: "23",
        },
        {
          label: "Neurologist",
          value: "Neurologist",
          profession_code: "24",
        },
        {
          label: "Neurosurgeon",
          value: "Neurosurgeon",
          profession_code: "25",
        },
        {
          label: "Nurse Practitioner",
          value: "Nurse Practitioner",
          profession_code: "26",
        },
        {
          label: "Nutritionist",
          value: "Nutritionist",
          profession_code: "27",
        },
        {
          label: "OB-GYN",
          value: "OB-GYN",
          profession_code: "28",
        },
        {
          label: "Oncologist",
          value: "Oncologist",
          profession_code: "29",
        },
        {
          label: "Ophthalmologist",
          value: "Ophthalmologist",
          profession_code: "30",
        },
        {
          label: "Optometrist",
          value: "Optometrist",
          profession_code: "31",
        },
        {
          label: "Oral Surgeon",
          value: "Oral Surgeon",
          profession_code: "32",
        },
        {
          label: "Orthodontist",
          value: "Orthodontist",
          profession_code: "33",
        },
        {
          label: "Orthopedic Surgeon",
          value: "Orthopedic Surgeon",
          profession_code: "34",
        },
        {
          label: "Pain Management Specialist",
          value: "Pain Management Specialist",
          profession_code: "35",
        },
        {
          label: "Pediatric Dentist",
          value: "Pediatric Dentist",
          profession_code: "36",
        },
        {
          label: "Pediatric Urgent Care Specialist",
          value: "Pediatric Urgent Care Specialist",
          profession_code: "37",
        },
        {
          label: "Pediatrician",
          value: "Pediatrician",
          profession_code: "38",
        },
        {
          label: "Periodontist",
          value: "Periodontist",
          profession_code: "39",
        },
        {
          label: "Physiatrist",
          value: "Physiatrist",
          profession_code: "40",
        },
        {
          label: "Physical Therapist",
          value: "Physical Therapist",
          profession_code: "41",
        },
        {
          label: "Plastic Surgeon",
          value: "Plastic Surgeon",
          profession_code: "42",
        },
        {
          label: "Podiatrist",
          value: "Podiatrist",
          profession_code: "43",
        },
        {
          label: "Primary Care Doctor",
          value: "Primary Care Doctor",
          profession_code: "44",
        },
        {
          label: "Prosthodontist",
          value: "Prosthodontist",
          profession_code: "45",
        },
        {
          label: "Psychiatrist",
          value: "Psychiatrist",
          profession_code: "46",
        },
        {
          label: "Psychologist",
          value: "Psychologist",
          profession_code: "47",
        },
        {
          label: "Psychotherapist",
          value: "Psychotherapist",
          profession_code: "48",
        },
        {
          label: "Pulmonologist",
          value: "Pulmonologist",
          profession_code: "49",
        },
        {
          label: "Radiologist",
          value: "Radiologist",
          profession_code: "50",
        },
        {
          label: "Rheumatologist",
          value: "Rheumatologist",
          profession_code: "51",
        },
        {
          label: "Sleep Medicine Specialist",
          value: "Sleep Medicine Specialist",
          profession_code: "52",
        },
        {
          label: "Sports Medicine Specialist",
          value: "Sports Medicine Specialist",
          profession_code: "53",
        },
        {
          label: "Surgeon",
          value: "Surgeon",
          profession_code: "54",
        },
        {
          label: "Therapist / Counselor",
          value: "Therapist / Counselor",
          profession_code: "55",
        },
        {
          label: "Travel Medicine Specialist",
          value: "Travel Medicine Specialist",
          profession_code: "56",
        },
        {
          label: "Urgent Care Specialist",
          value: "Urgent Care Specialist",
          profession_code: "57",
        },
        {
          label: "Urologist",
          value: "Urologist",
          profession_code: "58",
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
      type: FieldTypes.MULTISELECT,
      name: "services",
      label: "Services",
      options: [
        {
          label: "Acupressure",
          value: "Acupressure",
        },
        {
          label: "Acupuncture",
          value: "Acupuncture",
        },
        {
          label: "Anxiety",
          value: "Anxiety",
        },
        {
          label: "Aromatherapy",
          value: "Aromatherapy",
        },
        {
          label: "Back Pain",
          value: "Back Pain",
        },
        {
          label: "Bariatric Surgery",
          value: "Bariatric Surgery",
        },
        {
          label: "Bariatric Surgeon",
          value: "Bariatric Surgeon",
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
      name: "license_file",
      label: "Current License",
      accept: "image/*, application/pdf",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.INPUT,
      inputType: "date",
      name: "license_expiration",
      min: format(new Date(), "yyyy-MM-dd"),
      label: "Current License Expiration Date",
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
      type: FieldTypes.TEXTAREA,
      name: "professional_bio",
      label: "Professional Bio",
      resize: "vertical",
      rules: {
        maxLength: {
          value: 200,
          message: "Must be less than 200 characters",
        },
      },
    },
    {
      type: FieldTypes.ARRAY,
      name: "experience",
      label: "Experience",
      addButtonText: "Add Experience +",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
      fields: [
        {
          type: FieldTypes.INPUT,
          name: "establishment_name",
          label: "Establishment Name",
          placeholder: "Establishment Name",
          rules: {
            required: {
              value: true,
              message: "This field is required",
            },
            maxLength: {
              value: 50,
              message: "Must be less than 50 characters",
            },
          },
        },
        {
          type: FieldTypes.INPUT,
          name: "job_title",
          label: "Job Title",
          placeholder: "Job Title",
          rules: {
            required: {
              value: true,
              message: "This field is required",
            },
            maxLength: {
              value: 50,
              message: "Must be less than 50 characters",
            },
          },
        },
        {
          type: FieldTypes.INPUT,
          name: "start_date",
          label: "Start Date",
          max: format(new Date(), "yyyy-MM-dd"),
          inputType: "date",
          rules: {
            required: {
              value: true,
              message: "This field is required",
            },
          },
        },
        {
          type: FieldTypes.INPUT,
          name: "end_date",
          label: "End Date",
          max: format(new Date(), "yyyy-MM-dd"),
          inputType: "date",
        },
        {
          type: FieldTypes.TEXTAREA,
          name: "job_description",
          label: "Job Description",
          resize: "both",
          rules: {
            maxLength: {
              value: 200,
              message: "Must be less than 200 characters",
            },
          },
        },
      ],
    },
    {
      type: FieldTypes.TEXTAREA,
      name: "awards",
      label: "Awards/Publications if any",
      resize: "both",
    },
  ],
});

const secondColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",
  fields: [
    {
      type: FieldTypes.CHECKBOX,
      name: "accept_all_insurance",
      label: "I Accept All Insurances",
      options: [
        {
          value: "all",
          label: "Yes",
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
    {
      type: FieldTypes.RADIO,
      name: "group_1",
      label: "Business Associate Agreement",
      direction: "column",
      options: [{
        value: "I have read and agree to the Business Associate Agreement",
        label: "I have read and agree to the Business Associate Agreement",
      },
      {
        value: "I practise outside the United States and exempt from the Business Associate Agreement",
        label: "I practise outside the United States and exempt from the Business Associate Agreement",
      },
      ],
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.RADIO,
      name: "group_2",
      label: "HIPAA Agreement",
      direction: "column",
      options: [{
        value: "I have read and agree to the HIPAA Agreement",
        label: "I have read and agree to the HIPAA Agreement",
      },
      {
        value: "I practise outside the United States and exempt from the HIPAA Agreement",
        label: "I practise outside the United States and exempt from the HIPAA Agreement",
      },
      ],
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.RADIO,
      name: "group_3",
      label: "GDPR Laws",
      direction: "column",
      options: [{
        value: "I have read and agree to the GDPR Laws",
        label: "I have read and agree to the GDPR Laws",
      },
      {
        value: "I live outside the UK and EU and exempt from the GDPR Laws",
        label: "I live outside the UK and EU and exempt from the GDPR Laws",
      },
      ],
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
    },
    {
      type: FieldTypes.CUSTOM,
      name: "ALL",
      label: "Terms & Privacy",
      component: TnC,
    },
  ],
});

const data = () :FormDataType => ({
  type: FieldTypes.ROW,
  name: "step4",
  fields: [
    firstColumn(),
    secondColumn(),
  ],
});

export default data;
export const step4Data = data;
