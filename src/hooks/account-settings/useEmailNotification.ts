import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { useSetRecoilState, RecoilState } from "recoil";
import { AxiosContext } from "../../contexts/AxiosContext";
import AccountSettingsAtom, { AccountSettings } from "../../atoms/accountSettings.atom";

const getEmailNotification = async (axios: AxiosInstance) => axios.get("dashboard/doctor/account-settings")
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useEmailNotification() {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const setEmailNotification = useSetRecoilState(AccountSettingsAtom);
  return useQuery(
    ["account-settings"],
    () => getEmailNotification(axios as AxiosInstance),
    {
      retry: false,
      staleTime: Infinity,
      onSuccess: (data) => {
        setEmailNotification(data as AccountSettings);
      },
    },
  );
}
