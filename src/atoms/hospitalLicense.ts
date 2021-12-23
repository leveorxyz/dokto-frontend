/* eslint-disable camelcase */
import { atom } from "recoil";

export type HospitalLicense = {
  license_file: string;
  license_expiration: string
};

export default atom<HospitalLicense | null>({
  key: "hospitalLicense",
  default: null,
});
