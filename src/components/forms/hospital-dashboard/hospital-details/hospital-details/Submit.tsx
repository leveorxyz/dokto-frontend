import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import Loading from "../../../../common/fallback/LoadingPage";
import hospitalAtom from "../../../../../atoms/hospitalProfile";
import useUpdateHospitalDetails from "../../../../../hooks/profile-settings/useUpdateHospitalDetails";
import MessagePage from "../../../../common/fallback/MessagePage";

export default function Submit() {
  const { profile_photo: ProfilePhoto, ...rest } = useRecoilValue<any>(hospitalAtom);
  const payload = rest;

  if (ProfilePhoto) {
    payload.profile_photo = ProfilePhoto;
  }

  const {
    error, isError, isSuccess, isFetching,
  } = useUpdateHospitalDetails(payload);

  if (isFetching) {
    return <Loading />;
  }

  if (isSuccess) {
    return <MessagePage status="success" title="Success!" message="Successfully updated profile data" />;
  }

  if (isError) {
    return <MessagePage status="error" title="Oops!" message={(error as any).message} />;
  }

  return <Navigate to="/profile-settings" />;
}
