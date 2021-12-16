import { useContext, useMemo } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { useSetRecoilState, useRecoilValue, RecoilState } from "recoil";

import { AxiosContext } from "../../contexts/AxiosContext";
import { DoctorProfile } from "../../atoms/doctorProfile";
import authAtom from "../../atoms/auth.atom";

const getProfile = async (axios: AxiosInstance, userType: string) => axios.get(`dashboard/${userType}/profile/`)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useProfile(
  profileAtom: RecoilState<DoctorProfile | null>,
) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const setProfile = useSetRecoilState(profileAtom);
  const authState = useRecoilValue(authAtom);
  const userType: string = useMemo(
    () => (authState?.user?.userType.toLowerCase() ?? ""),
    [authState],
  );

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
