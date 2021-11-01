import { atom } from "recoil";

export const currentStepAtom = atom<number>({
  key: "currentStep",
  default: 1,
});

export const stepAtom = atom({
  key: "step_1",
  default: {},
});

export default {
  currentStepAtom, stepAtom,
};
