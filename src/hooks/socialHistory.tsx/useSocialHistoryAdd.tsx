import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";

import { AxiosContext } from "../../contexts/AxiosContext";

const registerPatient = async (axios: AxiosInstance, data: any) => axios.post("ehr/encounters/social-history/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useSocialHistoryAdd(data: any) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);

  return useQuery(
    ["social_history", data],
    () => registerPatient(axios as AxiosInstance, data),
    { retry: false, staleTime: Infinity },
  );
}
