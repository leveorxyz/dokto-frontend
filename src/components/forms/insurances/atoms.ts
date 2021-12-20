import { atom } from "recoil";

export const currentStepAtom = atom<number>({
  key: "insuranceStep",
  default: 1,
});

export default { currentStepAtom };
