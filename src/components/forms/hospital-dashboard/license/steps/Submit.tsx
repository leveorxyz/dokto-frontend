import { useMemo } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import Loading from "../../../../common/fallback/LoadingPage";
import stepAtom from "../../../../../atoms/dashboard/hospitalLicense.atom";
import useUpdateHospitalLicense from "../../../../../hooks/profile-settings/useUpdateHospitalLicense";
import MessagePage from "../../../../common/fallback/MessagePage";

export default function Submit() {
  const stepData = useRecoilValue<any>(stepAtom);

  const data = useMemo(() => ({
    ...Object.keys(stepData).reduce(
      (prev, curr) => {
        if (!stepData[curr] || stepData[curr] === "") return prev;
        return { ...prev, [curr]: stepData[curr] };
      },
      {},
    ),
  }), [stepData]);

  const {
    error, isError, isSuccess, isFetching,
  } = useUpdateHospitalLicense(data);

  if (isFetching) {
    return <Loading />;
  }

  if (isSuccess) {
    return <MessagePage status="success" title="Success!" message="Your data have been updated successfully" />;
  }

  if (isError) {
    return <MessagePage status="error" title="Oops!" message={(error as any).message} />;
  }

  return <Navigate to="/" />;
}
