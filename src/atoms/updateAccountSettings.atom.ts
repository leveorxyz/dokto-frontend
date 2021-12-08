import { atom } from "recoil";

export type UpdateAccountSettings = {
  old_password: string;
  new_password: string;
  notification_email: string;
  temporary_disable: boolean;
  account_delete_password: string;
  reason_to_delete: string;
}

export const currentStepAtom = atom<number>({
  key: "UpdateAccountSettingsStep",
  default: 1,
});

export default atom<UpdateAccountSettings | null>({
  key: "UpdateAccountSettings",
  default: null,
});
