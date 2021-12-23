import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { useSetRecoilState, RecoilState } from "recoil";

import { AxiosContext } from "../../contexts/AxiosContext";

import hospitalLicense, { HospitalLicense } from "../../atoms/hospitalLicense";

const getLicense = async (axios: AxiosInstance, userType: string) => axios.get(`dashboard/${userType}/license/`)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useHospitalLicense(
  userType:string,
  profileAtom: RecoilState<HospitalLicense | null>,
) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const setLicense = useSetRecoilState(hospitalLicense);

  return useQuery(
    ["hospital-profile", { userType, profileAtom }],
    () => getLicense(axios as AxiosInstance, userType),
    {
      retry: false,
      staleTime: Infinity,
      onSuccess: (data) => {
        setLicense(data);
      },
    },
  );
}
