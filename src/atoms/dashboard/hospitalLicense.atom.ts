import { atom } from "recoil";

import { HospitalLicense } from "../hospitalLicense";

export default atom<HospitalLicense | null>({
  key: "hospitalLicense",
  default: null,
});
