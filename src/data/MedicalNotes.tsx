interface IMedicalNote{
  title:string,
  checkBoxes:{label:string, value:string}[]
  input:string
}

export const medNotes:IMedicalNote[] = [
  {
    title: "General",
    checkBoxes: [
      { label: "No weight change", value: "No weight change" },
      { label: "Fatigue", value: "Fatigue" },
      { label: "Generally well", value: "Generally well" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "generalDesc",
  },
  {
    title: "Head",
    checkBoxes: [
      { label: "No weight change", value: "No weight change" },
      { label: "Fatigue", value: "Fatigue" },
      { label: "Generally well", value: "Generally well" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "headDesc",
  },
  {
    title: "Eyes",
    checkBoxes: [
      { label: "No weight change", value: "No weight change" },
      { label: "Fatigue", value: "Fatigue" },
      { label: "Generally well", value: "Generally well" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "eyesDesc",
  },
  {
    title: "Ears",
    checkBoxes: [
      { label: "No weight change", value: "No weight change" },
      { label: "Fatigue", value: "Fatigue" },
      { label: "Generally well", value: "Generally well" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "earsDesc",
  },
  {
    title: "Noes",
    checkBoxes: [
      { label: "No weight change", value: "No weight change" },
      { label: "Fatigue", value: "Fatigue" },
      { label: "Generally well", value: "Generally well" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "noesDesc",
  },
  {
    title: "Mouth",
    checkBoxes: [
      { label: "No weight change", value: "No weight change" },
      { label: "Fatigue", value: "Fatigue" },
      { label: "Generally well", value: "Generally well" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "mouthDesc",
  },
  {
    title: "Neck",
    checkBoxes: [
      { label: "No weight change", value: "No weight change" },
      { label: "Fatigue", value: "Fatigue" },
      { label: "Generally well", value: "Generally well" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "neckDesc",
  },
  {
    title: "Breast",
    checkBoxes: [
      { label: "No weight change", value: "No weight change" },
      { label: "Fatigue", value: "Fatigue" },
      { label: "Generally well", value: "Generally well" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "breastDesc",
  },
  {
    title: "Chest",
    checkBoxes: [
      { label: "No weight change", value: "No weight change" },
      { label: "Fatigue", value: "Fatigue" },
      { label: "Generally well", value: "Generally well" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "chestDesc",
  },
  {
    title: "Heart",
    checkBoxes: [
      { label: "No weight change", value: "No weight change" },
      { label: "Fatigue", value: "Fatigue" },
      { label: "Generally well", value: "Generally well" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "heartDesc",
  },
  {
    title: "Abdomen",
    checkBoxes: [
      { label: "No weight change", value: "No weight change" },
      { label: "Fatigue", value: "Fatigue" },
      { label: "Generally well", value: "Generally well" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "abdomenDesc",
  },
  {
    title: "GU",
    checkBoxes: [
      { label: "No weight change", value: "No weight change" },
      { label: "Fatigue", value: "Fatigue" },
      { label: "Generally well", value: "Generally well" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "GUDesc",
  },
  {
    title: "Gyn",
    checkBoxes: [
      { label: "No weight change", value: "No weight change" },
      { label: "Fatigue", value: "Fatigue" },
      { label: "Generally well", value: "Generally well" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "GynDesc",
  },
  {
    title: "Musculoskeletal",
    checkBoxes: [
      { label: "No weight change", value: "No weight change" },
      { label: "Fatigue", value: "Fatigue" },
      { label: "Generally well", value: "Generally well" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "MusculoskeletalDesc",
  }, {
    title: "Neurologic",
    checkBoxes: [
      { label: "No weight change", value: "No weight change" },
      { label: "Fatigue", value: "Fatigue" },
      { label: "Generally well", value: "Generally well" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "NeurologicDesc",
  }, {
    title: "Psychiatric",
    checkBoxes: [
      { label: "No weight change", value: "No weight change" },
      { label: "Fatigue", value: "Fatigue" },
      { label: "Generally well", value: "Generally well" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "PsychiatricDesc",
  },
];

export const generalCheckboxOptions:string[] = ["No weight change", "Fatigue", "Generally well", "Other (please specify below)"];
export default { generalCheckboxOptions };
