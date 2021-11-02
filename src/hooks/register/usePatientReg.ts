import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { useSetRecoilState } from "recoil";

import { AxiosContext } from "../../contexts/AxiosContext";
import authAtom from "../../atoms/auth.atom";

const registerDoctor = async (axios: AxiosInstance, data: any) => {
  const response = await axios.post("user/patient-signup/", data);
  return response;
};

export default function usePatientReg(data: any) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const setAuthState = useSetRecoilState(authAtom);

  console.log({ data, axios, setAuthState });

  return useQuery(
    ["patient_reg", data],
    () => registerDoctor(axios as AxiosInstance, data),
    {
      retry: 2,
      onSuccess: ({
        data: {
          result: {
            token,
            id,
            profile_photo: profilePhoto,
            email,
          },
        },
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
      onError: ({
        response: {
          data: {
            message,
          },
        },
      }) => Promise.reject(message),
    },
  );
}
