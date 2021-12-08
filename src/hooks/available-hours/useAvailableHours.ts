import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { useSetRecoilState, RecoilState } from "recoil";
import { AxiosContext } from "../../contexts/AxiosContext";
import AvailableHoursAtom, { AvailableHours } from "../../atoms/availableHours.atom";

const getAvailableHours = async (axios: AxiosInstance) => axios.get("dashboard/doctor/profile-settings/available-hours")
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useProfileDetails() {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const setAvailableHours = useSetRecoilState(AvailableHoursAtom);
  return useQuery(
    ["profile-settings/available-hours"],
    () => getAvailableHours(axios as AxiosInstance),
    {
      retry: false,
      staleTime: Infinity,
      onSuccess: (data) => {
        setAvailableHours(data as AvailableHours);
      },
    },
  );
}
