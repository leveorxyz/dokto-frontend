import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { AxiosContext } from "../../contexts/AxiosContext";

export type EncounteredPatient={
   id: string,
      visit_date: string,
      location: string,
      reason: string,
      signed: boolean,
      patient: string,
      provider: string,
      patient_name: string,
      provider_name: string
}

export type EncounteredPatients={
  count: number,
  next: string,
  previous: string,
  results:EncounteredPatient[],
  previous_offset: number|null,
  next_offset: number|null,
}

export type PropTypes={
limit?:number,
offset?:number,
search?:string|null
}

const encounteredPatients = async (axios: AxiosInstance, patient:string, data:PropTypes) => {
  const queryParams:Record<string, any> = {
    limit: data.limit ?? 10,
    offset: data.offset ?? 0,

  };
  if (data.search) {
    (queryParams as any).search = data.search;
  }
  const queryString = new URLSearchParams(queryParams).toString();
  return axios.get(`/ehr/encounters/${patient}/?${queryString}`)
    .then(({ data: { result } }) => Promise.resolve(result))
    .catch(({ response: { data: response } }) => Promise.reject(response));
};

export default function useEncounteredPatients(patient:string, props:PropTypes) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  return useQuery<EncounteredPatients>(
    ["encountered_patients", props],
    () => encounteredPatients(axios as AxiosInstance, patient, props),
    {
      retry: false,
    },
  );
}
