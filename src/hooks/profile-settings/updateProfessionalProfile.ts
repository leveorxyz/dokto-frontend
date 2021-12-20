import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";

import { AxiosContext } from "../../contexts/AxiosContext";

const updateEducation = async (axios: AxiosInstance, data: any) => axios.put("dashboard/doctor/professional-profile/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useUpdateEducationExperiences(data: any) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);

  return useQuery(
    ["profile-settings/professional-profile", data],
    () => updateEducation(axios as AxiosInstance, data),
    { retry: false, staleTime: Infinity },
  );
}
