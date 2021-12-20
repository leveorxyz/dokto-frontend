import { atom } from "recoil";

import { DoctorProfile } from "./doctorProfile";

export default atom<DoctorProfile | null>({
  key: "doctorProfileSettings",
  default: null,
});
