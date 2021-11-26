import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";

import { AxiosContext } from "../../contexts/AxiosContext";

const registerPharmacy = async (axios: AxiosInstance, data: any) => axios.post("user/pharmacy-signup/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useClinicReg(data: any) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);

  return useQuery(
    ["pharmacy_reg", data],
    () => registerPharmacy(axios as AxiosInstance, data),
    { retry: 2 },
  );
}
