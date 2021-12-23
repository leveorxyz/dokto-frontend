import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { useSetRecoilState, RecoilState } from "recoil";

import { AxiosContext } from "../../contexts/AxiosContext";
import { HospitalProfile } from "../../atoms/hospitalProfile";

const getProfile = async (axios: AxiosInstance, userType: string) => axios.get(`dashboard/${userType}/profile-settings/`)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useHospitalProfile(
  userType:string,
  profileAtom: RecoilState<HospitalProfile | null>,
) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const setProfile = useSetRecoilState(profileAtom);

  return useQuery(
    ["hospital-profile", { userType, profileAtom }],
    () => getProfile(axios as AxiosInstance, userType),
    {
      retry: false,
      staleTime: Infinity,
      onSuccess: (data) => {
        setProfile(data);
      },
    },
  );
}
