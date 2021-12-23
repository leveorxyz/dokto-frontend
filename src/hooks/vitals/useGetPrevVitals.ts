import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { AxiosContext } from "../../contexts/AxiosContext";
import { IVitals } from "./useVitalsAdd";

const vitals = async (axios: AxiosInstance, encounterId:string) => axios.get(`ehr/encounters/vitals/${encounterId}`)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useGetPrevVitals(encounterId:string) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  return useQuery<IVitals[]>(
    ["prev-vitals", encounterId],
    () => vitals(axios as AxiosInstance, encounterId),
    {
      retry: false,
      enabled: !!encounterId,
    },
  );
}
