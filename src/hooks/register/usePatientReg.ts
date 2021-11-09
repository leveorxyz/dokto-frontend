import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { useSetRecoilState } from "recoil";

import { AxiosContext } from "../../contexts/AxiosContext";
import authAtom from "../../atoms/auth.atom";

const registerPatient = async (axios: AxiosInstance, data: any) => axios.post("user/patient-signup/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function usePatientReg(data: any) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const setAuthState = useSetRecoilState(authAtom);

  return useQuery(
    ["patient_reg", data],
    () => registerPatient(axios as AxiosInstance, data),
    {
      retry: 2,
      onSuccess: ({
        token,
        id,
        email,
        user_type: userType,
        profile_photo: profilePhoto,
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
      },
    },
  );
}
