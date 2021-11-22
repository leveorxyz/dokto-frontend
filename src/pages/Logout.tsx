import { useSetRecoilState } from "recoil";

import authAtom from "../atoms/auth.atom";

export default function Logout() {
  const setAuthState = useSetRecoilState(authAtom);
  setAuthState({
    isLoggedIn: false,
    user: null,
  });

  return <></>;
}
