import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { useSetRecoilState, RecoilState } from "recoil";
import { AxiosContext } from "../../contexts/AxiosContext";
import EducationExperienceAtom, { EducationExperience } from "../../atoms/educationExperience.atom";

const getEducationExperience = async (axios: AxiosInstance) => axios.get("dashboard/doctor/profile-settings/education-experience")
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useEducationExperience() {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const setEducationExperience = useSetRecoilState(EducationExperienceAtom);
  return useQuery(
    ["profile-settings/education-experience"],
    () => getEducationExperience(axios as AxiosInstance),
    {
      retry: false,
      staleTime: Infinity,
      onSuccess: (data) => {
        setEducationExperience(data as EducationExperience);
      },
    },
  );
}
