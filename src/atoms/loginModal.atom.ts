import { atom } from "recoil";

export default atom<boolean>({
  key: "loginModal",
  default: false,
});
