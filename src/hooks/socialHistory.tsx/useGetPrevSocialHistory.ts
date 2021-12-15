import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { AxiosContext } from "../../contexts/AxiosContext";

export type ISocialHistory={
  home_environment:string,
  highest_education:string,
  sexual_orientation:string,
  gender_identity:string,
  occupation:string,
  children:string,
  marital_status:string,
  status:string,
  tobacco_status:string,
  tobacco_type:string,
  tobacco_packs_per_day:string,
  tobacco_start_date:string,
  tobacco_cessation:string
  exercise:string,
  seatbelts:string,
  drug_use:string,
  quit_date:string
  exposure:string
  alcohol_use: string,
  caffeine_use: string,
  etoh: string,
  patient_encounter?:string
}

const socialHistory = async (axios: AxiosInstance, encounterId:string) => axios.get(`ehr/encounters/social-history/${encounterId}`)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useGetPrevSocialHistory(encounterId:string) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  return useQuery<ISocialHistory[]>(
    ["prev-socialHistory", encounterId],
    () => socialHistory(axios as AxiosInstance, encounterId),
    {
      retry: false,
      enabled: !!encounterId,
    },
  );
}
