import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { AxiosContext } from "../../contexts/AxiosContext";

export type EncounteredPatient={
  id: string
     created_at: string,
     updated_at: string,
     is_deleted: true,
     deleted_at: string,
     patient: string
     doctor: string
     description: string,
     date: string,
     start_time: string,
     end_time: string,
     number_of_patients: number,
     payment_status: true,
     transaction_id: string,
     patient_status: string,
     account_id: string
     name: string,
     address: string,
     phone_number: string,
     display_id: number
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

const encounteredPatients = async (axios: AxiosInstance, data:PropTypes) => {
  const queryParams:Record<string, any> = {
    limit: data.limit ?? 10,
    offset: data.offset ?? 0,

  };
  if (data.search) {
    (queryParams as any).search = data.search;
  }
  const queryString = new URLSearchParams(queryParams).toString();
  return axios.get(`appointment/encountered-patients?${queryString}`)
    .then(({ data: { result } }) => Promise.resolve(result))
    .catch(({ response: { data: response } }) => Promise.reject(response));
};

export default function useEncounteredPatients(props:PropTypes) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  return useQuery<EncounteredPatients>(
    ["encountered_patients", props],
    () => encounteredPatients(axios as AxiosInstance, props),
    {
      retry: false,
    },
  );
}
