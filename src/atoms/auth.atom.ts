import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

type LoggedOutState = {
  isLoggedIn: false;
  user: null;
};

type LoggedInState = {
  isLoggedIn: true;
  user: {
    id: string;
    token: string;
    email: string;
    profilePhoto: string;
  };
};

export type AuthStateType = LoggedOutState | LoggedInState;

const { persistAtom } = recoilPersist({
  key: "auth",
  storage: localStorage,
});

export default atom<AuthStateType>({
  key: "auth",
  default: {
    isLoggedIn: false,
    user: null,
  },
  effects_UNSTABLE: [persistAtom],
});
