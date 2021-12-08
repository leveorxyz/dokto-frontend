import { atom } from "recoil";

export const currentStepAtom = atom<number>({
  key: "planOfCare",
  default: 1,
});

export const stepAtom = atom({
  key: "plan-of-care",
  default: {},
});

export default {
  currentStepAtom, stepAtom,
};
