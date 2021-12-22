import { useContext } from "react";
import { useQuery, useQueryClient } from "react-query";
import { AxiosInstance } from "axios";
import { useToast } from "@chakra-ui/react";
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
  const queryClient = useQueryClient();
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const toast = useToast();

  return useQuery(
    ["patient_procedure_add", data],
    () => registerPatient(axios as AxiosInstance, data),
    {
      retry: false,
      staleTime: Infinity,
      enabled: !!data.patient_encounter,
      onSuccess: () => {
        toast({ title: "Success!", description: "Data added successfully!", status: "success" });

        queryClient.invalidateQueries("patient_procedures");
      },
      onError: (error:any) => {
        toast({ title: "Failed!", description: error.message || "Data add unsuccessful!", status: "error" });
      },
    },
  );
}
