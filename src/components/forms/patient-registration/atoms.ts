import { atom } from "recoil";

export const currentStepAtom = atom<number>({
  key: "currentStep",
  default: 1,
});

export const step1Atom = atom({
  key: "step_1",
  default: {},
  dangerouslyAllowMutability: true,
});

export const step2Atom = atom({
  key: "step_2",
  default: {},
});

export const step3Atom = atom({
  key: "step_3",
  default: {},
});

export const step4Atom = atom({
  key: "step_4",
  default: {},
});

export default {
  currentStepAtom, step1Atom, step2Atom, step3Atom, step4Atom,
};
