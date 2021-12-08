import { useContext } from "react";
import { useQuery } from "react-query";
import { AxiosInstance } from "axios";
import { useSetRecoilState, RecoilState } from "recoil";
import { AxiosContext } from "../../contexts/AxiosContext";
import ProfileDetailsAtom, { ProfileDetails } from "../../atoms/profileDetails.atom";

const getProfileDetails = async (axios: AxiosInstance) => axios.get("dashboard/doctor/profile-settings/profile-detail")
  .then(({ data: { result } }) => Promise.resolve(result))
  .catch(({ response: { data: response } }) => Promise.reject(response));

export default function useProfileDetails() {
  const axios = useContext<AxiosInstance | null>(AxiosContext);
  const setProfileDetails = useSetRecoilState(ProfileDetailsAtom);
  return useQuery(
    ["profile-settings/profile-detail"],
    () => getProfileDetails(axios as AxiosInstance),
    {
      retry: false,
      staleTime: Infinity,
      onSuccess: (data) => {
        setProfileDetails(data as ProfileDetails);
      },
    },
  );
}
