import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { Country, State } from "country-state-city";

import { stepAtom } from "../atoms";

export default function Submit() {
  const stepData = useRecoilValue(stepAtom);

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
            return { ...prev, [curr]: Country.getCountryByCode((stepData as any)[curr]) };
          }
          if (curr === "state") {
            return { ...prev, [curr]: State.getStateByCode((stepData as any)[curr]) };
          }
          return { ...prev, [curr]: (stepData as any)[curr] };
        },
        { contact_no: "" },
      ),
    }),
    [stepData],
  );

  return <>{console.log(data)}</>;
}
