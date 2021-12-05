import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";

import { AxiosContext } from "../../contexts/AxiosContext";

const updateHours = async (axios: AxiosInstance, data: any) => axios.put("dashboard/doctor/profile-settings/available-hours/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useUpdateAvailableHours(data: any) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  console.log(data);
  return useQuery(
    ["profile-settings/available-hours", data],
    () => updateHours(axios as AxiosInstance, data),
    { retry: false, staleTime: Infinity },
  );
}
