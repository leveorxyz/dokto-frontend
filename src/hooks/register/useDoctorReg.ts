import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { useSetRecoilState } from "recoil";

import { AxiosContext } from "../../contexts/AxiosContext";
import authAtom from "../../atoms/auth.atom";

const registerDoctor = async (axios: AxiosInstance, data: any) => axios.post("user/doctor-signup/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useDoctorReg(data: any) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const setAuthState = useSetRecoilState(authAtom);

  return useQuery(
    ["doctor_reg", data],
    () => registerDoctor(axios as AxiosInstance, data),
    {
      retry: 2,
      onSuccess: ({
        token,
        id,
        email,
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
      },
    },
  );
}
