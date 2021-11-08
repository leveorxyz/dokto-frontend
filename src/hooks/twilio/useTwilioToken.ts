import { useContext } from "react";
import { useMutation } from "react-query";
import { AxiosInstance } from "axios";
import { useSetRecoilState } from "recoil";
import { AxiosContext } from "../../contexts/AxiosContext";
import { twilioTokenAtom } from "../../components/call/atoms";

type Data = {
  id: string;
  room_name: string;
};

const getToken = async (axios: AxiosInstance, data: Data) => axios.post("twilio/video-token/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useTwilioToken() {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const setAccessToken = useSetRecoilState(twilioTokenAtom);

  return useMutation(
    (data: Data) => getToken(axios as AxiosInstance, data),
    {
      mutationKey: "getAccessToken",
      retry: false,
      onSuccess: ({
        token,
      }) => {
        setAccessToken(token);
      },
    },
  );
}
