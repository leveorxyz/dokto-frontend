import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { AxiosInstance } from "axios";
import { useToast } from "@chakra-ui/react";
import { AxiosContext } from "../../contexts/AxiosContext";

export interface IVitals{
  reading_date:string,
  reading_time:string,
  height:string,
  weight:string,
  bmi:string,
  temperature:string,
  pulse:string,
  respiratory_rate:string,
  o2_saturation:string,
  pain:string,
  blood_pressure_mm:string,
  blood_pressure_hg:string,
  patient_encounter?:string
}

const vitals = async (axios: AxiosInstance, data: IVitals) => axios.post("/ehr/encounters/vitals/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useVitalsAdd() {
  const queryClient = useQueryClient();
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const toast = useToast();

  return useMutation(
    (data: IVitals) => vitals(axios as AxiosInstance, data),
    {
      mutationKey: "vitals",
      retry: false,

      onSuccess: () => {
        toast({ title: "Success!", description: "Data added successfully!", status: "success" });

        queryClient.invalidateQueries("prev-vitals");
      },
      onError: (error:any) => {
        toast({ title: "Failed!", description: error.message || "Data add unsuccessful!", status: "error" });
      },

    },
  );
}
