import { atom } from "recoil";

import { dummyAllergies } from "../../data/Allergies";

export type Allergies = {
    date: string;
    allergy:string;
    serverity:string;
    status:string;
    action:string;
}

export default atom<Allergies[]>({
  key: "patient-allergies",
  default: dummyAllergies,
});
