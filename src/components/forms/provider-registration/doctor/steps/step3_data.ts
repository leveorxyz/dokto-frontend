import format from "date-fns/format";
import {
  FieldTypes, FormDataType,
} from "../../../types/form";

const firstColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "first",
  fields: [
    {
      type: FieldTypes.CHECKBOX,
      name: "language",
      label: "Languages",
      direction: "row",
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
      type: FieldTypes.ARRAY,
      name: "education",
      label: "Education Profile",
      addButtonText: "Add Education Profile +",
      rules: {
        required: {
          value: true,
          message: "This field is required",
        },
      },
      fields: [
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
            maxLength: {
              value: 60,
              message: "Must be less than 60 characters",
            },
          },
        },
        {
          type: FieldTypes.INPUT,
          name: "course",
          label: "Course Studied",
          placeholder: "Course Studied",
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
          name: "year",
          label: "Year Graduated",
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
          type: FieldTypes.FILE,
          name: "certificate",
          label: "Certificate Upload",
          accept: "image/*",
          bottomText: "Certificate will not be shown publicly",
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

const secondColumn = () :FormDataType => ({
  type: FieldTypes.COLUMN,
  name: "second",
  fields: [
    {
      type: FieldTypes.MULTISELECT,
      name: "specialty",
      label: "Specialties",
      options: [
        {
          value: "Allergy Specialist",
          label: "Allergy Specialist",
        },
        {
          value: "Andrology",
          label: "Andrology",
        },
        {
          value: "Anesthesiologist/Chronic Pain Specialist",
          label: "Anesthesiologist/Chronic Pain Specialist",
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
        },
        {
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
        },
        {
          value: "Nuclear Medicine",
          label: "Nuclear Medicine",
        },
        {
          value: "Nutritionist",
          label: "Nutritionist",
        },
        {
          value: "Obstetrics And Gynaecology",
          label: "Obstetrics And Gynaecology",
        },
        {
          value: "Occupational Therapy",
          label: "Occupational Therapy",
        },
        {
          value: "Ophthalmology (Eye Care)",
          label: "Ophthalmology (Eye Care)",
        },
        {
          value: "Oral And Maxillofacial Surgery",
          label: "Oral And Maxillofacial Surgery",
        },
        {
          value: "Oral Implantologist",
          label: "Oral Implantologist",
        },
        {
          value: "Orthodontist",
          label: "Orthodontist",
        },
        {
          value: "Orthopedics And Traumatology",
          label: "Orthopedics And Traumatology",
        },
        {
          value: "Osteopathy Specialist",
          label: "Osteopathy Specialist",
        },
        {
          value: "Otolaryngology (E.N.T)",
          label: "Otolaryngology (E.N.T)",
        },
        {
          value: "Paediatric Dentistry",
          label: "Paediatric Dentistry",
        },
        {
          value: "Paediatric Surgery",
          label: "Paediatric Surgery",
        },
        {
          value: "Paediatrics",
          label: "Paediatrics",
        },
        {
          value: "Pain Medicine",
          label: "Pain Medicine",
        },
        {
          value: "Pathology",
          label: "Pathology",
        },
        {
          value: "Pediatric Allergy/Asthma Specialist",
          label: "Pediatric Allergy/Asthma Specialist",
        },
        {
          value: "Pediatric Cardiology",
          label: "Pediatric Cardiology",
        },
        {
          value: "Periodontist",
          label: "Periodontist",
        },
        {
          value: "Pharmacology",
          label: "Pharmacology",
        },
        {
          value: "Physiotherapy",
          label: "Physiotherapy",
        },
        {
          value: "Plastic Surgery – Reconstructive And Cosmetic",
          label: "Plastic Surgery – Reconstructive And Cosmetic",
        },
        {
          value: "Preventive Medicine",
          label: "Preventive Medicine",
        },
        {
          value: "Psychiatry",
          label: "Psychiatry",
        },
        {
          value: "Psychologist/ Counsellor",
          label: "Psychologist/ Counsellor",
        },
        {
          value: "Psychotherapy",
          label: "Psychotherapy",
        },
        {
          value: "Pulmonology (Asthma Doctors)",
          label: "Pulmonology (Asthma Doctors)",
        },
        {
          value: "Radiation Oncologist",
          label: "Radiation Oncologist",
        },
        {
          value: "Radiation Oncology",
          label: "Radiation Oncology",
        },
        {
          value: "Radiodiagnosis",
          label: "Radiodiagnosis",
        },
        {
          value: "Radiology",
          label: "Radiology",
        },
        {
          value: "Radiotherapy",
          label: "Radiotherapy",
        },
        {
          value: "Rheumatology",
          label: "Rheumatology",
        },
        {
          value: "Sexology",
          label: "Sexology",
        },
        {
          value: "Siddha Medicine",
          label: "Siddha Medicine",
        },
        {
          value: "Sleep Medicine",
          label: "Sleep Medicine",
        },
        {
          value: "Sonologist",
          label: "Sonologist",
        },
        {
          value: "Speech Therapist",
          label: "Speech Therapist",
        },
        {
          value: "Spine Health",
          label: "Spine Health",
        },
        {
          value: "Spine Surgery",
          label: "Spine Surgery",
        },
        {
          value: "Stem Cell Therapy",
          label: "Stem Cell Therapy",
        },
        {
          value: "Surgeon",
          label: "Surgeon",
        },
        {
          value: "Surgical Gastroenterology",
          label: "Surgical Gastroenterology",
        },
        {
          value: "Surgical Oncology",
          label: "Surgical Oncology",
        },
        {
          value: "Test Cancer Type",
          label: "Test Cancer Type",
        },
        {
          value: "Toxicology",
          label: "Toxicology",
        },
        {
          value: "Unani Medicine",
          label: "FUnani Medicine",
        },
        {
          value: "Urology",
          label: "Urology",
        },
        {
          value: "Vascular Surgery",
          label: "Vascular Surgery",
        },
        {
          value: "Venereology",
          label: "Venereology",
        },
        {
          value: "Wellness Medicine",
          label: "Wellness Medicine",
        },
        {
          value: "Yoga",
          label: "Yoga",
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
  name: "step3",
  fields: [
    firstColumn(),
    secondColumn(),
  ],
});

export default data;
export const step3Data = data;
