import { atom } from "recoil";

export const currentStepAtom = atom<number>({
  key: "profileDetailsStep",
  default: 1,
});

export default { currentStepAtom };
