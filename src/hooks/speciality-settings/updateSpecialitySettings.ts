import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";

import { AxiosContext } from "../../contexts/AxiosContext";

const updateSpeciality = async (axios: AxiosInstance, data: any) => axios.put("dashboard/doctor/specialty-settings/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useUpdateSpecialitySettings(data: any) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  console.log(data);
  return useQuery(
    ["specialty-settings", data],
    () => updateSpeciality(axios as AxiosInstance, data),
    { retry: false, staleTime: Infinity },
  );
}
