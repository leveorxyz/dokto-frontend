import { useContext } from "react";
import { useMutation } from "react-query";
import { AxiosInstance } from "axios";

import { AxiosContext } from "../../contexts/AxiosContext";

type Data = {
  userType: string;
  username: string;
};

const checkAvailability = async (axios: AxiosInstance, data: Data) => {
  const response = await axios.get(`user/exists/${data.userType}/${data.username}/`);
  return response;
};

export default function useCheckUsername() {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  return useMutation(
    (data: Data) => checkAvailability(axios as AxiosInstance, data),
    { retry: false },
  );
}
