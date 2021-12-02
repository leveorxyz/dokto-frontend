import { useMemo } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import Loading from "../../../common/fallback/LoadingPage";
import { stepAtom } from "../atoms";
import usePatientReg from "../../../../hooks/register/usePatientReg";
import MessagePage from "../../../common/fallback/MessagePage";

export default function Submit() {
  const stepData = useRecoilValue<any>(stepAtom);

  const data = useMemo(() => ({
    ...Object.keys(stepData).reduce(
      (prev, curr) => {
        if (curr === "specialty" && typeof (stepData as any)[curr] === "string") {
          return { ...prev, [curr]: [(stepData as any)[curr]] };
        }
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
  } = usePatientReg(data);

  if (isFetching) {
    return <Loading />;
  }

  if (isSuccess) {
    return <MessagePage status="success" title="Success!" message="You have successfully registered to Dokto! Please check your email and verify your email to log in to Dokto" />;
  }

  if (isError) {
    return <MessagePage status="error" title="Oops!" message={(error as any).message} />;
  }

  return <Navigate to="/" />;
}
