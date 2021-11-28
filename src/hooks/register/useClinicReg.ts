import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";

import { AxiosContext } from "../../contexts/AxiosContext";

const registerClinic = async (axios: AxiosInstance, data: any) => axios.post("user/clinic-signup/", {
  password: data.password,
  street: data.street,
  city: data.city,
  email: data.email,
  zip_code: data.zip_code,
  contact_no: data.contact_no,
  state: data.state,
  full_name: data.full_name,
  number_of_practitioners: data.number_of_practitioners,
  profile_photo: data.profile_photo,
})

  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useClinicReg(data: any) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);

  return useQuery(
    ["clinic_reg", data],
    () => registerClinic(axios as AxiosInstance, data),
    { retry: 2 },
  );
}
