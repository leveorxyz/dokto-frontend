import { useContext } from "react";
import { useQuery, useQueryClient } from "react-query";
import { AxiosInstance } from "axios";
import { useNavigate } from "react-router-dom";
import { AxiosContext } from "../../contexts/AxiosContext";

export interface IFunctionalAndCognitiveStatus{
  moduleType: string,
  codeType: string,
  status: string,
  code: string,
  start_date: string,
  description: string,
  patient_encounter: string
}

const functionalAndCognitiveStatusAdd = async (axios: AxiosInstance, data: any) => axios.post("ehr/encounters/functional-and-cognitive-status/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useFunctionalAndCognitiveStatusAdd(data: any) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const axios = useContext<AxiosInstance | null>(AxiosContext);

  return useQuery(
    ["FunctionalAndCognitiveStatusAdd", data],
    () => functionalAndCognitiveStatusAdd(axios as AxiosInstance, data),
    {
      retry: false,
      staleTime: Infinity,
      enabled: !!data.patient_encounter,
      onSuccess: (newData:IFunctionalAndCognitiveStatus) => {
        navigate(`/patients/encounters/${newData.patient_encounter}`);
        queryClient.invalidateQueries("prev-patientProcedure");
      },
    },
  );
}
