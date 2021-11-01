import { useMemo, useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Country, State } from "country-state-city";

import { stepAtom } from "../atoms";
import useDoctorReg from "../../../../../hooks/register/useDoctorReg";

export default function Submit() {
  const stepData = useRecoilValue(stepAtom);
  const [isLoading, setIsLoading] = useState(true);

  const data = useMemo(
    () => ({
      ...Object.keys(stepData).reduce(
        (prev, curr) => {
          if (curr === "contact_no-prefix") {
            return { ...prev, contact_no: (stepData as any)[curr] + prev.contact_no };
          }
          if (curr === "contact_no-value") {
            return { ...prev, contact_no: prev.contact_no + (stepData as any)[curr] };
          }
          if (curr === "country") {
            return { ...prev, [curr]: Country.getCountryByCode((stepData as any)[curr])?.name };
          }
          if (curr === "state") {
            return { ...prev, [curr]: State.getStateByCode((stepData as any)[curr])?.name };
          }
          if (curr === "specialty" && typeof (stepData as any)[curr] === "string") {
            return { ...prev, [curr]: [(stepData as any)[curr]] };
          }
          if (curr === "language" && typeof (stepData as any)[curr] === "string") {
            return { ...prev, [curr]: [(stepData as any)[curr]] };
          }
          return { ...prev, [curr]: (stepData as any)[curr] };
        },
        { contact_no: "" },
      ),
    }),
    [stepData],
  );

  const {
    status, data: response, error, isFetching,
  } = useDoctorReg(data);

  useEffect(() => {
    setIsLoading(() => isFetching);
    console.log(status, response, error);
  }, [status, error, isFetching, response]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {
        error ? <>{(error as any).message}</> : <>Success</>
      }
    </>
  );
}
