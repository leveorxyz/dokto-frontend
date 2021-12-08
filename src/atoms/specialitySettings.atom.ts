import { atom } from "recoil";

export type SpecialitySettings = {
  specialty: string[];
}

export const currentStepAtom = atom<number>({
  key: "SpecialitySettingsAtom",
  default: 1,
});

export default atom<SpecialitySettings | null>({
  key: "SpecialitySettings",
  default: null,
});
