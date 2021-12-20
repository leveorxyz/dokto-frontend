import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";

import { AxiosContext } from "../../contexts/AxiosContext";

const updateInsurance = async (axios: AxiosInstance, data: any) => axios.put("dashboard/doctor/insurance/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useUpdateInsurance(data: any) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);

  return useQuery(
    ["profile-settings/insurance", data],
    () => updateInsurance(axios as AxiosInstance, data),
    { retry: false, staleTime: Infinity },
  );
}
