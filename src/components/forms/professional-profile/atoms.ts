import { atom } from "recoil";

export const currentStepAtom = atom<number>({
  key: "profileDetailsStep",
  default: 1,
});

export const stepAtom = atom({
  key: "profile_details_data",
  default: {},
});

export default {
  currentStepAtom, stepAtom,
};
