import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";

import { AxiosContext } from "../../contexts/AxiosContext";

type Data = {
  token: string;
};

const verifyEmail = async (axios: AxiosInstance, data: Data) => axios.get(`user/activate/${data.token}/`)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useVerifyEmail(data: Data) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  return useQuery(
    ["verifyEmail", data],
    () => verifyEmail(axios as AxiosInstance, data),
    {
      retry: false,
    },
  );
}
