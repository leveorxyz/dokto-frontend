import { useContext } from "react";
import { useMutation } from "react-query";
import { AxiosInstance } from "axios";

import { AxiosContext } from "../../contexts/AxiosContext";

const getEducationAndExperience = async (axios: AxiosInstance) => axios.get("dashboard/doctor/profile-settings/education-experience/")
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

const updateEducationAndExperience = async (axios: AxiosInstance, data: unknown) => axios.put("dashboard/doctor/profile-settings/education-experience/", data)
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export const useUpdateEducationExperiences = () => {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  return useMutation(
    (data: unknown) => updateEducationAndExperience(axios as AxiosInstance, data),
    {},
  );
};

export const useEducationAndExperience = () => {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  return useMutation(
    () => getEducationAndExperience(axios as AxiosInstance),
  );
};
