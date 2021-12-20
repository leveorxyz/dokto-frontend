import { useMemo } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import Loading from "../../../../common/fallback/LoadingPage";
import stepAtom from "../../../../../atoms/doctorProfileSettings";
import useUpdateProfileDetails from "../../../../../hooks/profile-settings/updateProfileDetails";
import MessagePage from "../../../../common/fallback/MessagePage";

export default function Submit() {
  const stepData = useRecoilValue<any>(stepAtom);

  const data = useMemo(() => ({
    ...Object.keys(stepData).reduce(
      (prev, curr) => {
        if (!stepData[curr] || stepData[curr] === "") return prev;
        return { ...prev, [curr]: stepData[curr] };
      },
      {
        contact_no: "",
        full_name: "",
      },
    ),
  }), [stepData]);

  const {
    error, isError, isSuccess, isFetching,
  } = useUpdateProfileDetails(data);

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
