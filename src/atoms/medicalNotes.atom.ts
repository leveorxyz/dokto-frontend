import { atom } from "recoil";

export type MedicalNotesData = {
  generalDesc: string;
};

export default atom<MedicalNotesData[]>({
  key: "medical-notes",
  default: [],
});
