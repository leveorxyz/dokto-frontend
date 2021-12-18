import { useContext } from "react";
import { useQuery, useQueryClient } from "react-query";
import { AxiosInstance } from "axios";
import { useNavigate } from "react-router-dom";
import { AxiosContext } from "../../contexts/AxiosContext";

export interface IPatientProcedure{
  id?:string;
  procedure_type: string,
  code: string,
  description: string,
  status: string,
  date: string,
  patient_encounter: string
}

const registerPatient = async (axios: AxiosInstance, data: any) => axios.post("ehr/encounters/patient-procedure/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function usePatientProcedureAdd(data: any) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const axios = useContext<AxiosInstance | null>(AxiosContext);

  return useQuery(
    ["patient_procedure_add", data],
    () => registerPatient(axios as AxiosInstance, data),
    {
      retry: false,
      staleTime: Infinity,
      enabled: !!data.patient_encounter,
      onSuccess: (newData:IPatientProcedure) => {
        navigate(`/patients/encounters/${newData.patient_encounter}`);
        queryClient.invalidateQueries("patient_procedures");
      },
    },
  );
}
