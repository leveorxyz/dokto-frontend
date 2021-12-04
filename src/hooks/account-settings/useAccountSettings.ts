import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { useSetRecoilState, RecoilState } from "recoil";
import { AxiosContext } from "../../contexts/AxiosContext";
import AccountSettingsAtom, { AccountSettings } from "../../atoms/accountSettings.atom";

const getAccountSettings = async (axios: AxiosInstance) => axios.get("dashboard/doctor/account-settings")
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useAccountSettings() {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const setAccountSettings = useSetRecoilState(AccountSettingsAtom);
  return useQuery(
    ["profile"],
    () => getAccountSettings(axios as AxiosInstance),
    {
      retry: false,
      staleTime: Infinity,
      onSuccess: (data) => {
        setAccountSettings(data as AccountSettings);
      },
    },
  );
}
