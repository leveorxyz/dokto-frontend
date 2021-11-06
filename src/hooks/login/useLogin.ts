import { useContext } from "react";
import { useMutation } from "react-query";
import { AxiosInstance } from "axios";
import { useSetRecoilState } from "recoil";

import { AxiosContext } from "../../contexts/AxiosContext";
import authAtom from "../../atoms/auth.atom";

type Data = {
  email: string;
  password: string;
};

const login = async (axios: AxiosInstance, data: Data) => axios.post("user/login/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useLogin() {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const setAuthState = useSetRecoilState(authAtom);

  return useMutation(
    (data: Data) => login(axios as AxiosInstance, data),
    {
      mutationKey: "login",
      retry: false,
      onSuccess: ({
        token,
        id,
        profile_photo: profilePhoto,
        email,
      }) => {
        setAuthState({
          isLoggedIn: true,
          user: {
            id,
            email,
            token,
            profilePhoto,
          },
        });
      },
    },
  );
}
