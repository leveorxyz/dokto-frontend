import { atom } from "recoil";

export const currentStepAtom = atom<number>({
  key: "ProfileDetailsStep",
  default: 1,
});

export default { currentStepAtom };
