import { atom } from "recoil";

const currentStepAtom = atom<number>({
  key: "passwordResetStep",
  default: 1,
});

export default currentStepAtom;
