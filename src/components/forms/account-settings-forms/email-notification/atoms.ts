import { atom } from "recoil";

const currentStepAtom = atom<number>({
  key: "emailNotifSettinsStep",
  default: 1,
});

export default currentStepAtom;
