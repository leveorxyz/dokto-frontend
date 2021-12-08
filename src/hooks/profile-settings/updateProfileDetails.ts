import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";

import { AxiosContext } from "../../contexts/AxiosContext";

const updateDetails = async (axios: AxiosInstance, data: any) => axios.put("dashboard/doctor/profile-settings/profile-detail/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useUpdateProfileDetails(data:any) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  return useQuery(
    ["profile-settings/profile-detail", data],
    () => updateDetails(axios as AxiosInstance, data),
    { retry: false, staleTime: Infinity },
  );
}
