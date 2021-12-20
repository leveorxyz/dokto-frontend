import { atom } from "recoil";

const currentStepAtom = atom<number>({
  key: "securitySettingsStep",
  default: 1,
});

export default currentStepAtom;
