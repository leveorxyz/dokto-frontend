import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { RecoilState, useSetRecoilState } from "recoil";

import { AxiosContext } from "../../contexts/AxiosContext";

export enum ProfileSettingsURLs {
  profileDetail = "dashboard/doctor/profile-settings/profile-detail/",
  educationAndExperience = "dashboard/doctor/profile-settings/education-experience/",
  insurance = "dashboard/doctor/insurance/",
  professionalProfile = "dashboard/doctor/professional-profile/",
}

const getProfileSettins = async (
  axios: AxiosInstance,
  url: string,
) => axios.get(url)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

const updateProfileSettings = async (
  axios: AxiosInstance,
  url: string,
  data: unknown,
) => axios.put(url, data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export const useUpdateProfileSettings = (url: ProfileSettingsURLs, data: unknown) => {
  const axios = useContext<AxiosInstance | null>(AxiosContext);

  return useQuery(
    [`put/${url}`, url, data],
    () => updateProfileSettings(axios as AxiosInstance, url, data),
    {
      retry: 1,
      staleTime: Infinity,
    },
  );
};

export const useProfileSettings = (url: ProfileSettingsURLs, dataAtom: RecoilState<any>) => {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const setData = useSetRecoilState(dataAtom);

  return useQuery(
    [`get/${url}`, url],
    () => getProfileSettins(axios as AxiosInstance, url),
    {
      retry: 3,
      staleTime: Infinity,
      onSuccess: (data) => setData((prev: any) => ({ ...prev, ...data })),
    },
  );
};
