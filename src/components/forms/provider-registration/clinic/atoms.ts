import { atom } from "recoil";

export const currentStepAtom = atom<number>({
  key: "ClinicRegistrationStep",
  default: 1,
});

export const stepAtom = atom({
  key: "clinic_reg_data",
  default: {},
});

export default {
  currentStepAtom, stepAtom,
};
