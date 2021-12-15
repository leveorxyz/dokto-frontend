import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { AxiosContext } from "../../contexts/AxiosContext";
import { IPatientProcedure } from "./usePatientProcedureAdd";

const patientProcedures = async (axios: AxiosInstance, encounterId:string) => axios.get(`ehr/encounters/patient-procedure/${encounterId}`)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function usePatientProcedures(encounterId:string) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  return useQuery<IPatientProcedure[]>(
    ["patient_procedures", encounterId],
    () => patientProcedures(axios as AxiosInstance, encounterId),
    {
      retry: false,
      enabled: !!encounterId,
    },
  );
}
