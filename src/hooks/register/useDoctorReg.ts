import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { useSetRecoilState } from "recoil";

import { AxiosContext } from "../../contexts/AxiosContext";
import authAtom from "../../atoms/auth.atom";

const registerDoctor = async (axios: AxiosInstance, data: any) => {
  const response = await axios.post("user/doctor-signup/", data);
  return response;
};

export default function useDoctorReg(data: any) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const setAuthState = useSetRecoilState(authAtom);

  console.log({ data, axios, setAuthState });

  return useQuery(
    ["doctor_reg", data],
    () => registerDoctor(axios as AxiosInstance, data),
    {
      onSuccess: ({ data: response }) => {
        setAuthState({
          isLoggedIn: true,
          user: {
            id: response.id,
            email: response.email,
            token: response.token,
            profilePhoto: response.profile_photo ?? "",
          },
        });
      },
      onError: (err) => Promise.reject(err),
    },
  );
}
