import { useMemo } from "react";
import { Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Country, State } from "country-state-city";

import Loading from "../../../common/fallback/Loading";
import { stepAtom } from "../atoms";
import usePatientReg from "../../../../hooks/register/usePatientReg";

export default function Submit() {
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
        if (curr === "country") {
          return { ...prev, [curr]: Country.getCountryByCode(stepData[curr])?.name };
        }
        if (curr === "state") {
          if (stepData[curr] === "") return prev;
          return { ...prev, [curr]: State.getStateByCode(stepData[curr])?.name };
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
    error, isFetching,
  } = usePatientReg(data);

  if (isFetching) {
    return <Loading />;
  }

  if (error) {
    return <>{(error as any).message}</>;
  }

  return <Redirect to="/" />;
}
