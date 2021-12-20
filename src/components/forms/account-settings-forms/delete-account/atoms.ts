import { atom } from "recoil";

const currentStepAtom = atom<number>({
  key: "accountDeleteSettinsStep",
  default: 1,
});

export default currentStepAtom;
