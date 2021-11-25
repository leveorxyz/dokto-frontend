import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { AxiosContext } from "../../contexts/AxiosContext";

type Data = {
  doctor_username?: string;
  patient_id?: string;
};

const createConversation = async (axios: AxiosInstance, data: Data) => axios.post("twilio/create-conversation/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useCreateConversation(data: Data) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);

  return useQuery(
    ["twilio/createConversation", data],
    () => createConversation(axios as AxiosInstance, data),
    {
      retry: false,
      staleTime: Infinity,
      onSuccess: (res) => {
        console.log(res);
      },
    },
  );
}
