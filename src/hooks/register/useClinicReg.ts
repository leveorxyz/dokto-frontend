import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";

import { AxiosContext } from "../../contexts/AxiosContext";

const registerClinic = async (axios: AxiosInstance, data: any) => axios.post("user/clinic-signup/", data)

  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useClinicReg(data: any) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);

  return useQuery(
    ["clinic_reg", data],
    () => registerClinic(axios as AxiosInstance, data),
    { retry: false, staleTime: Infinity },
  );
}
