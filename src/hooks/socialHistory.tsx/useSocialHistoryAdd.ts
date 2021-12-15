import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { AxiosInstance } from "axios";

import { useNavigate } from "react-router-dom";
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

const socialHistory = async (axios: AxiosInstance, data: ISocialHistory) => axios.post("/ehr/encounters/social-history/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useSocialHistoryAdd() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const axios = useContext<AxiosInstance | null>(AxiosContext);

  return useMutation(
    (data: ISocialHistory) => socialHistory(axios as AxiosInstance, data),
    {
      mutationKey: "socialHistory",
      retry: false,
      onSuccess: (data:ISocialHistory) => {
        navigate(`/patients/encounters/${data.patient_encounter}`);
        queryClient.invalidateQueries("prev-socialHistory");
      },

    },
  );
}
