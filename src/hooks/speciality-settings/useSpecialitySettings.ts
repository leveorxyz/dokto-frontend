import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { useSetRecoilState, RecoilState } from "recoil";
import { AxiosContext } from "../../contexts/AxiosContext";
import SpecialitySettingsAtom, { SpecialitySettings } from "../../atoms/specialitySettings.atom";

const getSpecialitySettings = async (axios: AxiosInstance) => axios.get("dashboard/doctor/specialty-settings")
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useSpecialitySettings() {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const setSpecialitySettings = useSetRecoilState(SpecialitySettingsAtom);
  return useQuery(
    ["profile"],
    () => getSpecialitySettings(axios as AxiosInstance),
    {
      retry: false,
      staleTime: Infinity,
      onSuccess: (data) => {
        setSpecialitySettings(data as SpecialitySettings);
      },
    },
  );
}
