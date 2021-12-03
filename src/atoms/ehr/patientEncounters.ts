import { atom } from "recoil";

import { dummyPatientEncounters } from "../../data/PatientEncountersData";

export type PatientEncounters = {
    date: string;
    code:string;
    description:string;
    status:string
}

export default atom<PatientEncounters[]>({
  key: "patient-encounters",
  default: dummyPatientEncounters,
});
