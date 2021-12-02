import { atom } from "recoil";

export const currentStepAtom = atom<number>({
  key: "PharmacyRegistrationStep",
  default: 1,
});

export const stepAtom = atom({
  key: "pharmacy_reg_data",
  default: {},
});

export default {
  currentStepAtom, stepAtom,
};
