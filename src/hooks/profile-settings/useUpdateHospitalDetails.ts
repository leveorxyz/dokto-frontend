import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";

import { AxiosContext } from "../../contexts/AxiosContext";

const updateDetails = async (axios: AxiosInstance, data: any) => axios.patch("dashboard/clinic/profile-settings/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useUpdateHospitalDetails(data:any) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  return useQuery(
    ["profile-settings/hospital-profile-detail", data],
    () => updateDetails(axios as AxiosInstance, data),
    { retry: false, staleTime: Infinity },
  );
}
