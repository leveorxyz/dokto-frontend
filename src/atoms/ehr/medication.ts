import { atom } from "recoil";

import { dummyMedication } from "../../data/Medication";

export type Medication = {
    date: string;
    secondCol:{prescription:string;refills:string, direction:string};
    thirdCol:{status:string, expires:string, quantity:string};
    action:string;
}

export default atom<Medication[]>({
  key: "patient-medication",
  default: dummyMedication,
});
