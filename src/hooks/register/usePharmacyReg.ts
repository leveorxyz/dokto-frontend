import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";

import { AxiosContext } from "../../contexts/AxiosContext";

const registerPharmacy = async (axios: AxiosInstance, data: any) => axios.post("user/pharmacy-signup/", {
  email: data.email,
  password: data.password,
  full_name: data.full_name,
  street: data.street,
  state: data.state,
  city: data.city,
  zip_code: data.zip_code,
  contact_no: data.contact_no,
  profile_photo: data.profile_photo,
})
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
