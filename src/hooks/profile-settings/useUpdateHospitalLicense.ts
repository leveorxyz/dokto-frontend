import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";

import { AxiosContext } from "../../contexts/AxiosContext";

const updateDetails = async (axios: AxiosInstance, data: any) => axios.put("dashboard/clinic/license/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useUpdateHospitalLicense(data:any) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  return useQuery(
    ["profile-settings/hospital-license", data],
    () => updateDetails(axios as AxiosInstance, data),
    { retry: false, staleTime: Infinity },
  );
}
