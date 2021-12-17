import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { AxiosContext } from "../../contexts/AxiosContext";
import { IFunctionalAndCognitiveStatus } from "./useFunctionalAndCognitiveStatusAdd";

const functionalAndCognitiveStatusList = async (axios: AxiosInstance, encounterId:string) => axios.get(`ehr/encounters/functional-and-cognitive-status/${encounterId}`)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useFunctionalAndCognitiveStatusList(encounterId:string) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  return useQuery<IFunctionalAndCognitiveStatus[]>(
    ["FunctionalAndCognitiveStatusList", encounterId],
    () => functionalAndCognitiveStatusList(axios as AxiosInstance, encounterId),
    {
      retry: false,
      enabled: !!encounterId,
    },
  );
}
