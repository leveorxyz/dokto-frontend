import { useContext } from "react";
import { useQuery, useQueryClient } from "react-query";
import { AxiosInstance } from "axios";
import { useSetRecoilState, RecoilState } from "recoil";

import { AxiosContext } from "../../contexts/AxiosContext";

const getAccountSettings = async (axios: AxiosInstance) => axios.get("dashboard/account-settings/")
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

const updateAccountSettings = async (axios: AxiosInstance, data: unknown) => axios.put("dashboard/account-settings/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export const useUpdateAccountSettings = (data: unknown) => {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const queryClient = useQueryClient();

  return useQuery(
    ["account-settings", axios, data],
    () => updateAccountSettings(axios as AxiosInstance, data),
    {
      onSuccess: () => queryClient.invalidateQueries("get/account-settings"),
    },
  );
};

export default function useAccountSettings(dataAtom: RecoilState<unknown>) {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const setData = useSetRecoilState(dataAtom);

  return useQuery(
    ["get/account-settings", { dataAtom }],
    () => getAccountSettings(axios as AxiosInstance),
    {
      retry: false,
      staleTime: Infinity,
      onSuccess: (data) => setData(data),
    },
  );
}
