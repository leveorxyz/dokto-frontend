import { atom } from "recoil";

export type ProfileDetails = {
  full_name: string;
  gender: string;
  contact_no: string;
  profile_photo: string;
  professional_bio: string;
}

export const currentStepAtom = atom<number>({
  key: "ProfileDetailsStep",
  default: 1,
});

export default atom<ProfileDetails | null>({
  key: "ProfileDetails",
  default: null,
});
