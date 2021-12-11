import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";

import { AxiosContext } from "../../contexts/AxiosContext";

const updateEmail = async (axios: AxiosInstance, data: any) => axios.patch("dashboard/doctor/account-settings/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useUpdateEmailNotification(data: any) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  console.log(data);
  return useQuery(
    ["account-settings", data],
    () => updateEmail(axios as AxiosInstance, data),
    { retry: false, staleTime: Infinity },
  );
}
