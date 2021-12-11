import { atom } from "recoil";

export const currentStepAtom = atom<number>({
  key: "Functional-and-cognitive-status",
  default: 1,
});

export const stepAtom = atom({
  key: "functional-and-cognitive-status",
  default: {},
});

export default {
  currentStepAtom, stepAtom,
};
