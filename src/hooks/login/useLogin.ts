import { useContext } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return useMutation(
    (data: Data) => login(axios as AxiosInstance, data),
    {
      mutationKey: "login",
      retry: false,
      onSuccess: ({
        id,
        email,
        token,
        profile_photo: profilePhoto,
        user_type: userType,
        full_name: fullName,
      }) => {
        setAuthState({
          isLoggedIn: true,
          user: {
            id,
            email,
            token,
            profilePhoto,
            userType,
            fullName,
          },
        });
        navigate("/dashboard");
      },
    },
  );
}
