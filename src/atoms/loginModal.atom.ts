import { atom } from "recoil";

type LoginModalState = {
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
};

export default atom<LoginModalState | null>({
  key: "loginModal",
  default: null,
});
