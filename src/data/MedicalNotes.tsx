interface IMedicalNote{
  title:string,
  checkBoxes:{label:string, value:string}[]
  input:string
}

export const reviewOfSystems:IMedicalNote[] = [
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
      { label: "No dyspnea", value: "No dyspnea" },
      { label: "No wheezing", value: "No wheezing" },
      { label: "No hemoptysis", value: "No hemoptysis" },
      { label: "No cough", value: "No cough" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },

    ],
    input: "breastDesc",
  },
  {
    title: "Chest",
    checkBoxes: [
      { label: "No dyspnea", value: "No dyspnea" },
      { label: "No wheezing", value: "No wheezing" },
      { label: "No hemoptysis", value: "No hemoptysis" },
      { label: "No cough", value: "No cough" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "chestDesc",
  },
  {
    title: "Heart",
    checkBoxes: [
      { label: "No chest pains", value: "No chest pains" },
      { label: "No palpitations", value: "No palpitations" },
      { label: "No syncope", value: "No syncope" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
      { label: "No orthopnea", value: "No orthopnea" },

    ],
    input: "heartDesc",
  },
  {
    title: "Abdomen",
    checkBoxes: [
      { label: "No change in appetite", value: "No change in appetite" },
      { label: "No dysphagia", value: "No dysphagia" },
      { label: "No abdominal pains", value: "No abdominal pains" },
      { label: "No emesis", value: "No emesis" },
      { label: "No bowel habit changes", value: "No bowel habit changes" },
      { label: "No melena", value: "No melena" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "abdomenDesc",
  },
  {
    title: "GU",
    checkBoxes: [
      { label: "No urinary urgency", value: "No urinary urgency" },
      { label: "No dysuria", value: "No dysuria" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
      { label: "No change in nature of urine", value: "No change in nature of urine" },

    ],
    input: "GUDesc",
  },
  {
    title: "Gyn",
    checkBoxes: [
      { label: "No change in menses", value: "No change in menses" },
      { label: "No dysmenorrhea ", value: "No dysmenorrhea " },
      { label: "No vaginal discharge", value: "No vaginal discharge" },
      { label: "No pelvic pain", value: "No pelvic pain" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "GynDesc",
  },
  {
    title: "Musculoskeletal",
    checkBoxes: [
      { label: "No pain in muscles or joints ", value: "No pain in muscles or joints " },
      { label: "No limitation of range of motion ", value: "No limitation of range of motion " },
      { label: "No paresthesias or numbness", value: "No paresthesias or numbness" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "MusculoskeletalDesc",
  }, {
    title: "Neurologic",
    checkBoxes: [
      { label: "No weakness", value: "No weakness" },
      { label: "No tremors", value: "No tremors" },
      { label: "No seizures", value: "No seizures" },
      { label: "Other (please specify below).", value: "Other (please specify below)." },
      { label: "No changes in mentation", value: "No changes in mentation" },
      { label: "No ataxia", value: "No ataxia" },
    ],
    input: "NeurologicDesc",
  }, {
    title: "Psychiatric",
    checkBoxes: [
      { label: "No depressive symptoms ", value: "No depressive symptoms " },
      { label: "No changes in step habits", value: "No changes in step habits" },
      { label: "No changes in thought content", value: "No changes in thought content" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "PsychiatricDesc",
  },
];

export const physicalExam:IMedicalNote[] = [
  {
    title: "General Appearance",
    checkBoxes: [
      { label: "Well developed ", value: "Well developed " },
      { label: "Well nourished", value: "Well nourished" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
      { label: "Alert and cooperative", value: "Alert and cooperative" },
      { label: "Oriented x 3 and appears to be in no acute distress", value: "Oriented x 3 and appears to be in no acute distress" },

    ],
    input: "generalAppearanceDesc",
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
    title: "Head",
    checkBoxes: [
      { label: "Symmetric", value: "Symmetric" },
      { label: "Normocephalic", value: "Normocephalic" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "HeadDesc",
  },
  {
    title: "Eyes",
    checkBoxes: [
      { label: "PERRL", value: "PERRL" },
      { label: "EOMI", value: "EOMI" },
      { label: "Fundi normal", value: "Fundi normal" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
      { label: "Vision is grossly intact", value: "Vision is grossly intact" },

    ],
    input: "EyesDesc",
  },
  {
    title: "Ears",
    checkBoxes: [
      { label: "External auditory canals and tympanic membranes clear", value: "External auditory canals and tympanic membranes clear" },
      { label: "Hearing grossly normal", value: "Hearing grossly normal" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },

    ],
    input: "EarsDesc",
  },
  {
    title: "Nose",
    checkBoxes: [
      { label: "No nasal discharge", value: "No nasal discharge" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "NoseDesc",
  },
  {
    title: "Throat",
    checkBoxes: [
      { label: "Oral cavity and pharynx normal", value: "Oral cavity and pharynx normal" },
      { label: "No inflammation swelling exudate, or lesions condition", value: "No inflammation swelling exudate, or lesions condition" },
      { label: "Teeth and gingiva in good general", value: "Teeth and gingiva in good general" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "ThroatDesc",
  },
  {
    title: "Neck",
    checkBoxes: [
      { label: "Neck Supple", value: "Neck Supple" },
      { label: "Non-tender without lymphodenopathy, masses or thyromegaly", value: "Non-tender without lymphodenopathy, masses or thyromegaly" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },

    ],
    input: "NeckDesc",
  },
  {
    title: "Cardiac",
    checkBoxes: [
      { label: "Normal S1 and 52", value: "Normal S1 and 52 " },
      { label: "No 53. 54 or murmurs ", value: "No 53. 54 or murmurs " },
      { label: "Rhythm is regular", value: "Rhythm is regular" },
      { label: "There is no peripherol edema. cyanosis or polon", value: "There is no peripherol edema. cyanosis or polon" },
      { label: "Extremities are warm and well perfused", value: "Extremities are warm and well perfused" },
      { label: "Copiliory refill is less than 2 seconds", value: "Copiliory refill is less than 2 seconds" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "CardiacDesc",
  },
  // REPEATING
  {
    title: "General Appearance",
    checkBoxes: [
      { label: "Well developed ", value: "Well developed " },
      { label: "Well nourished", value: "Well nourished" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
      { label: "Alert and cooperative", value: "Alert and cooperative" },
      { label: "Oriented x 3 and appears to be in no acute distress", value: "Oriented x 3 and appears to be in no acute distress" },

    ],
    input: "generalAppearanceDesc",
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
    title: "Head",
    checkBoxes: [
      { label: "Symmetric", value: "Symmetric" },
      { label: "Normocephalic", value: "Normocephalic" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "HeadDesc",
  },
  {
    title: "Eyes",
    checkBoxes: [
      { label: "PERRL", value: "PERRL" },
      { label: "EOMI", value: "EOMI" },
      { label: "Fundi normal", value: "Fundi normal" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
      { label: "Vision is grossly intact", value: "Vision is grossly intact" },

    ],
    input: "EyesDesc",
  },
  {
    title: "Ears",
    checkBoxes: [
      { label: "External auditory canals and tympanic membranes clear", value: "External auditory canals and tympanic membranes clear" },
      { label: "Hearing grossly normal", value: "Hearing grossly normal" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },

    ],
    input: "EarsDesc",
  },
  {
    title: "Nose",
    checkBoxes: [
      { label: "No nasal discharge", value: "No nasal discharge" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "NoseDesc",
  },
  {
    title: "Throat",
    checkBoxes: [
      { label: "Oral cavity and pharynx normal", value: "Oral cavity and pharynx normal" },
      { label: "No inflammation swelling exudate, or lesions condition", value: "No inflammation swelling exudate, or lesions condition" },
      { label: "Teeth and gingiva in good general", value: "Teeth and gingiva in good general" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "ThroatDesc",
  },
  {
    title: "Neck",
    checkBoxes: [
      { label: "Neck Supple", value: "Neck Supple" },
      { label: "Non-tender without lymphodenopathy, masses or thyromegaly", value: "Non-tender without lymphodenopathy, masses or thyromegaly" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },

    ],
    input: "NeckDesc",
  },
  {
    title: "Cardiac",
    checkBoxes: [
      { label: "Normal S1 and 52", value: "Normal S1 and 52 " },
      { label: "No 53. 54 or murmurs ", value: "No 53. 54 or murmurs " },
      { label: "Rhythm is regular", value: "Rhythm is regular" },
      { label: "There is no peripherol edema. cyanosis or polon", value: "There is no peripherol edema. cyanosis or polon" },
      { label: "Extremities are warm and well perfused", value: "Extremities are warm and well perfused" },
      { label: "Copiliory refill is less than 2 seconds", value: "Copiliory refill is less than 2 seconds" },
      { label: "Other (please specify below)", value: "Other (please specify below)" },
    ],
    input: "CardiacDesc",
  },
];

export default { reviewOfSystems, physicalExam };
