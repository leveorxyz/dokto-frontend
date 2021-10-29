import { atom } from "recoil";

export const currentStepAtom = atom<number>({
  key: "currentStep",
  default: 1,
});

export default {
  currentStepAtom,
};
