import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { useSetRecoilState, RecoilState } from "recoil";

import { AxiosContext } from "../../contexts/AxiosContext";
import { DoctorProfile } from "../../atoms/doctorProfile";

const getProfile = async (axios: AxiosInstance, userType: string) => axios.get(`dashboard/${userType}/profile/`)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useProfile(
  userType: string,
  profileAtom: RecoilState<DoctorProfile | null>,
) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const setProfile = useSetRecoilState(profileAtom);

  return useQuery(
    ["profile", { userType, profileAtom }],
    () => getProfile(axios as AxiosInstance, userType),
    {
      retry: false,
      onSuccess: (data) => {
        setProfile(data as DoctorProfile);
      },
    },
  );
}
