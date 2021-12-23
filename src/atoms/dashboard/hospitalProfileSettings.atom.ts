import { atom } from "recoil";

import { HospitalProfile } from "../hospitalProfile";

export default atom<HospitalProfile | null>({
  key: "hospitalProfileSettings",
  default: null,
});
