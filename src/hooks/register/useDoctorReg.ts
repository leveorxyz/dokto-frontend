import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";

import { AxiosContext } from "../../contexts/AxiosContext";

const registerDoctor = async (axios: AxiosInstance, data: any) => axios.post("user/doctor-signup/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useDoctorReg(data: any) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);

  return useQuery(
    ["doctor_reg", data],
    () => registerDoctor(axios as AxiosInstance, data),
    { retry: 2 },
  );
}
