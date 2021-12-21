import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import Loading from "../../../common/fallback/LoadingPage";
import { stepAtom } from "../atoms";
import usePatientProcedureAdd from "../../../../hooks/patientProcedure/usePatientProcedureAdd";
import MessagePage from "../../../common/fallback/MessagePage";

export default function Submit() {
  const { id } = useParams();
  const stepData = useRecoilValue<any>(stepAtom);

  const data = useMemo(() => ({
    ...Object.keys(stepData).reduce(
      (prev, curr) => {
        if (curr === "contact_no-prefix") {
          return { ...prev, contact_no: stepData[curr] + prev.contact_no ?? "" };
        }
        if (curr === "contact_no-value") {
          return { ...prev, contact_no: (prev.contact_no ?? "") + stepData[curr] };
        }
        if (curr === "first_name") {
          return { ...prev, full_name: `${stepData[curr]} ${prev.full_name.trim()}` };
        }
        if (curr === "last_name") {
          return { ...prev, full_name: `${prev.full_name.trim()} ${stepData[curr]}` };
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
    error, isError, isFetching,
  } = usePatientProcedureAdd({ ...data, ...{ patient_encounter: id } });

  if (isFetching) {
    return <Loading />;
  }

  if (isError) {
    return <MessagePage status="error" title="Oops!" message={(error as any).message} />;
  }

  return <Navigate to="/" />;
}
