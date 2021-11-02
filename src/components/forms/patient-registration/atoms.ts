import { atom } from "recoil";

export const currentStepAtom = atom<number>({
  key: "patientRegistrationStep",
  default: 1,
});

export const stepAtom = atom({
  key: "patient_reg_data",
  default: {},
});

export default {
  currentStepAtom, stepAtom,
};
