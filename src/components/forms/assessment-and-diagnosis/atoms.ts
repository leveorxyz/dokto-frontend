import { atom } from "recoil";

export const currentStepAtom = atom<number>({
  key: "accountSettingsStep",
  default: 1,
});

export const stepAtom = atom({
  key: "assessment-and-diagnosis",
  default: {},
});

export default {
  currentStepAtom, stepAtom,
};
