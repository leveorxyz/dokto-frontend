import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";

import { AxiosContext } from "../../contexts/AxiosContext";

const registerPatient = async (axios: AxiosInstance, data: any) => axios.post("user/patient-signup/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function usePatientReg(data: any) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);

  return useQuery(
    ["patient_reg", data],
    () => registerPatient(axios as AxiosInstance, data),
    { retry: 2 },
  );
}
