/* eslint-disable camelcase */
import { atom } from "recoil";

export type HospitalProfile = {
  full_name: string;
  email: string;
  contact_no: string;
  website: string;
  street: string;
  state: string;
  city?: string;
  zip_code: string;
  profile_photo: string;
  country: string;
};

export default atom<HospitalProfile | null>({
  key: "hospitalProfile",
  default: null,
});
