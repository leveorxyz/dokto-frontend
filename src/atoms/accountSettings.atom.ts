import { atom } from "recoil";

export type AccountSettings = {
  notification_email: string;
}

export const currentStepAtom = atom<number>({
  key: "AccountSettingsStep",
  default: 1,
});

export default atom<AccountSettings | null>({
  key: "AccountSettings",
  default: null,
});
