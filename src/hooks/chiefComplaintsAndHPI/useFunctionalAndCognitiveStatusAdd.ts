import { useContext } from "react";
import { useQuery, useQueryClient } from "react-query";
import { AxiosInstance } from "axios";
import { useNavigate } from "react-router-dom";
import { AxiosContext } from "../../contexts/AxiosContext";

export interface IChiefComplaintsAndHPI{
 chiefComplaint: string,
  location: string,
  severity: string,
  duration: string,
  modifying_factors: string,
  associated_symptons: string,
  description: string,
  context: string,
  hpi: string,
  patient_encounter: string
}

const chiefComplaintsAndHPI = async (axios: AxiosInstance, data: any) => axios.post("ehr/encounters/chief-complaints-hpi/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useChiefComplaintsAndHPIAdd(data: any) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const axios = useContext<AxiosInstance | null>(AxiosContext);

  return useQuery(
    ["chiefComplaintsAndHPI", data],
    () => chiefComplaintsAndHPI(axios as AxiosInstance, data),
    {
      retry: false,
      staleTime: Infinity,
      enabled: !!data.patient_encounter,
      onSuccess: (newData:IChiefComplaintsAndHPI) => {
        navigate(`/patients/encounters/${newData.patient_encounter}`);
        queryClient.invalidateQueries("prev-patientProcedure");
      },
    },
  );
}
