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
      { label: "No Headaches", value: "No Headaches" },
      { label: "No vertigo", value: "No vertigo" },
      { label: "No injury", value: "No injury" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "headDesc",
  },
  {
    title: "Eyes",
    checkBoxes: [
      { label: "Normal vision", value: "Normal vision" },
      { label: "No diplopia", value: "No diplopia" },
      { label: "No tearing", value: "No tearing" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
      { label: "No scotomata", value: "No scotomata" },
      { label: "No pain", value: "No pain" }],
    input: "eyesDesc",
  },
  {
    title: "Ears",
    checkBoxes: [
      { label: "No change in hearing", value: "No change in hearing" },
      { label: "No tinnitus", value: "No tinnitus" },
      { label: "No bleeding", value: "No bleeding" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
      { label: "No vertigo", value: "No vertigo" },

    ],
    input: "earsDesc",
  },
  {
    title: "Nose",
    checkBoxes: [
      { label: "No epistaxis", value: "No epistaxis" },
      { label: "No congestion", value: "No congestion" },
      { label: "No obstruction", value: "No obstruction" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
      { label: "No discharge", value: "No discharge" },

    ],
    input: "noseDesc",
  },
  {
    title: "Mouth",
    checkBoxes: [
      { label: "No dental difficulties", value: "No dental difficulties" },
      { label: "No gingival bleeding", value: "No gingival bleeding" },
      { label: "No use of dentures", value: "No use of dentures" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "mouthDesc",
  },
  {
    title: "Neck",
    checkBoxes: [
      { label: "No stiffness", value: "No stiffness" },
      { label: "No pain", value: "No pain" },
      { label: "No tenderness", value: "No tenderness" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
      { label: "No noted lumps", value: "No noted lumps" },
    ],
    input: "neckDesc",
  },
  {
    title: "Breast",
    checkBoxes: [
      { label: "No noted lumps", value: "No noted lumps" },
      { label: "No tenderness", value: "No tenderness" },
      { label: "No swelling", value: "No swelling" },
      { label: "No nipple discharge", value: "No nipple discharge" },
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
