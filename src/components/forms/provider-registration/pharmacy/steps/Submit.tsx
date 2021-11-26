import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { Navigate } from "react-router-dom";
import { Country, State } from "country-state-city";

import { stepAtom } from "../atoms";
import useDoctorReg from "../../../../../hooks/register/useDoctorReg";
import MessagePage from "../../../../common/fallback/MessagePage";

export default function Submit() {
  const stepData = useRecoilValue<any>(stepAtom);

  const data = useMemo(
    () => ({
      ...Object.keys(stepData).reduce(
        (prev, curr) => {
          if (curr === "contact_no-prefix") {
            return { ...prev, contact_no: (stepData as any)[curr] + prev.contact_no ?? "" };
          }
          if (curr === "contact_no-value") {
            return { ...prev, contact_no: (prev.contact_no ?? "") + (stepData as any)[curr] };
          }
          if (curr === "country") {
            return { ...prev, [curr]: Country.getCountryByCode((stepData as any)[curr])?.name };
          }
          if (curr === "state") {
            if ((stepData as any)[curr] === "") return prev;
            return { ...prev, [curr]: State.getStateByCode((stepData as any)[curr])?.name };
          }
          if (stepData[curr] === "") return prev;
          return { ...prev, [curr]: (stepData as any)[curr] };
        },
        { contact_no: "" },
      ),
    }),
    [stepData],
  );

  const {
    error, isError, isSuccess, isFetching,
  } = useDoctorReg(data);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    return <MessagePage status="success" title="Success!" message="You have successfully registered to Dokto! Please check your email and verify your email to log in to Dokto" />;
  }

  if (isError) {
    return <MessagePage status="error" title="Oops!" message={(error as any).message} />;
  }

  return <Navigate to="/" />;
}
