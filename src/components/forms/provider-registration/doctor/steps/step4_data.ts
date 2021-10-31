import {
  FieldTypes, FormDataType,
} from "../../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.ROW,
  name: "first",
  fields: [
    {
      type: FieldTypes.RADIO,
      name: "specialitiesColumm1",
      label: "",
      options: [{
        value: "Any Speciality",
        label: "Any Speciality",
      },
      {
        value: "Allergy Specialist",
        label: "Allergy Specialist",
      },
      {
        value: "Andrology",
        label: "Andrology",
      },
      {
        value: "Anesthesiologist/Chronic",
        label: "Anesthesiologist/Chronic",
      },
      {
        value: "Pain Specialist",
        label: "Pain Specialist",
      },
      {
        value: "Anesthesiology",
        label: "Anesthesiology",
      },
      {
        value: "Audiology",
        label: "Audiology",
      },
      {
        value: "Ayurveda Specialist",
        label: "Ayurveda Specialist",
      },
      {
        value: "Bariatric Surgery",
        label: "Bariatric Surgery",
      },
      {
        value: "Cardiology",
        label: "Cardiology",
      },
      {
        value: "Cardiothoracic Surgery",
        label: "Cardiothoracic Surgery",
      },
      {
        value: "Child Health",
        label: "Child Health",
      },
      {
        value: "Childbirth Educator",
        label: "Childbirth Educator",
      },
      {
        value: "Chiropractor",
        label: "Chiropractor",
      },
      {
        value: "Clinical Genetics",
        label: "Clinical Genetics",
      },
      {
        value: "Community Medicine",
        label: "Community Medicine",
      },
      {
        value: "Cosmetology",
        label: "Cosmetology",
      },
      {
        value: "Critical Care Physician",
        label: "Critical Care Physician",
      },
      {
        value: "Dentistry",
        label: "Dentistry",
      },
      {
        value: "Dermatology",
        label: "Dermatology",
      },
      {
        value: "Diabetology",
        label: "Diabetology",
      },
      {
        value: "Dietician",
        label: "Dietician",
      },
      {
        value: "Endocrinology",
        label: "Endocrinology",
      },
      {
        value: "Endodontist",
        label: "Endodontist",
      },
      {
        value: "Family Physician",
        label: "Family Physician",
      },
      {
        value: "Fetal Medicine",
        label: "Fetal Medicine",
      },
      {
        value: "Fitness Expert",
        label: "Fitness Expert",
      },
      {
        value: "Forensic Medicine",
        label: "Forensic Medicine",
      },
      {
        value: "General Medicine",
        label: "General Medicine",
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

const secondColumn = () :FormDataType => ({
  type: FieldTypes.ROW,
  name: "second",
  fields: [
    {
      type: FieldTypes.RADIO,
      name: "specialitiesColumm2",
      label: "",
      options: [{
        value: "General Practitioner",
        label: "General Practitioner",
      },
      {
        value: "General Surgery",
        label: "General Surgery",
      },
      {
        value: "Geriatrics",
        label: "Geriatrics",
      },
      {
        value: "Hair Transplant Surgeon",
        label: "Hair Transplant Surgeon",
      },
      {
        value: "Hematology",
        label: "Hematology",
      },
      {
        value: "HIV/AIDS Specialist",
        label: "HIV/AIDS Specialist",
      },
      {
        value: "Homeopathy",
        label: "Homeopathy",
      },
      {
        value: "Human Anatomy Specialist",
        label: "Human Anatomy Specialist",
      },
      {
        value: "Infectious Diseases",
        label: "Infectious Diseases",
      },
      {
        value: "Infertility",
        label: "Infertility",
      },
      {
        value: "Integrative Medicine",
        label: "Integrative Medicine",
      },
      {
        value: "Internal Medicine",
        label: "Internal Medicine",
      },
      {
        value: "Interventional Radiology",
        label: "Interventional Radiology",
      },
      {
        value: "Lactation Counselor",
        label: "Lactation Counselor",
      },
      {
        value: "Maxillofacial Prosthodontist",
        label: "Maxillofacial Prosthodontist",
      },
      {
        value: "Medical Gastroenterology",
        label: "Medical Gastroenterology",
      },
      {
        value: "Medical Oncologist",
        label: "Medical Oncologist",
      },
      {
        value: "Medical Oncology",
        label: "Medical Oncology",
      },
      {
        value: "Metabolic Surgery",
        label: "Metabolic Surgery",
      },
      {
        value: "Microbiology",
        label: "Microbiology",
      },
      {
        value: "Naturopathy",
        label: "Naturopathy",
      },
      {
        value: "Nephrology",
        label: "Nephrology",
      },
      {
        value: "Neuro Surgery",
        label: "Neuro Surgery",
      },
      {
        value: "Neurology",
        label: "Neurology",
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
  type: FieldTypes.COLUMN,
  name: "step1",
  fields: [
    firstColumn(),
    secondColumn(),
  ],
});

export default data;
export const step4Data = data;
