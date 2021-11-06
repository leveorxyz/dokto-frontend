import { atom } from "recoil";

export const currentStepAtom = atom<number>({
  key: "doctorRegistrationStep",
  default: 1,
});

export const stepAtom = atom({
  key: "doctor_reg_data",
  default: {},
});

export default {
  currentStepAtom, stepAtom,
};
