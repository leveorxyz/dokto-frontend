import { atom } from "recoil";

import { dummyPatients } from "../../data/PatientsData";

export type Patient = {
    name: string;
    phoneNo: string;
    address: string;
    lastAppointment: string;
    reasonOfVisit: string;
    status: string;
}

export default atom<(Patient)[]>({
  key: "patients",
  default: dummyPatients,
});
