import { atom } from "recoil";

import { dummyAssessmentAndDiagnosis } from "../../data/AssessmentAndDiagnosisData";

export type PatientEncounters = {
    date: string;
    code:string;
    description:string;
    status:string;
    action:string;
}

export default atom<PatientEncounters[]>({
  key: "patient-AssessmentAndDiagnosis",
  default: dummyAssessmentAndDiagnosis,
});
